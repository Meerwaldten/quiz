import React, { useState, useEffect } from 'react';
import  Question  from './Question.js';
import "./Quiz.css";


export default function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentSection, setCurrentSection] = useState(0);
    const [numCorrect, setNumCorrect] = useState(0);
    const [sectionQuestions, setSectionQuestions] = useState([]);

    async function fetchQuestions(section) {
        try {
        const response = await fetch(`https://staging.inceptsustainability.com/wp-json/task-quiz/v1/quiz/1?section=${section}`);
        const data = await response.json();
        const questions = data.sections[currentSection].questions.map((question) => ({
            id: question.id,
            question: question.question,
            answers: question.answers,
            correctAnswer: question.correctAnswer,
        }));
        setQuestions(questions);
        setSectionQuestions(questions);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    }
        
    useEffect(() => {
        fetchQuestions(currentSection);
    },[currentSection]);
     

    const handleNext = () => {
        if (numCorrect === sectionQuestions.length) {
        const nextSection = currentSection + 1;
        setCurrentSection(nextSection);
        setNumCorrect(0);
        } else {
        alert('Please answer all questions correctly before proceeding to the next section.');
        }
    };


    function handleAnswer(isCorrect) {
        if (isCorrect) {
          setNumCorrect(numCorrect + 1);

          if (currentSection === 1 && numCorrect + 1 === sectionQuestions.length) {
            alert("Congratz you did it!");
          }
        }else {
            setNumCorrect(numCorrect - 1);
        }
        console.log("Number of correct answers: " + numCorrect)
      }


      
    return (
        <div className="question-container">
        {questions.map((question) => (
            <Question key={question.id} {...question} onAnswer={handleAnswer} />
        ))}
        {currentSection < 1 && (
            <button onClick={handleNext}>Next Section</button>
        )}
        </div>
    );
}
      