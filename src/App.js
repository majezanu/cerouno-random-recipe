import React from 'react';
import logo from './logo.svg';
import './App.css';
import RandomRecipe from './components/layouts/RandomReciper/RandomRecipe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RandomRecipe></RandomRecipe>
      </header>
    </div>
  );
}

export default App;
