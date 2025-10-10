import React from 'react';
import BloodDrop from './BloodDrop';

function WelcomeScreen({ onGetIntoPuzzle }) {
  return (
    <div className="welcome-screen">
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
      <div className="welcome-content content-overlay">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <h1 className="welcome-title">Welcome to Puzzle Game</h1>
          <BloodDrop 
            className="blood-drop-1" 
            style={{ left: '20%', top: '60%' }}
          />
          <BloodDrop 
            className="blood-drop-2" 
            style={{ left: '40%', top: '70%' }}
          />
          <BloodDrop 
            className="blood-drop-3" 
            style={{ left: '80%', top: '65%' }}
          />
        </div>
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