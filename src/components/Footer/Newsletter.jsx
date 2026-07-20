import React, { useState } from 'react';

import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | success | error

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      setStatus('error');
      return;
    }

    // In a real app this would call an API endpoint / newsletter service.
    setStatus('success');
    setEmail('');
  };

  return (
    <div className="app__newsletter">
      <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
      <p className="p__opensans">
        And get notified everytime we launch a new promo.
      </p>

      <form className="app__newsletter-input flex flex-col sm:flex-row" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email address"
          aria-label="Email address"
        />
        <button type="submit" className="custom__button">Subscribe</button>
      </form>

      {status === 'success' && (
        <p className="p__opensans app__newsletter-message app__newsletter-message--success">
          Thanks for subscribing! Keep an eye on your inbox.
        </p>
      )}
      {status === 'error' && (
        <p className="p__opensans app__newsletter-message app__newsletter-message--error">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
};

export default Newsletter;
