import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e) =>{
    setTitle(e.target.value);
  }
  const handleDateChange = (e) =>{
    setDate(e.target.value);
  }
  const handleTimeChange = (e) =>{
    setTime(e.target.value);
  }
  const handleContactChange = (e) =>{
    setContact(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={title} id='title' onChange={handleTitleChange} placeholder='Title' required/>
      <input min={getTodayString()} id='date' type='date' value={date} onChange={handleDateChange} required/>
      <input type='time' value={time} id='time' onChange={handleTimeChange} required/>
      <ContactPicker id='contact' handleContactChange={handleContactChange} contacts={contacts}/>
      <button type='submit'> Add Appointment </button>
    </form>
  );
};
