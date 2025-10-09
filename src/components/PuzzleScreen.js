import React from 'react';

function PuzzleScreen({ puzzleNumber, onBackToSelection }) {
  return (
    <div className="puzzle-screen">
      <div className="puzzle-content">
        <h1 className="puzzle-title">Puzzle {puzzleNumber}</h1>
        
        <div className="puzzle-area">
          <div className="puzzle-placeholder">
            <p>This is where Puzzle {puzzleNumber} content will go!</p>
            <p>You can add your puzzle logic, grids, or interactive elements here.</p>
          </div>
        </div>
        
        <div className="puzzle-controls">
          <button 
            className="back-button"
            onClick={onBackToSelection}
          >
            Back to Puzzle Selection
          </button>
        </div>
      </div>
    </div>
  );
}

export default PuzzleScreen;