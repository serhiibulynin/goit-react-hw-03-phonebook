import React, { Component } from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import { v4 as uuidv4 } from "uuid";
// import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;
    const contactIncludesName = contacts
      .map((contact) => contact.name.toLowerCase())
      .includes(name.toLowerCase());
    if (contactIncludesName) {
      return alert(`${name} is already in contacts`);
    }
    console.log(`contacts`, name);
    this.props.onSubmit(name, number);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form className={styles.FormEditor} onSubmit={this.handleSubmit}>
          <label className={styles.FormEditorLabel} htmlFor={this.nameInputId}>
            Name
            <input
              className={styles.FormEditorInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChangeInput}
              id={this.nameInputId}
            />
          </label>
          <label
            className={styles.FormEditorLabel}
            htmlFor={this.numberInputId}
          >
            Number
            <input
              className={styles.FormEditorInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.handleChangeInput}
              id={this.numberInputId}
            />
          </label>
          <button className={styles.FormEditorButton} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

const mapstateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) =>
    dispatch(contactsActions.addContact(name, number)),
});

export default connect(mapstateToProps, mapDispatchToProps)(ContactForm);
