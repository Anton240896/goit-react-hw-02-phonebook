import React, { Component } from 'react';

import { ContactForm } from 'components/ContactForm/contactForm';
import { ContactList } from 'components/ContactList/contactList';
import { Filter } from 'components/Filter/filter';
import { Container, PhonebookName } from './App.styled';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  /*============================================*/

  addContact = data => {
    const { contacts } = this.state;
    const newNames = data.name.toLowerCase();

    const existingContact = contacts.some(
      ({ name }) => name.toLowerCase() === newNames
    );

    if (existingContact) {
      return alert(`${data.name} is already in contacts!`);
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { ...data, id: nanoid }] };
    });
  };

  /*============================================*/

  onFilter = evt => {
    this.setState({ filter: evt.target.value });
  };
  /*============================================*/

  filterElem = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  /*============================================*/

  deleteContact = deleteId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== deleteId),
      };
    });
  };

  /*============================================*/

  render() {
    const filterElement = this.filterElem();

    return (
      <Container>
        <PhonebookName>Phonebook</PhonebookName>
        <ContactForm addContact={this.addContact} />
        <h3>Contacts</h3>
        <Filter value={this.state.filter} onChange={this.onFilter} />
        <ContactList
          contactsBook={filterElement}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
