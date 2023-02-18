import React, { useState } from "react";

import "./QuizApp.css";

const quizData = [
  {
    question: "The ratio of width of our National flag to its length is?",
    answers: [
      { text: "3:5", correct: false },
      { text: "2:3", correct: true },
      { text: "2:4", correct: false },
      { text: "3:4", correct: false },
    ],
  },
  {
    question:
      "Rabindranath Tagore's 'Jana Gana Mana' has been adopted as India's National Anthem. How many stanzas of the said song were adopted?",
    answers: [
      { text: "Only the first stanza", correct: true },
      { text: "The whole song", correct: false },
      { text: "Third and Fourth stanza", correct: false },
      { text: "First and Second stanza", correct: false },
    ],
  },
  {
    question:
      "The words 'Satyameva Jayate' inscribed below the base plate of the emblem of India are taken from",
    answers: [
      { text: "Rigveda", correct: false },
      { text: "Satpath Brahmana", correct: false },
      { text: "Mundak Upanishad", correct: true },
      { text: "Ramayana", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a non metal that remains liquid at room temperature?",
    answers: [
      { text: "Phosphorous", correct: false },
      { text: "Chlorine", correct: false },
      { text: "Bromine", correct: true },
      { text: "Helium", correct: false },
    ],
  },
  {
    question: "The gas usually filled in the electric bulb is",
    answers: [
      { text: "nitrogen", correct: true },
      { text: "hydrogen", correct: false },
      { text: "carbon dioxide", correct: false },
      { text: "oxygen", correct: false },
    ],
  },
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  function selectAnswer(answer) {
    setSelectedAnswer(answer);
    if (answer.correct) {
      setScore(score + 1);
    }
  }

  function showNextQuestion() {
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  const currentQuestion = quizData[currentQuestionIndex];
  const showPreviousQuestion = () => {
    setSelectedAnswer("");
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };
  const isLastQuestion = currentQuestionIndex === quizData.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  return (
    <div className="quiz-app">
      <h1>Quiz App</h1>
      {currentQuestionIndex < quizData.length ? (
        <>
          <div id="question-container">
            <h2>{currentQuestion.question}</h2>
          </div>
          <div id="answer-buttons">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(answer)}
                className={`answer-button ${
                  selectedAnswer === answer
                    ? answer.correct
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
              >
                {answer.text}
              </button>
            ))}
          </div>
          <div id="previous-button">
            {!isFirstQuestion && (
              <button id="previous-button" onClick={showPreviousQuestion}>
                Previous
              </button>
            )}
          </div>
          <button
            id="next-button"
            onClick={showNextQuestion}
            disabled={!selectedAnswer}
          >
            {isLastQuestion ? "Finish" : "Next"}
          </button>
        </>
      ) : (
        <>
          <div id="final-score-container">
            <h2>
              Your final score is {score} out of {quizData.length}
            </h2>
          </div>
          <button id="restart-button" onClick={() => window.location.reload()}>
            Restart
          </button>
        </>
      )}
      {selectedAnswer && (
        <div id="selected-answer-container">
          <p>You selected: {selectedAnswer.text}</p>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
