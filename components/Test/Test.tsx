"use client"
import React, { useState } from 'react';

const quizQuestions = [
  {
    question: "What is your name",
    options: ["1. sando", "2. sandrine", "3. anitha", "4. bellawanre"],
    correctAnswer: 1
  },
  {
    question: "Where do you live?",
    options: ["1. kigali", "2. rubavu", "3. gatsibo", "4. butare"],
    correctAnswer: 3
  },
  {
    question: "What is your faculty?",
    options: ["1. computer science", "2.nurse", "3. medecine", "4. geology"],
    correctAnswer: 1
  }
];

const QuizApp: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [showFinalScore, setShowFinalScore] = useState(false);

  const handleAnswer = () => {
    if (userAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer(null);
    } else {
      setShowFinalScore(true);
    }
  };

  const handleOptionChange = (optionIndex: number) => {
    setUserAnswer(optionIndex + 1);
  };

  return (
    <div>
      {showFinalScore ? (
        <div>
          <h3>Quiz Completed</h3>
          <p>Your final score is: {score} out of {quizQuestions.length}</p>
        </div>
      ) : (
        <div>
          <h3>{quizQuestions[currentQuestionIndex].question}</h3>
          <ul>
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    value={index + 1}
                    checked={userAnswer === index + 1}
                    onChange={() => handleOptionChange(index)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleAnswer}>Next</button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;