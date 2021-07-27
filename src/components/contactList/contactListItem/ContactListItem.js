import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ contacts, onRemoveContact }) => (
  <li className={styles.ContactListItem}>
    {contacts.name + ":" + contacts.number}
    {
      <button
        className={styles.ContactListButton}
        type="button"
        name="delete"
        onClick={() => onRemoveContact(contacts.id)}
      >
        delete
      </button>
    }
  </li>
);

ContactListItem.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
