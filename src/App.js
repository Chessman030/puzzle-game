import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import PuzzleSelection from './components/PuzzleSelection';
import PuzzleScreen from './components/PuzzleScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);

  const handleGetIntoPuzzle = () => {
    setCurrentScreen('puzzleSelection');
  };

  const handlePuzzleSelect = (puzzleNumber) => {
    setSelectedPuzzle(puzzleNumber);
    setCurrentScreen('puzzle');
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
        />
      )}
      {currentScreen === 'puzzle' && (
        <PuzzleScreen 
          puzzleNumber={selectedPuzzle}
          onBackToSelection={handleBackToSelection}
        />
      )}
    </div>
  );
}

export default App;