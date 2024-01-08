import React, { useState } from 'react';

const EditPatientForm = ({ patient, onUpdatePatient }) => {
    const [formData, setFormData] = useState({
        firstName: patient.firstName,
        lastName: patient.lastName,
        room: patient.room,
        nhi: patient.nhi,
        age: patient.age,
        diagnosis: patient.diagnosis,
        history: patient.history,
        resus: patient.resus,
    });

    const handleChange = (e) => {
        setFormData({            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdatePatient(patient._id, formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </label>

            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </label>

            <label>
                Room:
                <input
                    type="text"
                    name="room"
                    value={formData.room}
                    onChange={handleChange}
                />
            </label>

            <label>
                NHI:
                <input
                    type="text"
                    name="nhi"
                    value={formData.nhi}
                    onChange={handleChange}
                />
            </label>

            <label>
                Age:
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
            </label>
            <label>
                Diagnosis:
                <input
                    type="text"
                    name="diagnosis"
                    value={formData.diagnosis}
                    onChange={handleChange}
                />
            </label>

            <label>
                History:
                <input
                    type="text"
                    name="history"
                    value={formData.history}
                    onChange={handleChange}
                />
            </label>
            <label>
                Resus:
                <select
                    name="resus"
                    value={formData.resus}
                    onChange={handleChange}>
                    <option value="Not set">Not set</option>
                    <option value="Goal A">Goal A</option>
                    <option value="Goal B">Goal B</option>
                    <option value="Goal C">Goal C</option>
                </select>
            </label>
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditPatientForm;
