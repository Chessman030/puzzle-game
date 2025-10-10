import React, { useState } from 'react';

const GhostCard = ({ puzzleName, onSelect, index, isDisabled = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (e) => {
    if (isDisabled) return;
    
    // Toggle flipped state directly on click, not on hover
    setIsFlipped(!isFlipped);
    
    // If flipping to back side, navigate to puzzle after animation completes
    if (!isFlipped) {
      // Navigate after flip animation completes
      setTimeout(() => {
        if (!isDisabled) {
          onSelect();
        }
      }, 800);
    }
  };

  // Enter button removed, no longer needed

  // Removed unused function

  return (
    <div className={`ghost-card-container ${isDisabled ? 'disabled' : ''}`} onClick={handleCardClick}>
      <div className={`ghost-card ${isFlipped ? 'flipped' : ''}`}>
        {/* Front face - 3D skeleton */}
        <div className="ghost-card-front">
          <div className="skeleton-3d">
            <div className="skeleton-skull">
              <div className="skull-gradient"></div>
              <div className="eye-socket left-eye"></div>
              <div className="eye-socket right-eye"></div>
              <div className="nasal-cavity"></div>
              <div className="jaw-bone"></div>
            </div>
            <div className="skeleton-glow"></div>
            <div className="floating-spirits">
              <span className="spirit-1"></span>
              <span className="spirit-2"></span>
              <span className="spirit-3"></span>
            </div>
          </div>
          <div className="card-border-3d"></div>
        </div>
        
        {/* Back face - domain reveal */}
        <div className="ghost-card-back">
          <div className="domain-content">
            <h3 className="domain-name">{puzzleName}</h3>
          </div>
          <div className="card-border-3d"></div>
        </div>
      </div>
    </div>
  );
};

export default GhostCard;