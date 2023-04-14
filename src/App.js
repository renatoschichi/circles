import React, { useState, useRef } from 'react';
import Circle from './components/circle';
import './App.css';

const App = () => {
  const [circles, setCircles] = useState([]);
  const [history, setHistory] = useState([]);
  const ref = useRef();

  const handleClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const newCircle = { x: offsetX, y: offsetY };
    setCircles((prevCircles) => [...prevCircles, newCircle]);
    setHistory((prevHistory) => [...prevHistory, [...circles]]);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const previousCircles = history[history.length - 1];
      setCircles(previousCircles);
      setHistory((prevHistory) => prevHistory.slice(0, prevHistory.length - 1));
    }
  };  

  const handleRedo = () => {
    if (history.length > 0 && history.length > circles.length) {
      const nextCircles = history[circles.length];
      setCircles(nextCircles);
      setHistory((prevHistory) => [...prevHistory, nextCircles]);
    }
  };

  return (
    <div className="App" onClick={handleClick} ref={ref}>
      {circles.map((position, index) => (
        <Circle key={index} position={position} />
      ))}
      <div className="buttons">
        <button onClick={handleUndo} disabled={history.length === 0}>
          Desfazer
        </button>
        <button onClick={handleRedo} disabled={history.length === circles.length}>
          Refazer
        </button>
      </div>
    </div>
  );
};

export default App;