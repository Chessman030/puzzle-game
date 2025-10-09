import React from 'react';

function PuzzleSelection({ onPuzzleSelect, onBackToWelcome }) {
  return (
    <div className="puzzle-selection-screen">
      <div className="puzzle-selection-content">
        <h1 className="selection-title">Choose Your Puzzle</h1>
        
        <div className="cloud-container">
          <div className="cloud-row">
            <button 
              className="cloud-button cloud-1"
              onClick={() => onPuzzleSelect(1)}
            >
              <span className="cloud-text">Puzzle 1</span>
            </button>
            
            <button 
              className="cloud-button cloud-2"
              onClick={() => onPuzzleSelect(2)}
            >
              <span className="cloud-text">Puzzle 2</span>
            </button>
          </div>
          
          <div className="cloud-row">
            <button 
              className="cloud-button cloud-3"
              onClick={() => onPuzzleSelect(3)}
            >
              <span className="cloud-text">Puzzle 3</span>
            </button>
            
            <button 
              className="cloud-button cloud-4"
              onClick={() => onPuzzleSelect(4)}
            >
              <span className="cloud-text">Puzzle 4</span>
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