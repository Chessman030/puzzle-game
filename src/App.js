import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import PuzzleSelection from './components/PuzzleSelection';
import PuzzleScreen from './components/PuzzleScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);
  const [globalTimer, setGlobalTimer] = useState(0); // Global timer that locks ALL puzzles
  const [extraLives, setExtraLives] = useState(0);

  // Reset extra lives on app start/refresh
  useEffect(() => {
    setExtraLives(0);
  }, []);

  const handleGetIntoPuzzle = () => {
    setCurrentScreen('puzzleSelection');
  };

  const handlePuzzleSelect = (puzzleNumber) => {
    // Check if global timer is active
    if (globalTimer > 0) {
      alert(`Please wait ${globalTimer} seconds before playing any puzzle!`);
      return;
    }
    setSelectedPuzzle(puzzleNumber);
    setCurrentScreen('puzzle');
  };

  const handlePuzzleComplete = (puzzleNumber, earnedExtraLife) => {
    // Add extra life if earned
    if (earnedExtraLife) {
      setExtraLives(prev => prev + 1);
    }

    // Start 40-second global cooldown timer for ALL puzzles
    setGlobalTimer(40);

    // Countdown timer
    const timer = setInterval(() => {
      setGlobalTimer(prev => {
        if (prev > 1) {
          return prev - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
  };

  const handlePuzzleFailed = () => {
    // Start 20-second global cooldown timer for ALL puzzles on failure
    setGlobalTimer(20);

    // Countdown timer
    const timer = setInterval(() => {
      setGlobalTimer(prev => {
        if (prev > 1) {
          return prev - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
  };

  const handleBackToSelection = () => {
    setCurrentScreen('puzzleSelection');
    setSelectedPuzzle(null);
  };

  const handleBackToWelcome = () => {
    setCurrentScreen('welcome');
    setSelectedPuzzle(null);
  };

  return (
    <div className="App">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onGetIntoPuzzle={handleGetIntoPuzzle} />
      )}
      {currentScreen === 'puzzleSelection' && (
        <PuzzleSelection 
          onPuzzleSelect={handlePuzzleSelect}
          onBackToWelcome={handleBackToWelcome}
          globalTimer={globalTimer}
          extraLives={extraLives}
        />
      )}
      {currentScreen === 'puzzle' && (
        <PuzzleScreen 
          puzzleNumber={selectedPuzzle}
          onBackToSelection={handleBackToSelection}
          onPuzzleComplete={handlePuzzleComplete}
          onPuzzleFailed={handlePuzzleFailed}
        />
      )}
    </div>
  );
}

export default App;