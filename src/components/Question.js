import React from "react";
import { useState } from "react";
import "./Quiz.css";

export default function Question(props) {
    const { id, question, answers, correctAnswer, onAnswer } = props;
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    //const [isAnswered, setIsAnswered] = useState(false);

    const handleChange = (event) => {
        setSelectedAnswer(parseInt(event.target.value, 10));
        onAnswer(parseInt(event.target.value, 10), correctAnswer);
    };
   
    /*
    const handleChange = (event) => {
      setSelectedAnswer(parseInt(event.target.value, 10));
      onAnswer(parseInt(event.target.value, 10), correctAnswer);
      setIsAnswered(true);
    };
    */

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
{selectedAnswer !== null && (
  <div>
    {isCorrectAnswer ? <p>Correct answer!</p> : <p>Incorrect answer.</p>}
  </div>
*/