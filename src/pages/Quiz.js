import "./Quiz.scss";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {} from "../quizSlice.js";

function Quiz() {
  const quizStore = useSelector((store) => store.quiz);
  /*  const dispatch = useDispatch(); */
  const location = useLocation();
  const targetQuiz =
    location.pathname === "/quiz/daz"
      ? quizStore.quizDaz
      : quizStore.quizHiraganas;
  const [currentWord, setCurrentWord] = useState(targetQuiz[0]);
  const [previousWord, setPreviousWord] = useState();
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const [mauvaiseReponse, setMauvaiseReponse] = useState("aeazez");
  const [streak, setStreak] = useState(0);
  const formRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toLowerCase());
    setIsCorrect(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleSkip = (event) => {
    event.preventDefault();
    setIsCorrect(false);
    setPreviousWord(currentWord);
    const nextWordIndex = Math.floor(Math.random() * targetQuiz.length);
    setCurrentWord(targetQuiz[nextWordIndex]);
    setMauvaiseReponse(inputValue);
    setInputValue("");
    setStreak(0);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && inputValue === currentWord.romaji) {
      handleSubmit(event);
      setIsCorrect(true);
      setPreviousWord(currentWord);
      const nextWordIndex = Math.floor(Math.random() * targetQuiz.length);
      setCurrentWord(targetQuiz[nextWordIndex]);
      setInputValue("");
      setStreak((prev) => prev + 1);
    } else if (event.keyCode === 13 && inputValue !== currentWord) {
      setIsCorrect(false);
      setMauvaiseReponse(inputValue);
      setInputValue("");
      setStreak(0);
    }
  };

  return (
    <div className="quiz-container">
      {/*========================== MID COLUMN - START ========================== */}
      <div className="midCol-quiz">
        <p> {currentWord.hiragana}</p>
        <form onSubmit={handleSubmit} ref={formRef}>
          <label>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Entrée pour valider"
              autoFocus
            />
            <div className="btn" onClick={handleSkip}>
              Skip
            </div>
          </label>
        </form>

        {!isCorrect && (
          <p id="errorQuiz">FAUX ! C'est pas : {mauvaiseReponse}</p>
        )}

        {previousWord ? (
          <div className="previousWord">
            <p>
              {previousWord ? previousWord.hiragana : ""} (
              {previousWord ? previousWord.romaji : ""})
            </p>
            <p> {previousWord ? previousWord.english : ""}</p>
          </div>
        ) : (
          ""
        )}
        <p id="streakCounter">Streak : {streak}</p>
      </div>
      {/*========================== MID COLUMN - END ========================== */}
    </div>
  );
}

export default Quiz;
