import './App.css';
import { useState } from "react";

import facts from "./facts.jsx";
import Flashcard from "./components/Flashcard.jsx";

const flashcards = [];

flashcards.push({
  "question": "Start!",
  "answer": "Press the next button to view the next flashcard."
})

for (const fact of facts) {
  flashcards.push(fact);
}

const App = () => {

  const [flashcardIndex, setFlashcardIndex] = useState(0);
  

  const firstCardIsShown = flashcardIndex == 0; 

  const handleNextClick = () => {
    setFlashcardIndex(flashcardIndex + 1);
    setHasGuessed(false);
  }

  const handlePrevClick = () => {
    setFlashcardIndex(flashcardIndex - 1);
    setHasGuessed(false);
  }



  return (
    <div className="App">
      <div className="header"> 
        <h1>Biology 101!</h1>
        <p>Get ready for the upcoming test with these true/false flashcards!</p>
        <p>Total Flashcards: {facts.length}</p>
      </div>
      <div className="body">
        <Flashcard 
          question={flashcards[flashcardIndex].question} 
          answer={flashcards[flashcardIndex].answer}
        />
      </div>
      <div className="button-grouping">
          <button className="backButton" onClick={handlePrevClick} disabled={flashcardIndex == 0}>Prev</button>
          <button className="nextButton" onClick={handleNextClick} disabled={flashcardIndex == flashcards.length - 1}>Next</button>
        </div>
    </div>
  )
}

export default App