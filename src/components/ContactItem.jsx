// eslint-disable-next-line no-unused-vars
import React from 'react';
import ContactItemImage from "./ContactItemImage.jsx";
import ContactItemBody from "./ContactItemBody.jsx";
import DeleteButton from "./DeleteButton.jsx";

// eslint-disable-next-line no-unused-vars,react/prop-types
function ContactItem({imageUrl, name, tag, id, onDelete}) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl}/>
      <ContactItemBody name={name} tag={tag}/>
      <DeleteButton id={id} onDelete={onDelete}/>
    </div>
  );
}

export default ContactItem;