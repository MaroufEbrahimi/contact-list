import React, { useState } from "react";

import "./AddContact.css";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div className="login_container">
      <form>
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

        <div className="submit">
          <input type="submit" value="Add" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default AddContact;
