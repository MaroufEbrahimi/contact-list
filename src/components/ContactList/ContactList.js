import React from "react";
import { useState } from "react";

import "./ContactList.css";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = () => {
  const time = new Date().toLocaleTimeString();
  const [upTime, setUpTime] = useState(time);

  setInterval((time) => {
    time = new Date().toLocaleTimeString();
    setUpTime(time);
  }, 1000);

  return (
    <div className="contact_list">
      <div className="notification_area">
        <div className="notification_area_left">
          <i className="bi bi-envelope-fill"></i>
          <i className="bi bi-telegram"></i>
          <i className="bi bi-linkedin"></i>
        </div>
        <div className="notification_area_right">
          <i className="bi bi-wifi"></i>
          <i className="bi bi-battery-half"></i>
          <i>{upTime}</i>
        </div>
      </div>

      {/* render the contact card */}
      <div className="render_contact_card">
        <ContactCard />
      </div>

      <div className="footer_area">
        <div>
          <i className="bi bi-arrows-angle-contract"></i>
        </div>
        <div>
          <i className="bi bi-crop"></i>
        </div>
        <div>
          <i className="bi bi-arrow-left"></i>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
