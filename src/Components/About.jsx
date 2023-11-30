import React from 'react';
import { useParams } from 'react-router-dom';

function About() {
  const { name, email } = useParams();

  return (
    <div style={{ marginTop: 30 }}>
      <h1>About</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default About;
