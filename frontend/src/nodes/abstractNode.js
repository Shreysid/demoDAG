import React from 'react';
import { Handle } from 'reactflow';
import '../index.css';


const HandleFields = ({ handles }) => {
  return (
    <>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
    </>
  );
};

const LabelFields = ({ labels, handleInputChange }) => {
  return (
    <>
      {labels.map((label, index) => (
        <div key={index} className='p-1'>
          {label.type === 'input' ? (
            <label>
              {label.text}
              <input className="custom-border"
                type="text"
                value={label.value}
                onChange={(e) => handleInputChange(e, index)}
              />
            </label>
          ) : label.type === 'select' ? (
            <label>
              {label.text}
              <select
                value={label.value}
                onChange={(e) => handleInputChange(e, index)}>
                {label.options.map((option, idx) => (
                  <option key={idx} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </label>
          ) : label.type === 'checkbox' ? (
            <label>
              {label.text}
              <input
                type="checkbox"
                checked={label.value}
                onChange={(e) => handleInputChange(e, index)}
              />
            </label>
          ) : (
            <span>{label.text}</span>
          )}
        </div>
      ))}
    </>
  );
};

const AbstractNode = ({ labels = [], children, handles = [], handleInputChange, headTitle }) => {
  return (
    
    <div className='custom-header'>
      <div className='blue-header'>
        <span className='text-color'>{headTitle}</span>
      </div>
      <div className='p-4'>
      <HandleFields handles={handles} />
      <LabelFields labels={labels} handleInputChange={handleInputChange} />
      <div>{children}</div>
      </div>
    </div>
  );
};

export default AbstractNode;
