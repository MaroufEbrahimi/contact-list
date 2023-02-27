import React, { useState } from "react";

import "./AddContact.css";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (name === "" || name === " " || number === "" || number === " ") {
      alert("All the field are mandatory!");
      return;
    }
    props.addContactHandler(name, number);
    setName("");
    setNumber("");
  };

  return (
    <div className="login_container">
      <form onSubmit={add}>
        <div className="input_box">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span></span>
          <label>User Name</label>
        </div>

        <div className="input_box">
          <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <span></span>
          <label>Phone Number</label>
        </div>

        <div className="file_handler">
          <input type="file" name="image-upload" id="input" accept="image/*" />
          <label htmlFor="input" className="image-upload">
            <i className="bi bi-image-fill" title="choose your photo"></i>
          </label>
        </div>

        <div className="submit">
          <input type="submit" value="Add" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default AddContact;
