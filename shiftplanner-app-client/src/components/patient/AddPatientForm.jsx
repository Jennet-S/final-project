import React, { useState } from 'react';

const AddPatientForm = ({ onAddPatient }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    room: '',
    nhi: '',
    age: '',
    diagnosis: '',
    history: '',    
    resus: 'Not set', // Set a default value for resus as a string
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPatient(formData);

    setFormData({
      firstName: '',
      lastName: '',
      room: '',
      nhi: '',
      age: '',
      diagnosis: '',
      history: '',
      resus: 'Goal A', // Reset resus to the default value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder='First name'
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          placeholder='Last name'
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          placeholder='Room'
          type="text"
          name="room"
          value={formData.room}
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          placeholder='NHI'
          type="text"
          name="nhi"
          value={formData.nhi}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input
          placeholder='Age'
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          placeholder='Diagnosis'
          type="text"
          name="diagnosis"
          value={formData.diagnosis}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          placeholder='History'
          type='text'
          name="history"
          value={formData.history}
          onChange={handleChange}
        />
      </label>
      <label>
        <select
          name="resus"
          value={formData.resus}
          onChange={handleChange}>
          <option value="Not set">Select status</option>
          <option value="Goal A">Goal A</option>
          <option value="Goal B">Goal B</option>
          <option value="Goal C">Goal C</option>
        </select>
      </label>

      <button type="submit">Add</button>
    </form>
  );
};

export default AddPatientForm;
