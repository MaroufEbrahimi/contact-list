import React from "react";

import AddContact from "./AddContact/AddContact";
import ContactList from "./ContactList/ContactList";

import './App.css'

const App = () => {
  return (
    <div className="container">
      <div>
        <AddContact />
      </div>

      <div>
        <ContactList />
      </div>
    </div>
  );
};

export default App;
