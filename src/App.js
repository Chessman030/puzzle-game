import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import PuzzleSelection from './components/PuzzleSelection';
import PuzzleScreen from './components/PuzzleScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);
  const [puzzleTimers, setPuzzleTimers] = useState({}); // Track cooldown timers for each puzzle
  const [extraLives, setExtraLives] = useState(0);

  const handleGetIntoPuzzle = () => {
    setCurrentScreen('puzzleSelection');
  };

  const handlePuzzleSelect = (puzzleNumber) => {
    // Check if puzzle is on cooldown
    if (puzzleTimers[puzzleNumber] && puzzleTimers[puzzleNumber] > 0) {
      alert(`Please wait ${puzzleTimers[puzzleNumber]} seconds before playing this puzzle again!`);
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

    // Start 40-second cooldown timer for this puzzle
    setPuzzleTimers(prev => ({ ...prev, [puzzleNumber]: 40 }));

    // Countdown timer
    const timer = setInterval(() => {
      setPuzzleTimers(prev => {
        const newTimers = { ...prev };
        if (newTimers[puzzleNumber] > 1) {
          newTimers[puzzleNumber] -= 1;
        } else {
          delete newTimers[puzzleNumber];
          clearInterval(timer);
        }
        return newTimers;
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
          puzzleTimers={puzzleTimers}
          extraLives={extraLives}
        />
      )}
      {currentScreen === 'puzzle' && (
        <PuzzleScreen 
          puzzleNumber={selectedPuzzle}
          onBackToSelection={handleBackToSelection}
          onPuzzleComplete={handlePuzzleComplete}
        />
      )}
    </div>
  );
}

export default App;