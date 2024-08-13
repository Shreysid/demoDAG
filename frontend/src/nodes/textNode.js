// textNode.js
import React, { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { extractVariables } from '../utils/extractVar';
import '../index.css';

const FIXED_WIDTH = 400;
const BORDER_MIN_HEIGHT = 100;
const MIN_HEIGHT = 30;
const PADDING_TOP = 70;
const PADDING_BOTTOM = 5;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const extractedVariables = extractVariables(currText);
    setVariables(extractedVariables);
    adjustNodeSize();
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  //function to resize the component
  const adjustNodeSize = () => {
    if (containerRef.current && textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'; 

      const scrollHeight = textAreaRef.current.scrollHeight;
      const newHeight = Math.max(scrollHeight + PADDING_TOP + PADDING_BOTTOM + 20, MIN_HEIGHT); // padding to keep text inside the border

      containerRef.current.style.height = `${newHeight}px`;
      textAreaRef.current.style.height = `${newHeight - (PADDING_TOP + PADDING_BOTTOM )}px`; // Adjust text area height to match container with padding
    }
  };

  return (
    <div
      className="text-node"
      ref={containerRef}
      style={{
        transition: 'height 0.3s ease-in-out', // transition animation to resize the component
        border: '1px solid black',
        width: `${FIXED_WIDTH}px`,
        minHeight: `${BORDER_MIN_HEIGHT}px`,
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="source"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: `${(index + 1) * 20}px` }} // spacing between handles of 20px
        />
      ))}
      <div>
        <span>Text</span>
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>
          Text:
          <textarea
            ref={textAreaRef}
            value={currText}
            onChange={handleTextChange}
            style={{
              width: '100%',
              resize: 'none',
              overflow: 'hidden',
              wordWrap: 'break-word', // to prevent text from overflowing
              boxSizing: 'border-box',
              paddingBottom: '5px',
              minHeight: `${MIN_HEIGHT}px`,
              height: 'auto',
              transition: 'height 0.3s ease-in-out'
            }}
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
};

export default TextNode;
