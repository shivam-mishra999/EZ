import React, { useState } from 'react';
import './Email.css';

export default function Email() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validEmail.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputValue) {
      setErrorMessage('Email address cannot be empty.');
      setInputValue('Email address cannot be empty.');
      return;
    }

    if (!validateEmail(inputValue)) {
      setErrorMessage('Please enter a valid email address.');
      setInputValue('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('http://34.225.132.160:8002/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: inputValue }),
      });

      const responseData = await response.json();

      if (response.status === 422) {
        const errorMessage = responseData.detail || 'Emails ending with @ez.works are not allowed.';
        setErrorMessage(errorMessage);
        setInputValue(errorMessage);
      } else if (response.status === 200) {
        const successMessage = responseData.detail || 'Form Submitted';
        setErrorMessage('');
        setInputValue(successMessage);
      } else {
        const errorMessage = responseData.detail || 'An error occurred. Please try again.';
        setErrorMessage(errorMessage);
        setInputValue(errorMessage);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      setInputValue('An error occurred. Please try again.');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage('');
  };

  return (
    <div className="email-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email Address"
          value={inputValue}
          onChange={handleChange}
          className={errorMessage ? 'error' : ''}
        />
        <button type="submit">Contact Me</button>
      </form>
    </div>
  );
}
