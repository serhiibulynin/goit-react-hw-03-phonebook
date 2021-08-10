import React from "react";
// import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ contact, onRemoveContact }) => (
  <li className={styles.ContactListItem}>
    {contact.name + ":" + contact.number}
    {
      <button
        className={styles.ContactListButton}
        type="button"
        name="delete"
        onClick={() => onRemoveContact(contact.id)}
      >
        delete
      </button>
    }
  </li>
);

// ContactListItem.propTypes = {
//   onRemoveContact: PropTypes.func.isRequired,
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

export default ContactListItem;
