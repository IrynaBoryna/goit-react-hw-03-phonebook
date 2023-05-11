import { Component } from 'react';
import { ContactForm } from './ContactForm/contactForm'
import { ContactList } from './ContactList/contactList';
import { Filter } from './Filter/filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = data => {
    this.state.contacts.some(contacts => contacts.name === data.name)
      ? alert(` ${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [data, ...prevState.contacts],
        }));
  };

  inputChangeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };
 
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }


  render() {
    const { filter } = this.state;
    return (
      <div style={divStyles}>
        <div
          style={{
            width: 1100,
          }}
        >
          <h1 style={{ fontSize: 60 }}>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmit} />
          <h2 style={{ fontSize: 50 }}>Contacts</h2>
          <Filter value={filter} onChange={this.inputChangeFilter} />
          <ContactList
            contacts={this.getVisibleContacts()}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

const divStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
  flexDirection: 'column',
};
