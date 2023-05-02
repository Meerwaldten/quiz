import Quiz from './components/Quiz';
import './App.css';
import image1 from "./images/vindmoelle.jpg";
import image2 from "./images/sustainability.jpg";



function App() {
  return (
    <div className="App">
      <div className="image-container">
        <img src={image1} alt="Vindmoelle"></img>
        <div className="spacer"></div>
        <h1>Welcome to the quiz!</h1>
        <img src={image2} alt="Logo"></img>
      </div>
      <div className="quiz-container">
        <Quiz />
      </div>
    </div>
  );
}


export default App;