import React, { useState, useEffect } from 'react';

import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { Notify } from 'notiflix';
import { AppContainer, ContactsTitle, FormTitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const updateContacts = newContact => {
    const isNameExists = contacts.some(
      contact => contact.name === newContact.name
    );

    if (isNameExists) {
      Notify.info(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <AppContainer>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm addContact={updateContacts} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter onChange={handleFilterChange} />
      {contacts.length > 0 && (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      )}
    </AppContainer>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const storedContacts = localStorage.getItem('contacts');
//     if (storedContacts) {
//       const parsedContacts = JSON.parse(storedContacts);
//       this.setState({ contacts: parsedContacts });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleFilterChange = event => {
//     this.setState({ filter: event.target.value });
//   };

//   updateContacts = newContact => {
//     const { contacts } = this.state;
//     const isNameExists = contacts.some(
//       contact => contact.name === newContact.name
//     );

//     if (isNameExists) {
//       Notify.info(`${newContact.name} is already in contacts`);
//       return;
//     }
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const filteredContacts = this.getFilteredContacts();
//     return (
//       <AppContainer>
//         <FormTitle>Phonebook</FormTitle>
//         <ContactForm addContact={this.updateContacts} />
//         <ContactsTitle>Contacts</ContactsTitle>
//         <Filter onChange={this.handleFilterChange} />
//         {this.state.contacts.length > 0 && (
//           <ContactList
//             contacts={filteredContacts}
//             onDeleteContact={this.deleteContact}
//           />
//         )}
//       </AppContainer>
//     );
//   }
// }
