"use client";
import { useState } from "react";

const quizData = [
  {
    question: "Have you reviewed your organization's mechanisms for collecting consent to ensure that it is freely given, specific, informed, and clear?",
    options: [
      "Yes, mechanisms meet GDPR standards.",
      "No, mechanisms do not meet GDPR standards.",
    ],
    correctAnswer: "Yes, mechanisms meet GDPR standards.",
    improvementSuggestion: "Implement a review of all consent collection methods to ensure they meet GDPR standards of being freely given, specific, informed, and unambiguous. Use clear language and easy-to-understand formats."
  },
  {
    question: "Where online services are provided to a child, are procedures in place to verify age and get consent of a parent/legal guardian, where required?",
    options: [
      "Yes, procedures are in place.",
      "No, procedures are not in place.",
    ],
    correctAnswer: "Yes, procedures are in place.",
    improvementSuggestion: "Implement age verification mechanisms. For services offered to children, ensure there are robust processes to obtain verifiable parental or guardian consent."
  },
  {
    question: "Is there a documented policy/procedure for handling Subject Access Requests (SARs)? Can your organization respond to SARs within one month?",
    options: [
      "Yes, documented policy and respond within one month.",
      "No, no documented policy or cannot respond within one month.",
    ],
    correctAnswer: "Yes, documented policy and respond within one month.",
    improvementSuggestion: "Develop and document a policy for handling SARs. Ensure your organization can respond to these requests within the one-month timeframe mandated by GDPR. Implement procedures to provide individuals with their data in a structured, commonly used, and machine-readable format."
  },
  {
    question: "Is personal data only used for the purposes for which it was originally collected?",
    options: [
      "Yes, only for the intended purpose.",
      "No, used for additional purposes.",
    ],
    correctAnswer: "Yes, only for the intended purpose.",
    improvementSuggestion: "Ensure personal data is used strictly for the purposes it was collected. Collect only the data necessary for the intended purposes. Implement procedures to keep data accurate and up-to-date. Ensure any necessary corrections are made promptly."
  }
];


const BlogDetailsPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [improvements, setImprovements] = useState([]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    } else {
      setImprovements([...improvements, quizData[currentQuestionIndex].improvementSuggestion]);
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
    setImprovements([]);
  };

  const renderSuggestions = () => {
    if (score === quizData.length) {
      return "Excellent! Your company have best Practices compliant with data protection best practices.";
    } else if (score >= quizData.length * 0.7) {
      return "Good job! Your company is compliant, but there are a few areas to improve.";
    } else {
      return "There are significant gaps in compliance. Please review the suggestions to ensure all aspects are covered.";
    }
  };

  if (showResults) {
    return (
      <div className="mx-auto text-left" style={{paddingTop:"10rem",paddingLeft:"20rem"}}>
        <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
        <p>Your score is {score} out of {quizData.length}</p>
        <p>{renderSuggestions()}</p>
        <ul className="text-left mt-10 list-disc list-inside w-1/2">
          {improvements.map((improvement, index) => (
            <li key={index} className="mb-2 p-2 text-dark">{improvement}</li>
          ))}
        </ul>
        <button onClick={handleRestartQuiz} className="bg-primary text-white py-2 px-4 rounded mt-4 mb-8">
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-15 mb-12 shadow-md m-3"  style={{paddingTop:"10rem",paddingBottom:"5rem",paddingLeft:'5rem'}}>
      <h1 className="text-2xl font-bold mb-4">Data Protection Compliance Quiz</h1>
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

export default BlogDetailsPage;
