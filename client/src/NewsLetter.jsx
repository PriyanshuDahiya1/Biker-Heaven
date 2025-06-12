import React, { useState } from 'react';
import axios from 'axios';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/newsletter', { email });
      alert('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      alert('Subscription failed.');
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
  
      <form onSubmit={handleSubmit} >
        <div className="mb-1">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterForm;