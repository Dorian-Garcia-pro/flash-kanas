import React from "react";
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  getFirestore,
  doc,
  getDocs,
} from "@firebase/firestore";
import "../pages/Admin.scss";
import db from "../firebase";
import "firebase/compat/firestore";
import { handleQueryAdd } from "../util";
function AdminEditCollections() {
  const [inputArray, setInputArray] = useState([
    {
      romaji: "",
      hiragana: "",
      english: "",
    },
  ]);
  const [collectionsList, setCollectionsList] = useState();
  const [selectedCollection, setSelectedCollection] = useState(
    "/quizs/animaux/childrens"
  );
  const [selectedCollectionList, setSelectedCollectionList] = useState();

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
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, base }))
      );
    });
  }, [selectedCollection]);

  const handleChangeOptions = (e) => {
    setSelectedCollection(e + "/childrens");
    console.log(collectionsList); // liste des collections
    console.log(selectedCollection);
    console.log(selectedCollectionList); //liste des mots
  };

  const handleCellValueChange = (index, field, value) => {
    const updatedData = [...inputArray];
    updatedData[index][field] = value;
    setInputArray(updatedData);
    console.log(inputArray);
  };

  return (
    <div id="adminContainer">
      <div className="colAdmin left">
        {/*         <button
          className="button"
          onClick={() => handleQueryAdd(inputArrayBase, inputArray)}
        >
          add kanas
        </button> */}
        <div className="dropdown-menu">
          {/*      <p>{selectedCollection.id}</p> */}
          <select onChange={(event) => handleChangeOptions(event.target.value)}>
            <option value="exemple" defaultChecked disabled>
              Select an option
            </option>
            {collectionsList?.map((base, index) => (
              <option key={index} value={base.name}>
                {base.id}
              </option>
            ))}
          </select>
        </div>
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

export default AdminEditCollections;