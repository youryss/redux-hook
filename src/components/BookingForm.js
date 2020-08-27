import React from 'react';
import { useStore } from '../store/Store';
import { addBooking } from '../store/bookTableReducer';

const BookingForm = () => {
  const [, dispatch] = useStore();
  const bookingFactory = ({
    name,
    numberOfPeople,
    dateTime,
    numberOfContact,
  }) => ({
    id: new Date().getUTCMilliseconds(),
    name,
    numberOfPeople,
    dateTime,
    numberOfContact,
  });

  const [form, setForm] = React.useState({
    name: '',
    numberOfPeople: '',
    dateTime: '',
    numberOfContact: '',
  });

  const handleInputOnChange = ({ currentTarget: { name, value } }) =>
    setForm((state) => ({ ...state, [name]: value }));

  const handleOnBookATable = () => {
    dispatch(addBooking(bookingFactory(form)));
  };

  const formStyle = {
    formControl: {
      margin: '16pt',
    },
    input: {
      margin: '0 16pt',
    },
  };

  return (
    <div>
      <h2>Form</h2>
      <div style={formStyle.formControl}>
        <label htmlFor="name">Full name</label>
        <input
          style={formStyle.input}
          type="text"
          id="name"
          name="name"
          onChange={handleInputOnChange}
          value={form.name}
        />
      </div>
      <div style={formStyle.formControl}>
        <label htmlFor="numberOfContact">Telephone of contact</label>
        <input
          style={formStyle.input}
          type="text"
          id="numberOfContact"
          name="numberOfContact"
          onChange={handleInputOnChange}
          value={form.numberOfContact}
        />
      </div>
      <div style={formStyle.formControl}>
        <label htmlFor="numberOfPeople">Number of Guests</label>
        <input
          style={formStyle.input}
          type="text"
          id="numberOfPeople"
          name="numberOfPeople"
          onChange={handleInputOnChange}
          value={form.numberOfPeople}
        />
      </div>
      <div style={formStyle.formControl}>
        <label htmlFor="numberOfPeople">Date and Time</label>
        <input
          style={formStyle.input}
          type="datetime-local"
          id="dateTime"
          name="dateTime"
          onChange={handleInputOnChange}
          value={form.dateTime}
        />
      </div>

      <button type="button" onClick={handleOnBookATable}>
        Book a table
      </button>
    </div>
  );
};

export default BookingForm;
