import React, { useState, useEffect } from 'react';
import { fetchDoctors } from '../api/api'; 
import './index.css';

const ConsultationBooking = () => {

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: '',
    city: '',
    company: '',
    chiefComplaints: '',
    previousExperience: '',
  });

  // State for available doctors
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctorsData = async () => {
      const cityToUse = formData.city || 'defaultCity'; 
      const doctorsData = await fetchDoctors(cityToUse);
      setDoctors(doctorsData);
    };
  
    fetchDoctorsData();
  }, [formData.city]);
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with form data (e.g., API calls)
    console.log('Form submitted:', formData);
  };

  return (
    <div className='div'>
      <form onSubmit={handleSubmit} className='form-data'>
      <label className='user-label'>Name: <input className='input' autocomplete="off" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} /></label>
  
        <label className='user-label'>Phone Number: <input className='input' autocomplete="off" type="text" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} /></label>

        
        <label className='user-label'>Age: <input className='input' autocomplete="off" type="text" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} /></label>
        <label className='lauser-labelbel'>City: <input autocomplete="off" className='input' type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} /></label>
        <label className='user-label'>Company: <input autocomplete="off" className='input' type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} /></label>

        
        <label className='user-label'>Chief Complaints: <input autocomplete="off" className='input' type="text" value={formData.chiefComplaints} onChange={(e) => setFormData({ ...formData, chiefComplaints: e.target.value })} /></label>

        
        {formData.age < 40 && (
          <label className='user-label'>Any previous experience with physiotherapy: <input autocomplete="off" className='input' type="text" value={formData.previousExperience} onChange={(e) => setFormData({ ...formData, previousExperience: e.target.value })} /></label>
        )}

        
        <div className='div'>
          <h2 className='h2'>Available Doctors</h2>
          <ul className='doctor'>
            {doctors.map((doctor, index) => (
              <li className='card ' key={index}>
                <p>{doctor.name}</p>
                <p>{doctor.expertise}</p>
                <p>{doctor.city}</p></li>
            ))}
          </ul>
        </div>
        <button className='btn' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ConsultationBooking;
