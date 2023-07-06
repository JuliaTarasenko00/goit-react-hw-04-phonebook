import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid/non-secure';

import { ContactsForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export { ContactList } from './ContactList/ContactList';

const KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  const notify = name => toast.error(`${name} is already in contacts.`);

  const onAddPhoneBook = contact => {
    const namePhone = contacts.find(({ name }) => contact.name === name);
    if (namePhone) {
      notify(contact.name);
      return;
    }
    const contactList = {
      ...contact,
      id: nanoid(),
    };
    setContacts(prevState => [contactList, ...prevState]);
  };

  const onRemoveContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const filterPhone = e => {
    setFilter(e.target.value.toLowerCase());
  };
  useEffect(() => {
    window.localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm onAddPhoneBook={onAddPhoneBook} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterPhone} />
      <ContactList
        filteredContacts={filteredContacts}
        onClick={onRemoveContact}
      />
      <ToastContainer position="top-center" theme="colored" />
    </>
  );
};
