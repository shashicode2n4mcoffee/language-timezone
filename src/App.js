import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const items = ['en-US', 'en-GB', 'pt-BR'];

const App = () => {
  const [optionState, setOptionState] = useState(items[0]);

  const date = new Date().toLocaleTimeString(optionState);

  const handleOptionState = (e) => {
    console.log(e.target.value);
    setOptionState(e.target.value);
  };
  return (
    <div className='App'>
      <h1>Language Time zone Assingment </h1>
      <h3>Please select the Language</h3>
      <select value={optionState} onChange={handleOptionState}>
        {items.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>

      <div className='result'>
        <span className='normal'>Current Time in </span>{' '}
        <span className='bold'> {optionState}</span>
        <span className='normal'> language timezone is : </span>{' '}
        <span className='bold'>{date} </span>
      </div>
    </div>
  );
};

export default App;
