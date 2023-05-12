import "./Quiz.scss";
import { useState, useRef, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import {} from "../quizSlice.js";

function Quiz() {
  const quizStore = useSelector((store) => store.quiz);
  const [isOn, setIsOn] = useState(false);

  /*   let selectedQuizzesContent =  */
  const [allQuizs, setAllQuizs] = useState([
    {
      selected: true,
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
      content: quizStore.quizKanjis,
    },
    { selected: false, name: "adjectifs", content: quizStore.quizAdjectives },
    { selected: false, name: "daz", content: quizStore.quizMinnaVocab },
    /*     { selected: false, name: "couleurs", content: quizStore.quizColors },*/
    { selected: false, name: "animaux", content: quizStore.quizAnimals },
    { selected: false, name: "vetements", content: quizStore.quizClothes },
    { selected: false, name: "objets", content: quizStore.quizObjects },
    { selected: false, name: "verbes", content: quizStore.quizVerbs },
    /*     { selected: false, name: "nourriture", content: quizStore.quizFood }, */
  ]);

  const selectedQuizzesContent = allQuizs
    .filter((quiz) => quiz.selected === true)
    .reduce((acc, quiz) => acc.concat(quiz.content), []);

  const [currentWord, setCurrentWord] = useState(
    selectedQuizzesContent[0] || {
      hiragana: "いえ",
      romaji: "ie",
      english: "maison",
    }
  );

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
  };

  useEffect(() => {
    if (inputValue === currentWord.romaji) {
      setIsCorrect(true);
      setPreviousWord(currentWord);
      const nextWordIndex = Math.floor(
        Math.random() * selectedQuizzesContent.length
      );
      setCurrentWord(selectedQuizzesContent[nextWordIndex]);
      setInputValue("");
      setStreak((prev) => prev + 1);
      setMauvaiseReponse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  /*   const handleKeyDown = (event) => {
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
    } else if (event.keyCode === 13 && inputValue !== currentWord.romaji) {
      setIsCorrect(false);
      setMauvaiseReponse(inputValue);
      setInputValue("");
      setStreak(0);
    }
  }; */
  /*   const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSkip();
    }
  }; */

  const checkKey = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 222: // escape key
        handleSkip(e);
        break;
      case 13: // escape key
        handleSkip(e);
        break;
      default:
        break;
    }
  };

  document.onkeydown = checkKey;

  useEffect(() => {
    memoizedHandleSkip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allQuizs]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedHandleSkip = useMemo(() => handleSkip, [allQuizs]);

  const handleToggleSelected = (name) => {
    if (!isOn) {
      setIsOn(true);
    }
    const selectedCount = allQuizs.reduce((count, quiz) => {
      if (quiz.selected) {
        return count + 1;
      } else {
        return count;
      }
    }, 0);

    const updatedQuizs = allQuizs.map((quiz) => {
      if (
        allQuizs
          .filter((obj) => obj.type === "lecture")
          .every((obj) => obj.selected === false)
      ) {
        if (quiz.name === name && selectedCount > 1) {
          return { ...quiz, selected: !quiz.selected };
        } else if (quiz.name === name && selectedCount > 0) {
          return { ...quiz, selected: true };
        }
      } else {
        let temp = allQuizs.forEach((quiz) => {
          if (quiz.type === "lecture") {
            quiz.selected = false;
          }
        });
        setAllQuizs(temp);
      }
      return quiz;
    });

    const isDifferent = updatedQuizs.some(
      (quiz, index) => quiz.selected !== allQuizs[index].selected
    );

    if (isDifferent) {
      setAllQuizs(updatedQuizs);
    }
  };

  const handleToggleSelectedKanas = (name) => {
    if (isOn) {
      setIsOn(false);
    }
    const selectedCount = allQuizs.reduce((count, quiz) => {
      if (quiz.selected) {
        return count + 1;
      } else {
        return count;
      }
    }, 0);

    const updatedQuizs = allQuizs.map((quiz) => {
      if (
        allQuizs
          .filter((obj) => obj.type !== "lecture")
          .every((obj) => obj.selected === false)
      ) {
        if (quiz.name === name && selectedCount > 1) {
          return { ...quiz, selected: !quiz.selected };
        } else if (quiz.name === name && selectedCount > 0) {
          return { ...quiz, selected: true };
        }
      } else {
        if (quiz.name === name && selectedCount > 1) {
          return { ...quiz, selected: !quiz.selected };
        } else if (quiz.name === name && selectedCount > 0) {
          return { ...quiz, selected: true };
        }
        let temp = allQuizs.forEach((quiz) => {
          if (quiz.type !== "lecture") {
            quiz.selected = false;
          }
        });
        setAllQuizs(temp);
      }
      return quiz;
    });
    const isDifferent = updatedQuizs.some(
      (quiz, index) => quiz.selected !== allQuizs[index].selected
    );

    if (isDifferent) {
      setAllQuizs(updatedQuizs);
    }
  };

  return (
    <div className="quiz-container">
      {/*========================== LEFT COLUMN - START ========================== */}
      <div className="leftCol-quiz">
        {previousWord ? (
          <div className="previousWord">
            <p> Mot précédent :</p>
            <div id="previousWordText">
              <p>
                {previousWord ? previousWord.hiragana : ""} (
                {previousWord ? previousWord.romaji : ""})
              </p>
              <p> {previousWord ? previousWord.english : ""}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {/*========================== LEFT COLUMN - END ========================== */}
      {/*========================== MID COLUMN - START ========================== */}
      <div className="midCol-quiz">
        <p>{isOn ? currentWord.english : currentWord.hiragana}</p>
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
              /*   onKeyDown={handleKeyDown} */
              placeholder="Réponse en romaji"
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
          <p>Lecture (Réponses en romajis): </p>
          <div className="filterQuizCat" id="filterQuizHiraKata">
            {allQuizs
              .filter((quiz) => quiz.type === "lecture")
              .map((quiz) => (
                <button
                  className={quiz.selected ? "" : "fliterQuizButtonSelected"}
                  onClick={() => handleToggleSelectedKanas(quiz.name)}
                >
                  {quiz.name.charAt(0).toUpperCase() + quiz.name.slice(1)}
                </button>
              ))}
          </div>
          <p>Vocabulaire (Réponses en romajis) : </p>
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
