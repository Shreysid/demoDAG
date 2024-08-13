import React, { useState } from 'react';
import { Position } from 'reactflow';
import AbstractNode from './abstractNode';


export const endNode = ({ id, data }) => {
  

  const labels = [
    { text: 'Ending Node' },
   
    
  ];

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-value`,
    },
  ];

  return (
    <AbstractNode
      id={id}
      labels={labels}
      handles={handles}
      handleInputChange={() => {}}
      headTitle='End Node'
      className="ml-node"
    />
  );
};

