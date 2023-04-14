import React from 'react';
import './circle.css';

const Circle = ({ position }) => {
  return (
    <div
      className="circle"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Circle;