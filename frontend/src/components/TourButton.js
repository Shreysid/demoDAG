import React from 'react';

const TourButton = ({ onStartTour }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={onStartTour} className="tour-button">
        Start Tour Again
      </button>
    </div>
  );
};

export default TourButton;
