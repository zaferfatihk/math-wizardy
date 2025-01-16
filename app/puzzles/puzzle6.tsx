import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star } from "lucide-react"

export default function MathGame() {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1)
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1)
  const [operator, setOperator] = useState(Math.random() < 0.5 ? '+' : '-')
  const [userAnswer, setUserAnswer] = useState('')
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const correctAnswer = operator === '+' ? num1 + num2 : num1 - num2

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value)
  }

  const checkAnswer = () => {
    const answer = parseInt(userAnswer, 10)
    setIsCorrect(answer === correctAnswer)
  }

  const generateNewProblem = () => {
    setNum1(Math.floor(Math.random() * 10) + 1)
    setNum2(Math.floor(Math.random() * 10) + 1)
    setOperator(Math.random() < 0.5 ? '+' : '-')
    setUserAnswer('')
    setIsCorrect(null)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="text-3xl font-bold mb-4 text-center">
          {num1} {operator} {num2} = ?
        </div>
        <div className="flex justify-center mb-4">
          {[...Array(num1)].map((_, index) => (
            <Star key={index} className="h-8 w-8 text-yellow-400 mr-1" />
          ))}
          {operator === '+' && (
            <>
              <span className="text-2xl font-bold mx-2">+</span>
              {[...Array(num2)].map((_, index) => (
                <Star key={index} className="h-8 w-8 text-yellow-400 mr-1" />
              ))}
            </>
          )}
          {operator === '-' && (
            <>
              <span className="text-2xl font-bold mx-2">-</span>
              {[...Array(num2)].map((_, index) => (
                <Star key={index} className="h-8 w-8 text-red-400 mr-1" />
              ))}
            </>
          )}
        </div>
        <div className="mb-4">
          <Input
            type="number"
            value={userAnswer}
            onChange={handleAnswerChange}
            placeholder="Your answer"
            className="w-full"
          />
        </div>
        <div className="flex justify-center mb-4">
          <Button onClick={checkAnswer} className="mr-2">
            Check Answer
          </Button>
          <Button onClick={generateNewProblem} variant="outline">
            New Problem
          </Button>
        </div>
        {isCorrect !== null && (
          <div className={`text-center ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? 'Correct!' : `Try again! The correct answer is ${correctAnswer}.`}
          </div>
        )}
      </div>
    </div>
  )
}