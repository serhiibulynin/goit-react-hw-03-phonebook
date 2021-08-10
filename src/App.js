import React from "react";
import ContactForm from "./components/contactForm/ContactForm";
import ContaсtList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";

const App = () => {
  return (
    <>
      <ContactForm />

      <Filter />
      <ContaсtList />
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     // contacts: [],
//     // filter: "",
//   };

//   // componentDidMount() {
//   //   const contacts = localStorage.getItem("contacts");
//   //   const parsedContacts = JSON.parse(contacts);

//   //   if (parsedContacts) {
//   //     this.setState({ contacts: parsedContacts });
//   //   }
//   // }

//   // componentDidUpdate(prevProps, prevState) {
//   //   const nextContacts = this.state.contacts;
//   //   const prevContacts = prevState.contacts;

//   //   if (nextContacts !== prevContacts) {
//   //     localStorage.setItem("contacts", JSON.stringify(nextContacts));
//   //   }
//   // }

//   // addContact = (data) => {
//   //   const contactIncludesName = this.state.contacts
//   //     .map((contact) => contact.name.toLowerCase())
//   //     .includes(data.name.toLowerCase());
//   //   if (contactIncludesName) {
//   //     return alert(`${data.name} is already in contacts`);
//   //   }
//   //   const contact = { id: uuidv4(), name: data.name, number: data.number };
//   //   this.setState((prev) => ({ contacts: [contact, ...prev.contacts] }));
//   // };

//   // removeContact = (contactId) => {
//   //   this.setState((prevState) => {
//   //     return {
//   //       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//   //     };
//   //   });
//   // };

//   // changeFilter = (e) => this.setState({ filter: e.target.value });

//   render() {
//     // const { filter } = this.state;
//     // const filteredContacts = this.getFilteredContacts();
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <ContactForm />
//         <h2>Contacts</h2>
//         <Filter />
//         <ContaсtList />
//       </>
//     );
//   }
// }

// export default App;
