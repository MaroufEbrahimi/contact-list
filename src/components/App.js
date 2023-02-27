import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AddContact from "./AddContact/AddContact";
import ContactList from "./ContactList/ContactList";

import "./App.css";

const App = () => {
  const LOCAL_STROAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  return (
    <div className="container">
      <div>
        <AddContact addContactHandler={addContactHandler} />
      </div>

      <div>
        <ContactList contacts={contacts} getContactId={removeContactHandler} />
      </div>
    </div>
  );
};

export default App;
