import React from "react";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import db from "../firebase";
import {
  handleDelete,
  handleEdit,
  handleNew,
  handleQueryDelete,
  handleQueryAdd,
} from "../util";

const Dot = ({ color }) => {
  const style = {
    height: 25,
    width: 25,
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block",
    margin: "0 10px",
  };
  return <span style={style}></span>;
};

function Admin() {
  const [colors, setColors] = useState([{ name: "Loading...", id: "initial" }]);
  const [kanas, setKanas] = useState([{ name: "Loading...", id: "initial" }]);
  const [hiraganas, setHiraganas] = useState([
    { name: "Loading...", id: "initial" },
  ]);
  const [katakanas, setKatananas] = useState([
    { name: "Loading...", id: "initial" },
  ]);
  const [animaux, setAnimaux] = useState([
    { name: "Loading...", id: "initial" },
  ]);

  useEffect(() => {
    onSnapshot(collection(db, "colors"), (snapshot) => {
      setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);
  useEffect(() => {
    onSnapshot(collection(db, "kanas/katakanas/childrens"), (snapshot) => {
      setHiraganas(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    onSnapshot(collection(db, "kanas/hiraganas/childrens"), (snapshot) => {
      setKatananas(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);
  useEffect(() => {
    onSnapshot(collection(db, "quizs/animaux/childrens"), (snapshot) => {
      setAnimaux(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div>
      {/*       <button className="button" onClick={handleNew}>
        New
      </button> */}
      <button className="button" onClick={() => handleQueryAdd()}>
        add kanas
      </button>

      <ul>
        {animaux
          .sort((a, b) => a.nb - b.nb) // Sort the array by the 'time' property in descending order
          .map((kana) => (
            <li key={kana.id}>{kana.hiragana}</li>
          ))}
      </ul>
    </div>
  );
}

export default Admin;
