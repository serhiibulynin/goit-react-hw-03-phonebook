import React from "react";
import ContactListItem from "./contactListItem/ContactListItem";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.ContactList}>
    {contacts.map((contacts) => (
      <ContactListItem
        key={contacts.id}
        contacts={contacts}
        onRemoveContact={onRemoveContact}
      />
    ))}
  </ul>
);

export default ContactList;
