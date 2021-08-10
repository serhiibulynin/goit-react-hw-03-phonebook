import { createAction } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const removeContact = createAction("contacts/remove");

const changeFilter = createAction("contacts/changeFilter");

const exportActions = { addContact, removeContact, changeFilter };
export default exportActions;

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: { id: uuidv4(), name, number },
// });

// const removeContact = (contactId) => ({
//   type: types.REMOVE,
//   payload: contactId,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
