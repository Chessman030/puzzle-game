import React from 'react';
import BloodDrop from './BloodDrop';
import GhostCard from './GhostCard';

function PuzzleSelection({ onPuzzleSelect, onBackToWelcome, globalTimer, extraLives }) {
  return (
    <div className="puzzle-selection-screen">
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/tRhEp0T2_HA?autoplay=1&mute=1&loop=1&playlist=tRhEp0T2_HA&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=0&quality=small&vq=small"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="puzzle-selection-content content-overlay">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <h1 className="selection-title">Choose Your Puzzle</h1>
          <BloodDrop 
            className="blood-drop-1" 
            style={{ left: '15%', top: '80%' }}
          />
          <BloodDrop 
            className="blood-drop-2" 
            style={{ left: '70%', top: '75%' }}
          />
        </div>
        
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
        
        <div className="ghost-card-grid">
          <GhostCard
            puzzleName="Anime"
            onSelect={() => onPuzzleSelect(1)}
            index={0}
            isDisabled={globalTimer > 0}
          />
          <GhostCard
            puzzleName="Marvel & DC"
            onSelect={() => onPuzzleSelect(2)}
            index={1}
            isDisabled={globalTimer > 0}
          />
          <GhostCard
            puzzleName="Science & Maths"
            onSelect={() => onPuzzleSelect(3)}
            index={2}
            isDisabled={globalTimer > 0}
          />
          <GhostCard
            puzzleName="Valorant"
            onSelect={() => onPuzzleSelect(4)}
            index={3}
            isDisabled={globalTimer > 0}
          />
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