import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook to access URL params
import './RegistrationForm.scss';

const RegistrationForm = () => {
  const { eventId } = useParams(); // Access eventId from URL params
  const [formData, setFormData] = useState({
    name: '',
    collegeName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the form data here, such as sending it to a server or logging it
    console.log(formData);
  };

  return (
    <div>
      <h2>Registration Form for Event ID: {eventId}</h2> {/* Display the event ID */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="collegeName">Clg Name:</label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
