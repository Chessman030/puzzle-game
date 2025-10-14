import React, { useState } from 'react';

// Place your video file in the public folder, e.g., /public/ghost.mp4
const GHOST_VIDEO = '/ghost.mp4'; // Or use an external URL

const GhostCard = ({ puzzleName, onSelect, isDisabled = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    if (isDisabled) return;
    setIsFlipped(!isFlipped);
    if (!isFlipped && onSelect) {
      setTimeout(onSelect, 800);
    }
  };

  return (
    <div
    className={`ghost-card-container ${isDisabled ? 'disabled' : ''}`}
    onClick={handleCardClick}
    style={{
      perspective: '1200px',
      width: 360,
      height: 360,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      position: 'relative',
      margin: '0 auto',
      display: 'block',
    }}
    >
      <div className={`ghost-card ${isFlipped ? 'flipped' : ''}`}>
        {/* FRONT: Animated Ghost Video */}
        <div className="ghost-card-front">
          <div className="ghost-video-wrapper">
            <video
              src={GHOST_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              width={360}
              height={360}
              className="ghost-video"
              poster=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '18px',
                display: 'block',
                background: '#060b12'
              }}
            />
          </div>
          <div className="card-border"></div>
        </div>
        {/* BACK: Reveal */}
        <div className="ghost-card-back">
          <div className="domain-content">
            <h3 className="domain-name">{puzzleName}</h3>
          </div>
          <div className="card-border"></div>
        </div>
      </div>
      <style jsx>{`
        .ghost-card-container {
          user-select: none;
        }
        .ghost-card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.22,0.61,0.36,1);
        
        }
        .ghost-card.flipped {
          transform: rotateY(180deg);
        }
        .ghost-card-front, .ghost-card-back {
          position: absolute;
          width: 100%; height: 100%;
          border-radius: 18px;
          box-shadow: 0 0 55px #1f2636 inset, 0 6px 36px #000a22;
          backface-visibility: hidden;
        }
        .ghost-card-back {
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(160deg,#10131a 80%,#3defff1a 100%);
        }
        .ghost-video-wrapper {
          position: relative;
          width: 100%; height: 100%;
          overflow: hidden;
          border-radius: 18px;
          background: #060b12;
        }
        .card-border {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 18px;
          border: 2px solid #3defff44;
          pointer-events: none;
          box-shadow: 0 0 32px #3defff33;
        }
        .domain-content {
          width: 100%; height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .domain-name {
          font-family: 'Creepster', 'Arial Black', cursive;
          color: #c8f6ff;
          font-size: 2rem;
          text-shadow: 0 0 18px #3defff, 0 2px 6px #0a060d;
          margin: 0;
        }
        .ghost-card-container.disabled {
          filter: grayscale(1) brightness(0.5);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default GhostCard;