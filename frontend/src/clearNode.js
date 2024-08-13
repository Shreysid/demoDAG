import React from 'react';
import { useStore } from './store';

export const ClearNodesButton = () => {
  const clearNodesAndEdges = useStore.getState().clearNodesAndEdges;

  const handleClearNodes = () => {
    clearNodesAndEdges();
    console.log('All nodes and edges have been cleared.');
  };

  return (
    <button className="tour-button " onClick={handleClearNodes} style={{ marginRight: '10px' }}>
      Clear Nodes
    </button>
  );
};
