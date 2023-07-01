import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import './style.css';
import { checkout } from '../../Service/api';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const user = {
        firstName,
        lastName,
        email,
        password,
      };
      await checkout(user);
      // Handle successful signup, redirect or show a success message
    } catch (error) {
      console.log('Error during signup:', error);
      // Handle signup error, display an error message
    }
  };

  return (
    <div className="signup-container">
      <form className="form" onSubmit={handleSignUp}>
        <p className="title">Register</p>

        <p className="message">Signup now and get full access to our app.</p>
        <div className="flex">
          <label>
            <span>Firstname</span>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              value={firstName}
              onChange={handleFirstName}
            />
          </label>
          <label>
            <span>Lastname</span>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              value={lastName}
              onChange={handleLastName}
            />
          </label>
        </div>
        <label>
          <span>Email</span>
          <input
            required
            placeholder=""
            type="email"
            className="input"
            value={email}
            onChange={handleEmail}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            required
            placeholder=""
            type="password"
            className="input"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <button type="submit" className="submit">
          Submit
        </button>
        <p className="signin">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;