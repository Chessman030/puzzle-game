import React from 'react';

function WelcomeScreen({ onGetIntoPuzzle }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to Puzzle Game</h1>
        <button 
          className="get-into-puzzle-btn"
          onClick={onGetIntoPuzzle}
        >
          Get Into The Puzzle
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;