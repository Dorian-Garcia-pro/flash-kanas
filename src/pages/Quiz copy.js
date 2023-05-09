import "./Quiz.scss";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import {} from "../quizSlice.js";

function Quiz() {
  const quizStore = useSelector((store) => store.quiz);
  const [isOn, setIsOn] = useState(true);
  const [targetQuiz, setTargetQuiz] = useState(
    isOn ? quizStore.quizMinnaVocab : quizStore.quizHiraganas
  );
  /*   let targetQuiz =  */
  const [currentWord, setCurrentWord] = useState(targetQuiz[0]);
  const [previousWord, setPreviousWord] = useState();
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState();
  const [mauvaiseReponse, setMauvaiseReponse] = useState();
  const [streak, setStreak] = useState(0);
  const formRef = useRef(null);
  const allQuizs = [
    { selected: true, name: "hiraganas", content: quizStore.quizHiraganas },
    { selected: true, name: "katakanas", content: quizStore.quizMinnaVocab },
    { selected: false, name: "daz", content: quizStore.quizMinnaVocab },
    { selected: false, name: "couleurs", content: quizStore.quizMinnaVocab },
    { selected: true, name: "animaux", content: quizStore.quizMinnaVocab },
    { selected: true, name: "nourriture", content: quizStore.quizMinnaVocab },
  ];

  const selectedQuizzesContent = allQuizs
    .filter((quiz) => quiz.selected)
    .reduce((acc, quiz) => acc.concat(quiz.content), []);

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
  const handleSkip = () => {
    /*     event.preventDefault(); */
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

  const handleQuizChange = (event) => {
    let temp = event.target.value;
    switch (event.target.value) {
      case "hiragana":
        temp = quizStore.quizHiraganas;
        setIsOn(false);
        break;
      case "katakana":
        temp = quizStore.quizKatakanas;
        setIsOn(false);
        break;
      case "hiraKata":
        temp = [...quizStore.quizKatakanas, ...quizStore.quizHiraganas];
        break;
      case "daz":
        temp = quizStore.quizMinnaVocab;
        setIsOn(true);
        break;
      default:
        break;
    }
    setTargetQuiz(temp);
  };

  useEffect(() => {
    handleSkip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetQuiz]);

  return (
    <div className="quiz-container">
      {/*       <label className="switch">
        <input
          type="checkbox"
          checked={isOn}
          onChange={() => setIsOn((prev) => !prev)}
        ></input>
        <span className="slider"></span>
      </label> */}
      {/*========================== LEFT COLUMN - START ========================== */}
      <div className="leftCol-quiz">
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
      <div className="rightCol-quiz">
        {/*         <select onChange={handleQuizChange}>
          <option value="" disabled style={{ display: "none" }}>
            Select an option
          </option>
          <option value="hiragana">Hiraganas</option>
          <option value="katakana">Katakanas</option>
          <option value="hiraKata">Les deux</option>
          <option value="daz">Daz mode</option>
        </select> */}

        <div id="filtersQuiz">
          <div id="filterQuizHiraKata">
            {allQuizs
              .filter(
                (quiz) => quiz.name === "hiraganas" || quiz.name === "katakanas"
              )
              .map((quiz) => (
                <button>
                  {quiz.name.charAt(0).toUpperCase() + quiz.name.slice(1)}
                </button>
              ))}
          </div>
          <div id="filterQuizOthers">
            {allQuizs
              .filter(
                (quiz) => quiz.name !== "hiraganas" && quiz.name !== "katakanas"
              )
              .map((quiz) => (
                <button>
                  {quiz.name.charAt(0).toUpperCase() + quiz.name.slice(1)}
                </button>
              ))}
          </div>
        </div>
      </div>
      {/*========================== RIGHT COLUMN - END ========================== */}
    </div>
  );
}

export default Quiz;
