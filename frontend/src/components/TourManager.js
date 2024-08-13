// components/TourManager.js
import React, { useState, useEffect } from 'react';
import TourModal from './TourModal';
import TourButton from './TourButton';

const TourManager = () => {
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    const isTourCompleted = localStorage.getItem('tourCompleted');
    if (!isTourCompleted) {
      setShowTour(true);
    }
  }, []);

  const handleTourComplete = () => {
    setShowTour(false);
    localStorage.setItem('tourCompleted', 'true');
  };

  const handleStartTourAgain = () => {
    setShowTour(true);
  };

  const tourSteps = [
    {
        title: 'Welcome to the DAG (Directed acyclic graph) Demo',
        content: 'A directed acyclic graph is a directed graph with no directed cycles. That is, it consists of vertices and edges, with each edge directed from one vertex to another, such that following those directions will never form a closed loop.',
      },
      {
        title: 'Canvas',
        content: 'Here is where you can add, connect, and arrange your nodes.',
      },
      {
        title: 'Node, Start and End',
        content: 'Use these nodes to connect to one other or to each other',
      },
      {
          title: 'Submit',
          content: 'Use the Submit button to get the details of number of nodes, edges and whether a DAG has been formed.',
        },
        {
          title: 'Clear',
          content: 'Use the Clear Button to start over.',
        },
  ];

  return (
    <>
      {showTour && <TourModal steps={tourSteps} onComplete={handleTourComplete} />}
      {!showTour && <TourButton onStartTour={handleStartTourAgain} />}
    </>
  );
};

export default TourManager;
