import PropTypes from 'prop-types';
import { List, ListItem } from './ContactList.styled';
import { Contact } from './Contact/Contact';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <Contact
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      </ListItem>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
