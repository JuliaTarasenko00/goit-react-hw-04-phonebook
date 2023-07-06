import PropTypes from 'prop-types';
import { Contact, ContactTitle, ContactBtn } from './Contact.styled';

export const ContactList = ({ filteredContacts, onClick }) => {
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <Contact key={id}>
          <ContactTitle>• {name}:</ContactTitle>
          <p>{number}</p>
          <ContactBtn type="button" onClick={() => onClick(id)}>
            Delete
          </ContactBtn>
        </Contact>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
};
