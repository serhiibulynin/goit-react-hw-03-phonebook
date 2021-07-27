import React, { Component } from "react";
import ContactForm from "./components/contactForm/ContactForm";
import ContaсtList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }
  }

  addContact = (data) => {
    const contactIncludesName = this.state.contacts
      .map((contact) => contact.name.toLowerCase())
      .includes(data.name.toLowerCase());
    if (contactIncludesName) {
      return alert(`${data.name} is already in contacts`);
    }
    const contact = { id: uuidv4(), name: data.name, number: data.number };
    this.setState((prev) => ({ contacts: [contact, ...prev.contacts] }));
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = (e) => this.setState({ filter: e.target.value });

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContaсtList
          contacts={filteredContacts}
          onRemoveContact={this.removeContact}
        />
      </>
    );
  }
}

export default App;
