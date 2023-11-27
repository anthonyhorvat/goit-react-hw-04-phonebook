import React, { Component } from 'react';

import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { Notify } from 'notiflix';
import { AppContainer, ContactsTitle, FormTitle } from './App.styled';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      const parsedContacts = JSON.parse(storedContacts);
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  updateContacts = newContact => {
    const { contacts } = this.state;
    const isNameExists = contacts.some(
      contact => contact.name === newContact.name
    );

    if (isNameExists) {
      Notify.info(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <AppContainer>
        <FormTitle>Phonebook</FormTitle>
        <ContactForm addContact={this.updateContacts} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter onChange={this.handleFilterChange} />
        {this.state.contacts.length > 0 && (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
      </AppContainer>
    );
  }
}
