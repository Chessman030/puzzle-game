import React, { useState, useEffect } from 'react';

// Quiz data - 4 stages with questions and options (option 2 is always correct)
const quizData = [
  {
    question: "What is the fastest land animal?",
    options: ["Elephant", "Cheetah", "Lion", "Horse"]
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"]
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Pacific", "Indian", "Arctic"]
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Iron"]
  }
];

const rewards = [
  { type: "extra-life", message: "🎁 Extra Life Earned!", icon: "❤️" },
  { type: "nothing", message: "� Great Job! Keep Playing!", icon: "✨" }
];

function PuzzleScreen({ puzzleNumber, onBackToSelection, onPuzzleComplete }) {
  const [currentStage, setCurrentStage] = useState(0); // 0-3 for stages 1-4
  const [showReward, setShowReward] = useState(false);
  const [puzzleCompleted, setPuzzleCompleted] = useState(false);
  const [earnedReward, setEarnedReward] = useState(null);

  const handleOptionClick = (optionIndex) => {
    // Option 2 (index 1) is always correct
    if (optionIndex === 1) {
      if (currentStage < 3) {
        // Move to next stage immediately
        setCurrentStage(currentStage + 1);
      } else {
        // Complete puzzle and show reward
        const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
        setEarnedReward(randomReward);
        setShowReward(true);
        
        // After 3 seconds, complete puzzle and return to selection
        setTimeout(() => {
          setShowReward(false);
          setPuzzleCompleted(true);
          // Notify parent component about completion
          if (onPuzzleComplete) {
            onPuzzleComplete(puzzleNumber, randomReward.type === "extra-life");
          }
          // After showing completion, return to selection
          setTimeout(() => {
            onBackToSelection();
          }, 2000);
        }, 3000);
      }
    } else {
      // Wrong answer - could add feedback here later
      alert("Try again! Look for the right answer.");
    }
  };

  const resetPuzzle = () => {
    setCurrentStage(0);
    setShowReward(false);
    setPuzzleCompleted(false);
    setEarnedReward(null);
  };

  if (puzzleCompleted) {
    return (
      <div className="puzzle-screen">
        <div className="puzzle-content">
          <div className="completion-screen">
            <h1 className="completion-title">🎉 Puzzle {puzzleNumber} Completed!</h1>
            <p className="completion-message">All 4 stages cleared!</p>
            <div className="reward-display">
              <div className="reward-icon">{earnedReward?.icon}</div>
              <p className="reward-message">{earnedReward?.message}</p>
            </div>
            <p className="returning-message">Returning to puzzle selection...</p>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData[currentStage];

  return (
    <div className="puzzle-screen">
      <div className="puzzle-content">
        <h1 className="puzzle-title">Puzzle {puzzleNumber} - Stage {currentStage + 1}/4</h1>
        
        <div className="quiz-area">
          <div className="question-section">
            <h2 className="question">{currentQuestion.question}</h2>
          </div>
          
          <div className="options-container">
            <div className="options-left">
              <button 
                className="option-button"
                onClick={() => handleOptionClick(0)}
              >
                <span className="option-circle">A</span>
                <span className="option-text">{currentQuestion.options[0]}</span>
              </button>
              <button 
                className="option-button"
                onClick={() => handleOptionClick(2)}
              >
                <span className="option-circle">C</span>
                <span className="option-text">{currentQuestion.options[2]}</span>
              </button>
            </div>
            
            <div className="options-right">
              <button 
                className="option-button"
                onClick={() => handleOptionClick(1)}
              >
                <span className="option-circle">B</span>
                <span className="option-text">{currentQuestion.options[1]}</span>
              </button>
              <button 
                className="option-button"
                onClick={() => handleOptionClick(3)}
              >
                <span className="option-circle">D</span>
                <span className="option-text">{currentQuestion.options[3]}</span>
              </button>
            </div>
          </div>
        </div>
        
        {showReward && (
          <div className="power-up-overlay">
            <div className="power-up-display">
              <div className="reward-icon-large">{earnedReward?.icon}</div>
              <h2 className="power-up-text">{earnedReward?.message}</h2>
              <div className="power-up-animation">✨</div>
            </div>
          </div>
        )}
        
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