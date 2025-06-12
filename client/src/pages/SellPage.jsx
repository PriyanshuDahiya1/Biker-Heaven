import React, { useState } from 'react';
import axios from 'axios';

function SellPage() {
  const [form, setForm] = useState({
    sellerName: '',
    contactInfo: '',
    model: '',
    year: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/sell', form);
      alert('Listing submitted!');
      setForm({ sellerName: '', contactInfo: '', model: '', year: '', price: '', description: '' });
    } catch (error) {
      alert('Error submitting listing.');
    }
  };

  return (
    <div className="sell" style={{ padding: '2rem', maxWidth: 600, margin: 'auto' }}>
      <form onSubmit={handleSubmit}>
        <input name="sellerName" placeholder="Your Name" value={form.sellerName} onChange={handleChange} required /><br />
        <input name="contactInfo" placeholder="Email or Phone" value={form.contactInfo} onChange={handleChange} required /><br />
        <input name="model" placeholder="Motorcycle Model" value={form.model} onChange={handleChange} required /><br />
        <input name="year" type="number" placeholder="Year" value={form.year} onChange={handleChange} required /><br />
        <input name="price" type="number" placeholder="Asking Price" value={form.price} onChange={handleChange} required /><br />
        <textarea name="description" placeholder="Additional Info" value={form.description} onChange={handleChange} /><br />
        <button type="submit">Submit Listing</button>
      </form>
    </div>
  );
}

export default SellPage;

