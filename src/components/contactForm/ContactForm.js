import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <p>Name: {name}</p>
      <input onChange={handleNameChange} type='text' value={name} id='name'/>
      <p>Phone: {phone}</p>
      <input onChange={handlePhoneChange} type='text' value={phone} id='phone'/>
      <p>Email: {email}</p>
      <input onChange={handleEmailChange} type='text' value={email} id='email'/>
      <button type='submit'>Submit</button>
    </form>
  );
};
