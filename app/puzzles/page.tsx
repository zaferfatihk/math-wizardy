'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { translate } from '../utils/translate';

const puzzles = [
  { id: 1, title: 'Count the Apples', component: 'puzzle1', points: 10, locked: false },
  { id: 2, title: 'Match Shapes', component: 'puzzle2', points: 15, locked: false },
  { id: 3, title: 'Solve the Addition', component: 'puzzle3', points: 20, locked: false },
  { id: 4, title: 'Count the Stars', component: 'puzzle4', points: 25, locked: false },
  { id: 5, title: 'Count the Grapes', component: 'puzzle5', points: 30, locked: false },
];

export default function PuzzlesPage() {
  const [selectedPuzzle, setSelectedPuzzle] = useState(puzzles[0]);
  const [userPoints, setUserPoints] = useState(0);

  const handlePuzzleClick = (puzzle) => {
    if (puzzle.locked) {
      if (userPoints >= puzzle.points) {
        puzzle.locked = false;
        setUserPoints(userPoints - puzzle.points);
      } else {
        let remainingPoints = puzzle.points - userPoints;
        alert(translate('puzzles.unlockMessage', { points: remainingPoints.toString() }));
        return;
      }
    }
    setSelectedPuzzle(puzzle);
  };

  const handleSolvePuzzle = () => {
    setUserPoints(userPoints + selectedPuzzle.points);
    alert(`Congratulations! You earned ${selectedPuzzle.points} points!`);
  };

  const PuzzleComponent = dynamic(() => import(`./${selectedPuzzle.component}`));

  return (
    <div className="container mx-auto px-4 py-8 flex">
      <div className="w-1/4 pr-4">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">{translate('puzzles.title')}</h2>
        <ul>
          {puzzles.map((puzzle) => (
            <li key={puzzle.id}>
              <button
                className="text-lg text-blue-500 hover:underline"
                onClick={() => handlePuzzleClick(puzzle)}
              >
                {puzzle.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 pl-4">
        <PuzzleComponent />
      </div>
    </div>
  );
}