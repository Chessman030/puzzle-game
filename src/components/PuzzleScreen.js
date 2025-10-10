import React, { useState, useEffect } from 'react';
import { generatePuzzleQuestions, getAvailableTopics, getQuestionByTopic } from '../utils/questionParser';

const rewards = [
  { type: "extra-life", message: "🎁 Extra Life Earned!", icon: "❤️" },
  { type: "nothing", message: "💫 Great Job! Keep Playing!", icon: "✨" }
];

const difficultyColors = {
  easy: "#4CAF50",
  medium: "#FF9800", 
  hard: "#F44336"
};

function PuzzleScreen({ puzzleNumber, onBackToSelection, onPuzzleComplete, onPuzzleFailed }) {
  const [currentStage, setCurrentStage] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [puzzleCompleted, setPuzzleCompleted] = useState(false);
  const [puzzleFailed, setPuzzleFailed] = useState(false);
  const [earnedReward, setEarnedReward] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  
  // Lifeline states
  const [lifelinesUsed, setLifelinesUsed] = useState({ changeQuestion: false, eliminateOptions: false });
  const [showAnimeSelection, setShowAnimeSelection] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState([]);
  const [showEliminationAnimation, setShowEliminationAnimation] = useState(false);

  useEffect(() => {
    const newQuestions = generatePuzzleQuestions(puzzleNumber);
    setQuizQuestions(newQuestions);
  }, [puzzleNumber]);

  const handleOptionClick = (optionIndex) => {
    if (quizQuestions.length === 0 || eliminatedOptions.includes(optionIndex)) return;
    const currentQuestion = quizQuestions[currentStage];
    
    if (optionIndex === currentQuestion.correctIndex) {
      if (currentStage < 3) {
        setCurrentStage(currentStage + 1);
        setEliminatedOptions([]); // Reset eliminated options for next stage
      } else {
        const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
        setEarnedReward(randomReward);
        setShowReward(true);
        
        setTimeout(() => {
          setShowReward(false);
          setPuzzleCompleted(true);
          if (onPuzzleComplete) {
            onPuzzleComplete(puzzleNumber, randomReward.type === "extra-life");
          }
          setTimeout(() => {
            onBackToSelection();
          }, 2000);
        }, 3000);
      }
    } else {
      setPuzzleFailed(true);
      if (onPuzzleFailed) {
        onPuzzleFailed();
      }
      setTimeout(() => {
        onBackToSelection();
      }, 2000);
    }
  };

  const handleChangeQuestionLifeline = () => {
    if (lifelinesUsed.changeQuestion) return;
    setShowAnimeSelection(true);
  };

  const handleTopicSelection = (selectedTopic) => {
    const currentQuestion = quizQuestions[currentStage];
    const newQuestion = getQuestionByTopic(selectedTopic, currentQuestion.difficulty, puzzleNumber);
    
    if (newQuestion) {
      const updatedQuestions = [...quizQuestions];
      updatedQuestions[currentStage] = newQuestion;
      setQuizQuestions(updatedQuestions);
      setLifelinesUsed(prev => ({ ...prev, changeQuestion: true }));
      setEliminatedOptions([]); // Reset eliminated options
    }
    
    setShowAnimeSelection(false);
  };

  const handleEliminateOptionsLifeline = () => {
    if (lifelinesUsed.eliminateOptions || quizQuestions.length === 0) return;
    
    const currentQuestion = quizQuestions[currentStage];
    const incorrectOptions = [0, 1, 2, 3].filter(i => i !== currentQuestion.correctIndex);
    
    // Randomly select 2 incorrect options to eliminate
    const optionsToEliminate = [];
    while (optionsToEliminate.length < 2 && incorrectOptions.length > 0) {
      const randomIndex = Math.floor(Math.random() * incorrectOptions.length);
      const optionIndex = incorrectOptions.splice(randomIndex, 1)[0];
      optionsToEliminate.push(optionIndex);
    }
    
    setShowEliminationAnimation(true);
    setLifelinesUsed(prev => ({ ...prev, eliminateOptions: true }));
    
    // Animate elimination
    setTimeout(() => {
      setEliminatedOptions(optionsToEliminate);
      setShowEliminationAnimation(false);
    }, 1000);
  };

  if (puzzleFailed) {
    return (
      <div className="puzzle-screen">
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
        <div className="puzzle-content content-overlay">
          <div className="failure-screen">
            <h1 className="failure-title">❌ Puzzle {puzzleNumber} Failed!</h1>
            <p className="failure-message">Wrong answer! Better luck next time.</p>
            <p className="returning-message">All puzzles locked for 20 seconds...</p>
          </div>
        </div>
      </div>
    );
  }

  if (puzzleCompleted) {
    return (
      <div className="puzzle-screen">
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
        <div className="puzzle-content content-overlay">
          <div className="completion-screen">
            <h1 className="completion-title">🎉 Puzzle {puzzleNumber} Completed!</h1>
            <p className="completion-message">All 4 stages cleared!</p>
            <div className="reward-display">
              <div className="reward-icon">{earnedReward?.icon}</div>
              <p className="reward-message">{earnedReward?.message}</p>
            </div>
            <p className="returning-message">All puzzles locked for 40 seconds...</p>
          </div>
        </div>
      </div>
    );
  }

  if (quizQuestions.length === 0) {
    return (
      <div className="puzzle-screen">
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
        <div className="puzzle-content content-overlay">
          <div className="loading-screen">
            <h1 className="loading-title">Loading Puzzle {puzzleNumber}...</h1>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentStage];
  const difficultyColor = difficultyColors[currentQuestion.difficulty];

  return (
    <div className="puzzle-screen">
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
      <div className="puzzle-content content-overlay">
        <h1 className="puzzle-title">
          Puzzle {puzzleNumber} - Stage {currentStage + 1}/4
          <span 
            className="difficulty-badge" 
            style={{ backgroundColor: difficultyColor }}
          >
            {currentQuestion.difficulty.toUpperCase()}
          </span>
        </h1>
        
        {/* Lifeline Controls */}
        <div className="lifeline-controls">
          <button 
            className={`lifeline-button ${lifelinesUsed.changeQuestion ? 'used' : ''}`}
            onClick={handleChangeQuestionLifeline}
            disabled={lifelinesUsed.changeQuestion}
          >
            <span className="lifeline-icon">🔄</span>
            <span className="lifeline-text">Change Question</span>
          </button>
          <button 
            className={`lifeline-button ${lifelinesUsed.eliminateOptions ? 'used' : ''}`}
            onClick={handleEliminateOptionsLifeline}
            disabled={lifelinesUsed.eliminateOptions}
          >
            <span className="lifeline-icon">❌</span>
            <span className="lifeline-text">50:50</span>
          </button>
        </div>
        
        <div className="quiz-area">
          <div className="question-section">
            <h2 className="question">{currentQuestion.question}</h2>
          </div>
          
          <div className="options-container">
            <div className="options-left">
              <button 
                className={`option-button ${eliminatedOptions.includes(0) ? 'eliminated' : ''} ${showEliminationAnimation ? 'eliminating' : ''}`}
                onClick={() => handleOptionClick(0)}
                disabled={eliminatedOptions.includes(0)}
              >
                <span className="option-circle">A</span>
                <span className="option-text">{currentQuestion.options[0]}</span>
              </button>
              <button 
                className={`option-button ${eliminatedOptions.includes(2) ? 'eliminated' : ''} ${showEliminationAnimation ? 'eliminating' : ''}`}
                onClick={() => handleOptionClick(2)}
                disabled={eliminatedOptions.includes(2)}
              >
                <span className="option-circle">C</span>
                <span className="option-text">{currentQuestion.options[2]}</span>
              </button>
            </div>
            
            <div className="options-right">
              <button 
                className={`option-button ${eliminatedOptions.includes(1) ? 'eliminated' : ''} ${showEliminationAnimation ? 'eliminating' : ''}`}
                onClick={() => handleOptionClick(1)}
                disabled={eliminatedOptions.includes(1)}
              >
                <span className="option-circle">B</span>
                <span className="option-text">{currentQuestion.options[1]}</span>
              </button>
              <button 
                className={`option-button ${eliminatedOptions.includes(3) ? 'eliminated' : ''} ${showEliminationAnimation ? 'eliminating' : ''}`}
                onClick={() => handleOptionClick(3)}
                disabled={eliminatedOptions.includes(3)}
              >
                <span className="option-circle">D</span>
                <span className="option-text">{currentQuestion.options[3]}</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Topic Selection Modal */}
        {showAnimeSelection && (
          <div className="anime-selection-overlay">
            <div className="anime-selection-modal">
              <h3 className="anime-selection-title">Choose a Topic</h3>
              <div className="anime-options">
                {getAvailableTopics(puzzleNumber).slice(0, 3).map((topic, index) => (
                  <button
                    key={index}
                    className="anime-option-button"
                    onClick={() => handleTopicSelection(topic)}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {showReward && (
          <div className="power-up-overlay">
            <div className="power-up-display">
              <div className="reward-icon-large">{earnedReward?.icon}</div>
              <h2 className="power-up-text">{earnedReward?.message}</h2>
              <div className="power-up-animation">✨</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PuzzleScreen;