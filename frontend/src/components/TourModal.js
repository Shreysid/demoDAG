// components/TourModal.js
import React, { useState } from 'react';
import './TourModal.css';

const TourModal = ({ steps, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="tour-modal-overlay">
      <div className="tour-modal-content">
        <h2>{steps[currentStep].title}</h2>
        <p>{steps[currentStep].content}</p>
        <div className="tour-modal-buttons">
          <button onClick={handleSkip}>Skip</button>
          <div className="navigation-buttons">
            <button onClick={handlePrevious} disabled={currentStep === 0}>
              Previous
            </button>
            <button onClick={handleNext}>
              {currentStep < steps.length - 1 ? 'Next' : 'Finish'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourModal;
