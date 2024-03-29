import React from "react";

import "./ContactCard.css";

const ContactCard = (props) => {
  const { id, name, number, file } = props.contact;

  return (
    <div className="contact_card">
      <div className="contact_card_divs">
        <div className="contact_card_img">
          <img src={file} />
        </div>

        <div className="contact_card_ditails">
          <h4>{name}</h4>
          <p>{number}</p>
        </div>

        <div className="contact_card_delete">
          <i
            className="bi bi-trash"
            onClick={() => props.deleteHandler(id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
