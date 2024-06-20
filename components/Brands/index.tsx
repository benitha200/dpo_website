"use client"
import { useState } from "react";

const quizData = [
  {
    question: "What is the main principle of data protection?",
    options: ["Lawfulness", "Transparency", "Purpose Limitation", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which regulation governs data protection in the European Union?",
    options: ["GDPR", "CCPA", "HIPAA", "PIPEDA"],
    correctAnswer: "GDPR"
  },
  {
    question: "What does 'data minimization' refer to?",
    options: ["Collecting minimal data", "Maximizing data storage", "Deleting old data", "Sharing data minimally"],
    correctAnswer: "Collecting minimal data"
  },
  {
    question: "Who is responsible for ensuring data protection in an organization?",
    options: ["Data Controller", "Data Processor", "Data Protection Officer", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is a Data Protection Impact Assessment (DPIA)?",
    options: ["A process to identify data protection risks", "A method to increase data storage", "A strategy to market data", "None of the above"],
    correctAnswer: "A process to identify data protection risks"
  }
];

const Brands = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption("");
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="mx-auto max-w-7xl text-center p-4">
        <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
        <p>Your score is {score} out of {quizData.length}</p>
        <button onClick={handleRestartQuiz} className="bg-primary text-white py-2 px-4 rounded mt-4">
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl p-4">
      <h1 className="text-2xl font-bold mb-4">Data Protection Quiz</h1>
      <div className="card mb-4">
        <h2 className="text-xl font-bold mb-4">{quizData[currentQuestionIndex].question}</h2>
        {quizData[currentQuestionIndex].options.map((option, index) => (
          <div key={index} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="form-radio"
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleNextQuestion} className="bg-primary text-white py-2 px-4 rounded">
        {currentQuestionIndex === quizData.length - 1 ? "Finish Quiz" : "Next Question"}
      </button>
    </div>
  );
};

export default Brands;
