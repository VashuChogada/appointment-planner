import React from "react";

export const TileList = ({contacts}) => {
  return (
    contacts.map(contact => {
      return(
        <div key={contact.phone} style={{border: '1px solid black'}}>
          <p>{contact.name}</p>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      )
    })
  );
};
