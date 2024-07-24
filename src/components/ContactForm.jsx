import React from "react";
import "./contactForm.css";
import { useState } from "react";


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSuccess(true);
        setSubmitting(false);
      })
      .catch((error) => {
        setError(error.message);
        setSubmitting(false);
      });
  };

  return (
    <div id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
        <br />
        <button type="submit" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send'}
        </button>
        {success && <p>Thank you for contacting us!</p>}
        {error && <p>Error: {error}</p>}
      </form>
    </div>
  );
};

export default ContactForm;