/* eslint-disable no-undef */
import {useState} from 'react';


const Quiz = (props) => {

  const questions = [
    {
      text: "What is ReactJS?",
      options: [
        { id: 0, text: "Server-side framework", isCorrect: false },
        { id: 1, text: "user interface framework", isCorrect: true },
        { id: 2, text: "both a and b", isCorrect: false },
        { id: 3, text: "none of the above", isCorrect: false },
      ],
    },
    {
        text: "React.js is written in which of the following language?",
        options: [
          { id: 0, text: "JavaScript", isCorrect: true },
          { id: 1, text: "Java", isCorrect: false },
          { id: 2, text: "C", isCorrect: false },
          { id: 3, text: "C++", isCorrect:  false },
        ],
      },
      {
        text: "What is a state in React?",
        options: [
          { id: 0, text: "A permanent storage.", isCorrect:  true },
          { id: 1, text: "Internal storage of the component.", isCorrect:false },
          { id: 2, text: "External storage of the component.", isCorrect: false },
          { id: 3, text: "None of the above.", isCorrect: false },
        ],
      },
      
      {
        text: "What is the return value of the useState hook?",
        options: [
          { id: 0, text: " Pair of current state and function updating it", isCorrect: true },
          { id: 1, text: "Current State", isCorrect: false },
          { id: 2, text: "Function updating the current state", isCorrect:  false },
          { id: 3, text: "UseState returns nothing", isCorrect: false },
        ],
      },
      {
        text: "How many elements can a valid react component return?",
        options: [
          { id: 0, text: "1", isCorrect: true },
          { id: 1, text: "2", isCorrect:  false },
          { id: 2, text: "3", isCorrect:  false },
          { id: 3, text: "4", isCorrect:  false },
        ],
      },
  ];

  
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [highlightState, setHighlightState] = useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore((prevCount) => prevCount + 1);
    }

    setcurrentQuestion((prevIndex) => prevIndex + 1);
  };

  const handleHighlight = () => {
    setHighlightState(true);
  };

  const handleLowlight = () => {
    setHighlightState(false);
  };

  const reset = () => {
    setcurrentQuestion(0);
    setScore(0);
    setHighlightState(false); 
  };

  const percentage = () => {
    if (questions.length === 0) {
      return 0;
    }

    return (score / questions.length) * 100;
  };

  return (
   
    <div>

      {currentQuestion < questions.length ? (
        <div id='main-container'>
         
          <div id='quiz-container'>

           
           <h2>
            Question {currentQuestion + 1} out of {questions.length}
           </h2>

           <div id='prim-div'>
              <h2 style={{ color: highlightState ? 'red' : 'inherit' }}>
                {questions[currentQuestion].text}
              </h2>
           </div>
              
           <div>

            <ul>
                {questions[currentQuestion].options.map((option) => (
                  <li key={option.id}>
                    <button onClick={() => handleClick(option.isCorrect)}>
                      {option.text}
                    </button>
                  </li>
                ))}
            </ul>

           </div>

          </div>
                
          <div id='bottom-buttons'>

           <button className={`highlighter ${props.theme ? 'light' : 'dark'}`} onClick={handleHighlight}>Highlight</button>
           <button className={`highlighter ${props.theme ? 'light' : 'dark'}`} onClick={handleLowlight}>Lowlight</button>

          </div>

        </div>
      ) : (
        <div id='result-container'>
            <h1>Final Results</h1>
            <h1>{score} out of {questions.length} Correct Answers - ({percentage()}) %</h1>
            <button id='result-but' onClick={reset}>
              Restart Game
            </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;