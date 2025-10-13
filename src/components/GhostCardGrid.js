import React from 'react';
import GhostCard from './GhostCard'; // Ensure this is the correct path to your GhostCard component

const puzzles = [
  { name: "Spooky Puzzle 1" },
  { name: "Spooky Puzzle 2" },
  { name: "Spooky Puzzle 3" },
  { name: "Spooky Puzzle 4" }
];

const GhostCardGrid = () => (
  <div className="ghost-card-grid-wrapper">
    <h2 className="ghost-title">Choose Your Ghost Puzzle</h2>
    <div className="ghost-card-grid">
      {puzzles.map((p, idx) => (
        <GhostCard key={idx} puzzleName={p.name} />
      ))}
    </div>
    <style jsx>{`
      .ghost-card-grid-wrapper {
        min-height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-top: 60px;
        width: 100vw;
      }

      .ghost-title {
        font-family: 'Nosifer', cursive;
        font-size: 2.2rem;
        color: #dc143c;
        margin-bottom: 2rem;
        text-align: center;
        text-shadow: 2px 2px 6px #0003;
      }

      .ghost-card-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
        justify-items: center;
        align-items: center;
        margin: 0 auto;
        max-width: 800px;
        width: 100%;
      }

      @media (max-width: 900px) {
        .ghost-card-grid {
          gap: 20px;
          max-width: 95vw;
        }
        .ghost-card-grid-wrapper {
          padding-top: 30px;
        }
      }
      @media (max-width: 600px) {
        .ghost-card-grid {
          grid-template-columns: 1fr;
          grid-template-rows: repeat(4, 1fr);
          max-width: 400px;
        }
        .ghost-card-grid-wrapper {
          padding-top: 15px;
        }
      }
    `}</style>
  </div>
);

export default GhostCardGrid;