import React from 'react';

function PuzzleSelection({ onPuzzleSelect, onBackToWelcome, puzzleTimers, extraLives }) {
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
        
        <div className="cloud-container">
          <div className="cloud-row">
            <button 
              className={`cloud-button cloud-1 ${puzzleTimers[1] ? 'disabled' : ''}`}
              onClick={() => onPuzzleSelect(1)}
              disabled={puzzleTimers[1] > 0}
            >
              <span className="cloud-text">
                Puzzle 1
                {puzzleTimers[1] && (
                  <div className="timer-display">{puzzleTimers[1]}s</div>
                )}
              </span>
            </button>
            
            <button 
              className={`cloud-button cloud-2 ${puzzleTimers[2] ? 'disabled' : ''}`}
              onClick={() => onPuzzleSelect(2)}
              disabled={puzzleTimers[2] > 0}
            >
              <span className="cloud-text">
                Puzzle 2
                {puzzleTimers[2] && (
                  <div className="timer-display">{puzzleTimers[2]}s</div>
                )}
              </span>
            </button>
          </div>
          
          <div className="cloud-row">
            <button 
              className={`cloud-button cloud-3 ${puzzleTimers[3] ? 'disabled' : ''}`}
              onClick={() => onPuzzleSelect(3)}
              disabled={puzzleTimers[3] > 0}
            >
              <span className="cloud-text">
                Puzzle 3
                {puzzleTimers[3] && (
                  <div className="timer-display">{puzzleTimers[3]}s</div>
                )}
              </span>
            </button>
            
            <button 
              className={`cloud-button cloud-4 ${puzzleTimers[4] ? 'disabled' : ''}`}
              onClick={() => onPuzzleSelect(4)}
              disabled={puzzleTimers[4] > 0}
            >
              <span className="cloud-text">
                Puzzle 4
                {puzzleTimers[4] && (
                  <div className="timer-display">{puzzleTimers[4]}s</div>
                )}
              </span>
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