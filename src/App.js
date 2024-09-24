import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Statistical MeCATnic</h1>
        <p>Biology through the lens of statistical mechanics</p>
        <div className="links-container">
          <a className="link-card" href="https://beansauce123.github.io/IonChannel/" target="_blank" rel="noopener noreferrer">
            Simulating Voltage-Gated Ion Channels as a Random Walk
          </a>
          <a className="link-card" href="https://beansauce123.github.io/Ratchet/" target="_blank" rel="noopener noreferrer">
            Modeling Molecular Motors as a Brownian Ratchet
          </a>
          <a className="link-card" href="https://beansauce123.github.io/WLC/" target="_blank" rel="noopener noreferrer">
            Simulating DNA through the Worm-Like Chain Model
          </a>
          <a className="link-card" href="https://beansauce123.github.io/quantumfold/" target="_blank" rel="noopener noreferrer">
            Predicting protein folding using quantum computing
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

