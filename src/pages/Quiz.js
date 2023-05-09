import "./Quiz.scss";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import {} from "../quizSlice.js";

function Quiz() {
  const quizStore = useSelector((store) => store.quiz);
  const [isOn, setIsOn] = useState(false);

  /*   let selectedQuizzesContent =  */
  const [allQuizs, setAllQuizs] = useState([
    {
      selected: false,
      type: "lecture",
      name: "hiraganas",
      content: quizStore.quizHiraganas,
    },
    {
      selected: false,
      type: "lecture",
      name: "katakanas",
      content: quizStore.quizKatakanas,
    },
    {
      selected: false,
      type: "lecture",
      name: "kanjis",
      content: quizStore.quizKatakanas,
    },
    { selected: false, name: "daz", content: quizStore.quizMinnaVocab },
    { selected: true, name: "couleurs", content: quizStore.quizColors },
    { selected: true, name: "animaux", content: quizStore.quizAnimals },
    { selected: true, name: "objets", content: quizStore.quizObjects },
    { selected: false, name: "adjectifs", content: quizStore.quizAdjectives },
    { selected: false, name: "verbes", content: quizStore.quizVerbs },
    { selected: false, name: "nourriture", content: quizStore.quizFood },
    { selected: false, name: "vetements", content: quizStore.quizClothes },
  ]);

  const selectedQuizzesContent = allQuizs
    .filter((quiz) => quiz.selected === true)
    .reduce((acc, quiz) => acc.concat(quiz.content), []);

  const [currentWord, setCurrentWord] = useState(selectedQuizzesContent[0]);
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
  const handleSkip = () => {
    /*     event.preventDefault(); */
    setPreviousWord(currentWord);
    const nextWordIndex = Math.floor(
      Math.random() * selectedQuizzesContent.length
    );
    setCurrentWord(selectedQuizzesContent[nextWordIndex]);
    setMauvaiseReponse(inputValue);
    setInputValue("");
    setStreak(0);
    console.log(selectedQuizzesContent);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && inputValue === currentWord.romaji) {
      handleSubmit(event);
      setIsCorrect(true);
      setPreviousWord(currentWord);
      const nextWordIndex = Math.floor(
        Math.random() * selectedQuizzesContent.length
      );
      setCurrentWord(selectedQuizzesContent[nextWordIndex]);
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

  /*   const handleQuizChange = (event) => {
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
    selectedQuizzesContent = temp;
  }; */

  useEffect(() => {
    handleSkip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allQuizs]);

  const handleToggleSelected = (name) => {
    const selectedCount = allQuizs.reduce((count, quiz) => {
      if (quiz.selected) {
        return count + 1;
      } else {
        return count;
      }
    }, 0);

    const updatedQuizs = allQuizs.map((quiz) => {
      if (quiz.name === name && selectedCount > 1) {
        return { ...quiz, selected: !quiz.selected };
      } else if (quiz.name === name && selectedCount > 0) {
        return { ...quiz, selected: true };
      } else {
        return quiz;
      }
    });

    setAllQuizs(updatedQuizs);
  };

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
          <p>Lecture : </p>
          <div className="filterQuizCat" id="filterQuizHiraKata">
            {allQuizs
              .filter((quiz) => quiz.type === "lecture")
              .map((quiz) => (
                <button>
                  {quiz.name.charAt(0).toUpperCase() + quiz.name.slice(1)}
                </button>
              ))}
          </div>
          <p>Categories : </p>
          <div className="filterQuizCat" id="filterQuizOthers">
            {allQuizs
              .filter((quiz) => quiz.type !== "lecture")
              .map((quiz) => (
                <button
                  className={quiz.selected ? "" : "fliterQuizButtonSelected"}
                  onClick={() => handleToggleSelected(quiz.name)}
                >
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
