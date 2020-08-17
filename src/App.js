import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const greeting = 'Hello'
  const name = 'LU XIANZE'

  function greet(greeting, name){
    return greeting + ", " + name + "!"
  }


  return (
    <div className="App">
      <h1>{greeting}, {name}!</h1>
      <h1>{greet(greeting, name)}</h1>
    </div>
  );
}

export default App;
