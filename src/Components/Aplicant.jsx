import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Applicant() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendButtonClick = () => {
    navigate(`/about/${name}/${email}`);
  };

  return (
    <div style={{ marginTop: 30 }}>
      <h1>Applicant Information</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <button onClick={handleSendButtonClick}>Send</button>
    </div>
  );
}

export default Applicant;
