import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find a contact by name</label>
      <Input
        type="text"
        name="filter"
        id="filter"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
