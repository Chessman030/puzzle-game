# Puzzle Game

A React-based puzzle game with cloud-themed navigation.

## 🚀 Live Demo

**Play the game:** https://puzzle-game-r4l6lxc1j-raghav-s-projects-0fb50042.vercel.app

**Vercel Dashboard:** https://vercel.com/raghav-s-projects-0fb50042/puzzle-game

## Features

- Welcome screen with "Get Into The Puzzle" button
- Puzzle selection screen with 4 cloud-shaped buttons
- Individual puzzle screens for each puzzle
- Responsive design with red background theme

## Getting Started

### Play Online
Visit the live demo: https://puzzle-game-r4l6lxc1j-raghav-s-projects-0fb50042.vercel.app

### Run Locally
1. Make sure you have Node.js installed on your system
2. Navigate to the puzzle-game directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
   or
   ```
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000`

## Project Structure

```
puzzle-game/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── WelcomeScreen.js
│   │   ├── PuzzleSelection.js
│   │   └── PuzzleScreen.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
```

## How to Use

1. Click "Get Into The Puzzle" on the welcome screen
2. Choose from Puzzle 1, 2, 3, or 4 on the cloud selection screen
3. Each puzzle opens in its own screen where you can add puzzle logic
4. Use the back buttons to navigate between screens

## Customization

- Modify puzzle logic in `src/components/PuzzleScreen.js`
- Change styling in `src/styles.css`
- Add more puzzles by updating the puzzle selection component

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)
