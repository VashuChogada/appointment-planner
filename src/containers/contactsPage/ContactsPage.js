import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = ({contacts, addContact}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(() => {
   contacts.forEach(contact => {
    if(contact.name === name) {
      return setDuplicate(true);
    }
    return setDuplicate(false);
   });
 })

 const handleSubmit = (e) => {
  e.preventDefault();
  if (duplicate) {
    return
  }
  addContact({
    name: name,
    phone: phone,
    email: email
  });
  setName('');
  setPhone('');
  setEmail('');
};

 

  return (
    <div>
      <section>
        <h2>
            Add Contact
        </h2>
        <ContactForm handleSubmit={handleSubmit} setName={setName} setPhone={setPhone} setEmail={setEmail} name={name} phone={phone} email={email} duplicate={duplicate}/>
      </section>
      <hr />

      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>

    </div>
  );
};
