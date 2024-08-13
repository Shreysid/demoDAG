import React from 'react';
import './Modal.css';

export const Modal = ({ isOpen, onClose, result }) => {
  if (!isOpen) return null;

  const { num_nodes, num_edges, is_dag } = result;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Pipeline Submission Result</h2>
        <p>Number of Nodes: {num_nodes}</p>
        <p>Number of Edges: {num_edges}</p>
        <p>Is DAG: {is_dag ? 'Yes' : 'No'}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
