import React from "react";
import ContactListItem from "./contactListItem/ContactListItem";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
  <>
    {contacts.length > 0 && <h2>Contacts</h2>}
    <ul className={styles.ContactList}>
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onRemoveContact={onRemoveContact}
        />
      ))}
    </ul>
  </>
);

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveContact: (id) => dispatch(contactsActions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
