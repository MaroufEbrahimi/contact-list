import React from "react";

import "./AddContact.css";

const AddContact = () => {
  return (
    <div className="login_container">
      <form>
        <div className="input_box">
          <input type="text" required />
          <span></span>
          <label>User Name</label>
        </div>

        <div className="input_box">
          <input type="text" required />
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
