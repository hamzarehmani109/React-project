import React, { useState } from 'react';

function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dd: '',
    mm: '',
    yyyy: '',
    username: '',
    password: '',
  });

  // Function to handle input changes and update state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to navigate to the next or previous step
  const nextPrev = (step) => {
    setCurrentStep(currentStep + step);
  };

  return (
    <div>
      <h1>Register:</h1>
      {/* Render form elements based on the current step */}
      {currentStep === 1 && (
        <div className="tab">
          Name:
          <p>
            <input
              type="text"
              placeholder="First name..."
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Last name..."
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </p>
        </div>
      )}

      {currentStep === 2 && (
        <div className="tab">
          Contact Info:
          <p>
            <input
              type="email"
              placeholder="E-mail..."
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Phone..."
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </p>
        </div>
      )}

      {/* Continue rendering the form steps similarly */}
      
      <div style={{ overflow: 'auto' }}>
        <div style={{ float: 'right' }}>
          {currentStep > 1 && (
            <button type="button" id="prevBtn" onClick={() => nextPrev(-1)}>
              Previous
            </button>
          )}
          {currentStep < 4 && (
            <button type="button" id="nextBtn" onClick={() => nextPrev(1)}>
              Next
            </button>
          )}
        </div>
      </div>

      {/* Circles to indicate the steps */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <span className={`step ${currentStep >= 1 ? 'active' : ''}`}></span>
        <span className={`step ${currentStep >= 2 ? 'active' : ''}`}></span>
        <span className={`step ${currentStep >= 3 ? 'active' : ''}`}></span>
        <span className={`step ${currentStep >= 4 ? 'active' : ''}`}></span>
      </div>
    </div>
  );
}

export default RegistrationForm;
