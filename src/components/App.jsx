import Notiflix from 'notiflix';

import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box/Box';
import { Boxitem } from './ContactsList/ContactList.styled';

import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsList = JSON.parse(localStorage.getItem('ContactsList'));
    if (contactsList) {
      this.setState({ contacts: contactsList });
    }
  }
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState) {
      localStorage.setItem('ContactsList', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    const some = this.state.contacts.some(
      el => el.name.toLowerCase() === normalizedName
    );
    if (some) {
      return Notiflix.Notify.failure(` ${name} is already in contacts`);
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilterInput = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const contactsToShow = this.getFilteredContacts();

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
          <ContactForm onSubmit={this.addContact} />{' '}
        </div>
        {this.state.contacts.length ? (
          <div>
            <h2>Contacts</h2>
            <Boxitem
              display="inline-flex"
              flexDirection="column"
              border="1px solid black"
            >
              <Filter
                value={this.state.filter}
                onChange={this.handleFilterInput}
              />{' '}
            </Boxitem>
            <ContactList
              contacts={contactsToShow}
              onDeleteContact={this.deleteContact}
            />
          </div>
        ) : (
          <h2>No contacts yet</h2>
        )}
      </Box>
    );
  }
}
