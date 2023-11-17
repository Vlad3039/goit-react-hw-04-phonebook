import PropTypes from 'prop-types';
import { Button } from '../ContactList.styled';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
