import { ContactForm } from './ContactForm/ContactForm';

import React, { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import toast, { Toaster } from 'react-hot-toast';

// const CONTACTS_KEY = [];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("CONTACTS_KEY");
    const parseSavedContacts = JSON.parse(savedContacts);

    if(savedContacts) {
      this.setState({contacts: parseSavedContacts})
    }
  }

  componentDidUpdate(prevState) {
    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem("CONTACTS_KEY", JSON.stringify(this.state.contacts))
    }
  }

  handleAddContact = contact => {
    if (this.state.contacts.some(item => item.name === contact.name)) {
      toast.error('Contact already exists');
      return true;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
    return false;
  };

  handleDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleFilterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim())
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          handleChange={this.handleChangeFilter}
        />
        {this.state.contacts.length !== 0 && <ContactsList
          contacts={this.handleFilterContacts()}
          deleteContact={this.handleDeleteContact}
        />}
        
        <Toaster />
      </div>
    );
  }
}
