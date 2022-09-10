import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  duplicate
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
      {duplicate ? <p style={{color: 'red'}}>Name: Contact for this name already exists!</p> : <p>Name: </p>}
      <input onChange={handleNameChange} type='text' value={name} id='name' required placeholder="First Last"/>
      <p>Phone: </p>
      <input onChange={handlePhoneChange} type='text' value={phone} id='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" />
      <p>Email: </p>
      <input onChange={handleEmailChange} type='text' value={email} id='email' required placeholder="John@email.com"/>
      <button type='submit'>Submit</button>
    </form>
  );
};
