//import { fetchAllQuestions } from "../data/api";
//import { questions } from "../data/api";
import React from "react";
import { useState } from "react";
import "./Quiz.css";

export default function Question(props) {
    const { id, question, answers, correctAnswer, onAnswer } = props;
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleChange = (event) => {
        setSelectedAnswer(parseInt(event.target.value, 10));
        onAnswer(parseInt(event.target.value, 10), correctAnswer);
      };
    
      const isCorrectAnswer = selectedAnswer === correctAnswer;
    
      return (
        <div className="question">
          <h3>{question}</h3>
          <form>
            {answers.map((answer) => (
              <div key={answer.id}>
                <input
                  type="radio"
                  id={`answer-${answer.id}`}
                  name={`answer-question-${id}`}
                  value={answer.id}
                  checked={selectedAnswer === answer.id}
                  onChange={handleChange}
                />
                <label htmlFor={`answer-${answer.id}`}>{answer.answer}</label>
              </div>
            ))}
          </form>
          {selectedAnswer !== null && (
            <div>
              {isCorrectAnswer ? <p>Correct answer!</p> : <p>Incorrect answer.</p>}
            </div>
          )}
        </div>
      );
    }

    /*
    const handleChange = (event) => {
      setSelectedAnswer(parseInt(event.target.value, 10));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isCorrect = selectedAnswer === correctAnswer;
        onAnswer(isCorrect);
      };
      

    /*
    const handleSubmit = (event) => {
        event.preventDefault();
        const isCorrect = selectedAnswer === correctAnswer;
        handleAnswer(isCorrect);
    };
    

    const isCorrectAnswer = selectedAnswer === props.correctAnswer;
    console.log(props.onAnswer);
  
    return (
      <div className="question">
        <h4>{question}</h4>
        <form onSubmit={handleSubmit}>
          {answers.map((answer) => (
            <div key={answer.id}>
              <input
                type="radio"
                id={`answer-${answer.id}`}
                name={`answer-question-${id}`}
                value={answer.id}
                checked={selectedAnswer === answer.id}
                onChange={handleChange}
              />
              <label htmlFor={`answer-${answer.id}`}>{answer.answer}</label>
            </div>
          ))}
        </form>
        {selectedAnswer && (
          <div>
            {isCorrectAnswer ? <p>Correct answer!</p> : <p>Incorrect answer.</p>}
          </div>
        )}
      </div>
    );
  }
  */
  