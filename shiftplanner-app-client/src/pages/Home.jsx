import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import PatientCard from "../components/patient/PatientCard";
import AddPatientForm from "../components/patient/AddPatientForm";

function Home() {
    const location = useLocation();

    const userName = location.state && location.state.id ? location.state.id : "Guest";
    
    //states
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingPatientId, setEditingPatientId] = useState(null);

    //use effects
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/patients');
            const data = await response.json();
            setPatients(data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching patient data:', error);
          }
        };
    
        fetchData();
      }, []);
    
      useEffect(() => {
        const fetchScheduleData = async () => {
          try {
            const scheduleResponse = await fetch('http://localhost:3000/api/schedules');
            const scheduleData = await scheduleResponse.json();
            setScheduleItems(scheduleData);
          } catch (error) {
            console.error('Error fetching schedule data:', error);
          }
        };
    
        fetchScheduleData();
      }, []);

      //handle add...
      const handleAddPatient = async (newPatientData) => {
        try {
          const response = await fetch('http://localhost:3000/api/patients', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPatientData),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const addedPatient = await response.json();
          setPatients([...patients, addedPatient]);
        } catch (error) {
          console.error('Error adding new patient:', error);
        }
      };
    
      const handleDeletePatient = async (patientId) => {
        try {
          const response = await fetch(`http://localhost:3000/api/patients/${patientId}`, {
            method: 'DELETE',
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          setPatients(patients.filter((patient) => patient._id !== patientId));
          console.log(`Patient with ID ${patientId} deleted successfully.`);
        } catch (error) {
          console.error('Error deleting patient:', error);
        }
      };
    
      const handleUpdatePatient = async (patientId, updatedData) => {
        try {
          const response = await fetch(`http://localhost:3000/api/patients/${patientId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const updatedPatient = await response.json();
          setPatients(patients.map((p) => (p._id === patientId ? updatedPatient : p)));
          setEditingPatientId(null);
        } catch (error) {
          console.error('Error updating patient:', error);
        }
      };
    
      const handleEditPatient = (patientId) => {
        setEditingPatientId(patientId);
      };
    
      const handleCancelEdit = () => {
        setEditingPatientId(null);
      };
    return (
        <>
            <div className="navbar">
                <Navbar />
                <h1>Welcome {userName}</h1>
            </div>
            <AddPatientForm onAddPatient={handleAddPatient} />
            <div className="patient-section">
                <div className='patient-cards'>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        patients.map((patient) => (
                            <div key={patient._id} className='patient-card'>
                                <PatientCard
                                    patient={patient}
                                    onDeletePatient={handleDeletePatient}
                                    onUpdatePatient={handleUpdatePatient}
                                    onEditPatient={handleEditPatient}
                                    onCancelEdit={handleCancelEdit}
                                    isEditing={editingPatientId === patient._id}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div>
                     //schedule
            </div>




        </>





    );
}

export default Home;
