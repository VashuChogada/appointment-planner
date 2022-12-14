import React from "react";

export const ContactPicker = ({contacts,handleContactChange}) => {
  return (
    <select onChange={handleContactChange}>
      <option>No Contact</option>
      {contacts.map(contact => {
        return(
          <option key={contact.name}>{contact.name}</option>
        )
      })}
    </select>
  );
};
