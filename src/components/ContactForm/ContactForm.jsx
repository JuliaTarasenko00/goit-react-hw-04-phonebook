import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ContactsForms,
  ContactsLabel,
  ContactsBtn,
  ContactsInput,
} from './ContactsForm.styled';

export const ContactsForm = ({ onAddPhoneBook }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const formSubmit = e => {
    e.preventDefault();

    onAddPhoneBook({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <ContactsForms onSubmit={formSubmit}>
        <ContactsLabel>
          <span>Name</span>
          <ContactsInput
            onChange={inputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContactsLabel>
        <ContactsLabel>
          <span>Phone</span>
          <ContactsInput
            onChange={inputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContactsLabel>
        <ContactsBtn>Add contact</ContactsBtn>
      </ContactsForms>
    </>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};
