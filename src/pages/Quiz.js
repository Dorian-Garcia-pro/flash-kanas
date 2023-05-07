import "./Quiz.scss";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import {} from "../quizSlice.js";

function Quiz() {
  const quizStore = useSelector((store) => store.quiz);
  const [isOn, setIsOn] = useState(false);
  const targetQuiz = isOn ? quizStore.quizMinnaVocab : quizStore.quizHiraganas;
  const [currentWord, setCurrentWord] = useState(targetQuiz[0]);
  const [previousWord, setPreviousWord] = useState();
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState();
  const [mauvaiseReponse, setMauvaiseReponse] = useState();
  const [streak, setStreak] = useState(0);
  const formRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toLowerCase());
    if (isCorrect) {
      return;
    } else {
      setIsCorrect();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleSkip = (event) => {
    event.preventDefault();
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
      setMauvaiseReponse();
    } else if (event.keyCode === 13 && inputValue !== currentWord) {
      setIsCorrect(false);
      setMauvaiseReponse(inputValue);
      setInputValue("");
      setStreak(0);
    }
  };

  const checkKey = (e) => {
    e = e || window.event;

    switch (e.keyCode) {
      case 222: // escape key
        handleSkip(e);
        break;

      default:
        break;
    }
  };

  document.onkeydown = checkKey;

  return (
    <div className="quiz-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={isOn}
          onChange={() => setIsOn((prev) => !prev)}
        ></input>
        <span className="slider"></span>
      </label>
      {/*========================== LEFT COLUMN - START ========================== */}
      <div className="leftCol-quiz">
        {" "}
        {previousWord ? (
          <div className="previousWord">
            <p className=""> Mot précédent :</p>
            <p>
              {previousWord ? previousWord.hiragana : ""} (
              {previousWord ? previousWord.romaji : ""})
            </p>
            <p> {previousWord ? previousWord.english : ""}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      {/*========================== LEFT COLUMN - END ========================== */}
      {/*========================== MID COLUMN - START ========================== */}
      <div className="midCol-quiz">
        <p> {isOn ? currentWord.english : currentWord.hiragana}</p>
        <form onSubmit={handleSubmit} ref={formRef}>
          <label
            className={` ${isCorrect ? "correct " : ""} ${
              isCorrect === false ? "false " : ""
            }`}
          >
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

        <p id="streakCounter">Streak : {streak}</p>
        {mauvaiseReponse ? (
          <p id="errorQuiz">Ce n'est pas : {mauvaiseReponse}</p>
        ) : (
          <p></p>
        )}
      </div>
      {/*========================== MID COLUMN - END ========================== */}
      {/*========================== RIGHT COLUMN - START ========================== */}
      <div className="rightCol-quiz"></div>
      {/*========================== RIGHT COLUMN - END ========================== */}
    </div>
  );
}

export default Quiz;
