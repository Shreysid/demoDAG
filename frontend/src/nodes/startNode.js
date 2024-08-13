import React, { useState } from 'react';
import { Position } from 'reactflow';
import AbstractNode from './abstractNode';


export const startNode = ({ id, data }) => {
  const labels = [
    { text: 'Starting Node' },
  ];

  const handles = [
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <AbstractNode
      id={id}
      labels={labels}
      handles={handles}
      handleInputChange={() => {}}
      headTitle='Start Node'
      className="ai-node"
    />
  );
};

export default startNode;
