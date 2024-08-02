import React, { useState } from 'react';
import './DisplayName.css';


function DisplayName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      alert('Please fill in both the First Name and Last Name fields.');
      return;
    }

    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="displayNameContainer">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
}

export default DisplayName;

