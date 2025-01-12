'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { translate, translateWithInt } from '../utils/translate'

interface Puzzle {
  id: number;
  title: string;
  points: number;
  locked: boolean;
}

const puzzles = [
  { id: 1, title: 'Count the Apples', points: 10, locked: false },
  { id: 2, title: 'Match Shapes', points: 15, locked: false },
  { id: 3, title: 'Add Numbers', points: 20, locked: true },
  { id: 4, title: 'Subtract Fun', points: 25, locked: true },
]

export default function PuzzlesPage() {
  const [selectedPuzzle, setSelectedPuzzle] = useState(puzzles[0])
  const [userPoints, setUserPoints] = useState(0)

  const handlePuzzleClick = (puzzle) => {
    if (puzzle.locked) {
      if (userPoints >= puzzle.points) {
        puzzle.locked = false
        setUserPoints(userPoints - puzzle.points)
      } else {
        let remainingPoints = puzzle.points - userPoints;
        alert(translate('puzzles.unlockMessage', remainingPoints.toString()))
        return
      }
    }
    setSelectedPuzzle(puzzle)
  }

  const handleSolvePuzzle = () => {
    setUserPoints(userPoints + selectedPuzzle.points)
    alert(`Congratulations! You earned ${selectedPuzzle.points} points!`)
  }

  return (
    <div className="container mx-auto px-4 py-8 flex">
      <div className="w-1/4 pr-4">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">{translate('puzzles.title')}</h2>
        <ul>
          {puzzles.map((puzzle) => (
            <li key={puzzle.id} className="mb-2">
              <Button
                onClick={() => handlePuzzleClick(puzzle)}
                variant={puzzle.locked ? "outline" : "default"}
                className="w-full text-left"
              >
                {puzzle.title} {puzzle.locked && "🔒"}
              </Button>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-blue-600">{translateWithInt('puzzles.yourPoints', { points: userPoints })}</p>
      </div>
      <div className="w-3/4 pl-4">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">{selectedPuzzle.title}</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          {selectedPuzzle.id === 1 && (
            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{translate('puzzles.samplePuzzle.title')}</h3>
              <div className="flex justify-center space-x-4 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <span role="img" aria-label="apple" className="text-4xl">🍎</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-lg mb-4">{translate('puzzles.samplePuzzle.question')}</p>
              <Button onClick={handleSolvePuzzle}>{translate('puzzles.samplePuzzle.answer')}</Button>
            </div>
          )}
          {/* Add more puzzle content here for other puzzle types */}
        </div>
      </div>
    </div>
  )
}

