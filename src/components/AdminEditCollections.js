import React from "react";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import "../pages/Admin.scss";
import db from "../firebase";
import "firebase/compat/firestore";
import { handleEdit, handleDelete, handleQueryAdd } from "../util";
function AdminEditCollections() {
  const [inputArray, setInputArray] = useState([
    {
      romaji: "",
      hiragana: "",
      english: "",
    },
  ]);
  const [addNewWord, setAddNewWord] = useState([
    {
      romaji: "",
      hiragana: "",
      english: "",
    },
  ]);
  const [collectionsList, setCollectionsList] = useState();
  const [selectedCollection, setSelectedCollection] = useState(
    "/quizs/adjectifs/childrens"
  );
  const [selectedCollectionShort, setSelectedCollectionShort] =
    useState("/quizs/adjectifs");

  useEffect(() => {
    const base = "quizs";
    onSnapshot(collection(db, base), (snapshot) => {
      setCollectionsList(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, base }))
      );
    });
  }, []);

  useEffect(() => {
    const base = selectedCollection;
    onSnapshot(collection(db, base), (snapshot) => {
      setInputArray(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          base,
          /*     time: doc.time, */
        }))
      );
    });
  }, [selectedCollection]);

  const handleChangeOptions = (e) => {
    setSelectedCollection(e + "/childrens");
    setSelectedCollectionShort(e);
    console.log(collectionsList); // liste des collections
    console.log(selectedCollection);
    console.log(inputArray); //liste des mots
  };

  const handleCellValueChange = (index, field, value) => {
    const updatedData = [...addNewWord];
    updatedData[index][field] = value;
    setAddNewWord(updatedData);
    console.log(addNewWord);
  };

  return (
    <div id="adminContainer" className="adminContainerEdit">
      <div className="colAdmin left">
        <div className="dropdown-menu">
          <select onChange={(event) => handleChangeOptions(event.target.value)}>
            <option value="exemple" disabled>
              Select an option
            </option>
            {collectionsList?.map((base, index) => (
              <option key={index} value={base.name}>
                {base.id}
              </option>
            ))}
          </select>
        </div>
        <button className="button" onClick={() => handleEdit(inputArray)}>
          Valider modifs
        </button>
      </div>

      <div className="colAdmin right">
        <div id="containerInputsNewWordTableAdmin">
          <div id="containerInputsNewWord">
            <input
              type="text"
              onChange={(e) =>
                handleCellValueChange(0, "hiragana", e.target.value)
              }
            />
            <input
              type="text"
              onChange={(e) =>
                handleCellValueChange(0, "romaji", e.target.value)
              }
            />
            <input
              type="text"
              onChange={(e) =>
                handleCellValueChange(0, "english", e.target.value)
              }
            />
            <button
              onClick={() =>
                handleQueryAdd(selectedCollectionShort, addNewWord)
              }
            >
              Add
            </button>
            {/*     <button onClick={() => handleDelete(item.id, item.base)}>X</button> */}
          </div>

          {inputArray ? (
            <table id="tableAdmin">
              {/*             <thead>
              <tr>
                <th>Hiragana</th>
                <th>Romaji</th>
                <th>English</th>
              </tr>
            </thead> */}
              <tbody>
                {inputArray
                  ?.sort((a, b) => b.time - a.time)
                  .map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          value={item.hiragana}
                          onChange={(e) =>
                            handleCellValueChange(
                              index,
                              "hiragana",
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={item.romaji}
                          onChange={(e) =>
                            handleCellValueChange(
                              index,
                              "romaji",
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={item.english}
                          onChange={(e) =>
                            handleCellValueChange(
                              index,
                              "english",
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(item.id, item.base)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AdminEditCollections;
