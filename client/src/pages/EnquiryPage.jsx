
import React, { useState } from 'react';
import axios from 'axios';

const EnquiryPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    bikeModel: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/sell-bike', formData);
      alert('Bike listing submitted!');
      setFormData({
        name: '',
        mobile: '',
        bikeModel: '',
        date: '',
      });
    } catch (error) {
      alert('Submission failed.');
      console.error(error);
    }
  };

  return (
    <div className="container mt-7">
     
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          
          <input type="text" name="name" placeholder=" Your Name" className="form-control" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
         
          <input type="text" name="mobile" placeholder="Mobile Number" className="form-control" value={formData.mobile} onChange={handleChange} required />
        </div>
        <div className="mb-3">
        
          <input type="text" name="bikeModel" placeholder='Motorcycle Model' className="form-control" value={formData.bikeModel} onChange={handleChange} required />
        </div>
        <div className="mb-3">
         
          <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default EnquiryPage;