import React from "react";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import "../pages/Admin.scss";
import db from "../firebase";
import { handleQueryAdd } from "../util";
import "firebase/compat/firestore";

function AdminAddCollections() {
  const [inputArray, setInputArray] = useState([
    {
      romaji: "",
      hiragana: "",
      english: "",
    },
  ]);
  const [createBaseField, setCreateBaseField] = useState(false);
  const [errorInput, setErrorInput] = useState(false);
  const [inputArrayBase, setInputArrayBase] = useState("/quizs/exemple");

  /*   useEffect(() => {
    const base = "quizs/animaux/childrens";
    onSnapshot(collection(db, base), (snapshot) => {
      setAnimaux(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, base }))
      );
    });
  }, []); */

  const handleInputJson = (event) => {
    try {
      const parsedJson = JSON.parse(event.target.value);
      setInputArray(parsedJson);
      setErrorInput(false);
    } catch (error) {
      setInputArray([]);
      setErrorInput(true);
    }
  };

  const handleChangeOptions = (e) => {
    if (e !== "create") {
      setInputArrayBase(e);
      setCreateBaseField(false);
    } else {
      setCreateBaseField(true);
    }
  };

  const [collectionsList, setCollectionsList] = useState();

  const handleCellValueChange = (index, field, value) => {
    const updatedData = [...inputArray];
    updatedData[index][field] = value;
    setInputArray(updatedData);
    console.log(inputArray);
  };

  useEffect(() => {
    const base = "quizs";
    onSnapshot(collection(db, base), (snapshot) => {
      setCollectionsList(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, base }))
      );
    });
  }, []);

  return (
    <div id="adminMenuAddCollection">
      <div className="colAdmin left">
        <button
          className="button"
          onClick={() => handleQueryAdd(inputArrayBase, inputArray)}
        >
          add kanas
        </button>
        <div className="dropdown-menu">
          <select onChange={(event) => handleChangeOptions(event.target.value)}>
            <option value="exemple" defaultChecked>
              Select an option
            </option>
            {collectionsList?.map((base, index) => (
              <option key={index} value={base.name}>
                {base.id}
              </option>
            ))}
            <option value="create">New quiz</option>
          </select>
        </div>
        {createBaseField ? (
          <textarea
            placeholder={"Nom de la base a créér"}
            onChange={(event) =>
              setInputArrayBase("/quizs/" + event.target.value)
            }
          ></textarea>
        ) : null}

        <p>{inputArrayBase}</p>
        <textarea
          id="jsonInput"
          placeholder={"Insérer un JSON"}
          onChange={(event) => handleInputJson(event)}
        ></textarea>
        {errorInput ? <p>JSON invalide</p> : null}
      </div>

      <div className="colAdmin right">
        {inputArray ? (
          <table>
            <thead>
              <tr>
                <th>Hiragana</th>
                <th>Romaji</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              {inputArray?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={item.hiragana}
                      onChange={(e) =>
                        handleCellValueChange(index, "hiragana", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.romaji}
                      onChange={(e) =>
                        handleCellValueChange(index, "romaji", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.english}
                      onChange={(e) =>
                        handleCellValueChange(index, "english", e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}

export default AdminAddCollections;
