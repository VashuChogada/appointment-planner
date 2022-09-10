import React, {useState} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({
      title: e.title,
      contact: e.contact,
      date: e.date,
      time: e.time
    });
    // setTitle('');
    // setContact('');
    // setDate('');
    // setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        contacts={contacts}

        setContact={setContact}

        setTitle={setTitle}

        setDate={setDate}

        setTime={setTime}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments} />
      </section>
    </div>
  );
};
