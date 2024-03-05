import "./registerEvent.css";
import React, { useState } from "react";
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const RegisterEvent= () => {
  const { eventId } = useParams(); // Access eventId from URL params
  


  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [teammates, setTeammates] = useState([]);
  const [teammateValues, setTeammateValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const handleTeammateInputChange = (event, index) => {
    event.preventDefault();
    const { name, value } = event.target;
    const updatedTeammates = [...teammates];
    updatedTeammates[index] = {
      ...updatedTeammates[index],
      [name]: value
    };
    setTeammates(updatedTeammates);
  };

  const handleAddTeammate = () => {
    setTeammates([...teammates, teammateValues]);
    setTeammateValues({
      firstName: "",
      lastName: "",
      email: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      // Validate main user details
      setTeammates([...teammates, values]);
      setValues({
        firstName: "",
        lastName: "",
        email: ""
      });
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>Registration Form for Event ID: {eventId}</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3>
              Welcome {values.firstName} {values.lastName}
            </h3>
            <div>Your registration was successful!</div>
          </div>
        )}
        {!valid && (
          <>
            <input
              className="form-field"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
            {submitted && !values.firstName && (
              <span id="first-name-error">Please enter a first name</span>
            )}
          </>
        )}
        {!valid && (
          <>
            <input
              className="form-field"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange}
            />
            {submitted && !values.lastName && (
              <span id="last-name-error">Please enter a last name</span>
            )}
          </>
        )}
        {!valid && (
          <>
            <input
              className="form-field"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
            {submitted && !values.email && (
              <span id="email-error">Please enter an email address</span>
            )}
          </>
        )}
        {!valid && (
          <div className="teammate-container">
            <button
              className="add-teammate-button"
              onClick={handleAddTeammate}
            >
              Add Teammates
            </button>
            {teammates.map((teammate, index) => (
              <div key={index}>
                <input
                  className="teammate-input"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={teammate.firstName}
                  onChange={(e) => handleTeammateInputChange(e, index)}
                />
                <input
                  className="teammate-input"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={teammate.lastName}
                  onChange={(e) => handleTeammateInputChange(e, index)}
                />
                <input
                  className="teammate-input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={teammate.email}
                  onChange={(e) => handleTeammateInputChange(e, index)}
                />
              </div>
            ))}
          </div>
        )}
        {!valid && (
          <button className="form-field" type="submit">
            Register
          </button>
        )}
      </form>
    </div>
  );
}
export default RegisterEvent;
