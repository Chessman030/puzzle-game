import React from 'react';

function PuzzleSelection({ onPuzzleSelect, onBackToWelcome, globalTimer, extraLives }) {
  return (
    <div className="puzzle-selection-screen">
      <div className="puzzle-selection-content">
        <h1 className="selection-title">Choose Your Puzzle</h1>
        
        {extraLives > 0 && (
          <div className="extra-lives-display">
            <span className="lives-icon">❤️</span>
            <span className="lives-text">Extra Lives: {extraLives}</span>
          </div>
        )}
        
        {globalTimer > 0 && (
          <div className="global-timer-display">
            <span className="timer-icon">⏰</span>
            <span className="timer-text">All puzzles locked for {globalTimer}s</span>
          </div>
        )}
        
        <div className="cloud-container">
          <div className="cloud-row">
            <button 
              className={`cloud-button cloud-1 ${globalTimer > 0 ? 'disabled' : ''}`}
              onClick={() => onPuzzleSelect(1)}
              disabled={globalTimer > 0}
            >
              <span className="cloud-text">Anime</span>
            </button>
            
            <button 
              className={`cloud-button cloud-2 ${globalTimer > 0 ? 'disabled' : ''}`}
              onClick={() => onPuzzleSelect(2)}
              disabled={globalTimer > 0}
            >
              <span className="cloud-text">Marvel & DC</span>
            </button>
          </div>
          
          <div className="cloud-row">
            <button 
              className={`cloud-button cloud-3 ${globalTimer > 0 ? 'disabled' : ''}`}
              onClick={() => onPuzzleSelect(3)}
              disabled={globalTimer > 0}
            >
              <span className="cloud-text">Science & Maths</span>
            </button>
            
            <button 
              className={`cloud-button cloud-4 ${globalTimer > 0 ? 'disabled' : ''}`}
              onClick={() => onPuzzleSelect(4)}
              disabled={globalTimer > 0}
            >
              <span className="cloud-text">Valorant</span>
            </button>
          </div>
        </div>
        
        <button 
          className="back-button"
          onClick={onBackToWelcome}
        >
          Back to Welcome
        </button>
      </div>
    </div>
  );
}

export default PuzzleSelection;