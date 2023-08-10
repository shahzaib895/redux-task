import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { DecNumber, IncNumber } from './actions';

function App() {
  const myState = useSelector((state) => state.ChangeNumber);
  const dispatch = useDispatch();
  const myRef = useRef(null);

  const handleDecrement = () => {
    const value = parseInt(myRef.current.value, 10); // Extract numeric value from ref
    dispatch(DecNumber(value));
  };

  const handleIncrement = () => {
    const value = parseInt(myRef.current.value, 10); // Extract numeric value from ref
    dispatch(IncNumber(value));
  };

  return (
    <div className="App">
      <h1>Increment/Decrement Number</h1>
      <h3>Using React and Redux Toolkit</h3>
      <div>
        <input
          type="number"
          defaultValue={1}
          ref={myRef} // Use ref to access input value
          placeholder="enter a number you want to inc/dec with"
        />
        <button onClick={handleDecrement}>-</button>
        <input type="text" value={myState} readOnly />
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default App;
