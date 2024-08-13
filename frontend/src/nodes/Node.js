import React, { useState } from 'react';
import { Position } from 'reactflow';
import AbstractNode from './abstractNode';


export const Node = ({ id }) => {
  const labels = [
    { text: `${id}` },
  ];

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-video-input`,
      style: { top: `${100 / 3}%` },
    },
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-video-settings`,
      style: { top: `${200 / 3}%` },
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-video-output`,
    },
  ];

  return (
    <AbstractNode
      id={id}
      labels={labels}
      handles={handles}
      headTitle= "Node"
      handleInputChange={() => {}}
       className="node-button video-node"
    >
      {/* Additional children if needed */}
    </AbstractNode>
  );
};


