import { useState } from 'react';
import { useHookLS } from './hooks/hookLS';

import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { Box } from './Box/Box';
import { Boxitem } from './ContactsList/ContactList.styled';

import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactList';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsList = JSON.parse(localStorage.getItem('contactsList'));
    return contactsList || initialState;
  });

  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    const some = contacts.some(el => el.name.toLowerCase() === normalizedName);
    if (some) {
      return Notiflix.Notify.failure(` ${name} is already in contacts`);
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([contact, ...contacts]);
  };

  const handleFilterInput = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const contactsToShow = getFilteredContacts();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gridGap={10}
      width={[1 / 2]}
      ml={'auto'}
      mr={'auto'}
      p={20}
    >
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={addContact} />{' '}
      </div>
      {contacts.length ? (
        <div>
          <h2>Contacts</h2>
          <Boxitem
            display="inline-flex"
            flexDirection="column"
            border="1px solid black"
          >
            <Filter value={filter} onChange={handleFilterInput} />{' '}
          </Boxitem>
          <ContactList
            contacts={contactsToShow}
            onDeleteContact={deleteContact}
          />
        </div>
      ) : (
        <h2>No contacts yet</h2>
      )}
    </Box>
  );
}
