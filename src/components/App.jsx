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
      const { contacts } = prevState;
      data.id = nanoid();
      return { contacts: [...contacts, data] };
    });
  };

  /*============================================*/

  onfilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };
  /*============================================*/

  filterElem = contacts => {
    const filter = this.state.filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };
  /*============================================*/

  deleteContact = evt => {
    const deleteId = evt.currentTarget.id;
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(
        ({ id }) => id !== deleteId
      );
      return { contacts: newContacts };
    });
  };

  /*============================================*/

  render() {
    const filterElement = this.filterElem(this.state.contacts);

    return (
      <Container>
        <PhonebookName>Phonebook</PhonebookName>
        <ContactForm addContact={this.addContact} />
        <h3>Contacts</h3>
        <Filter value={this.state.filter} onChange={this.handleFilter} />
        <ContactList
          contactsBook={filterElement}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
