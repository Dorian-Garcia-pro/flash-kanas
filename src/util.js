import {
  collection,
  addDoc,
  setDoc,
  doc,
  deleteDoc,
  where,
  query,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import db from "./firebase";

export const handleNew = async () => {
  const name = prompt("Color name?");
  const value = prompt("Color value?");
  const collectionRef = collection(db, "colors");
  const payload = { name, value, time: serverTimestamp() };
  const docRef = await addDoc(collectionRef, payload);
};

export const handleEdit = async (id) => {
  const name = prompt("Color name?");
  const value = prompt("Color value?");
  const docref = doc(db, "colors", id);
  const payload = { name, value };
  updateDoc(docref, payload);
};

export const handleDelete = async (id) => {
  const docref = doc(db, "colors", id);
  await deleteDoc(docref);
};

export const handleQueryDelete = async () => {
  const userInputName = prompt("Color name query?");
  const collectionRef = collection(db, "colors");
  const q = query(collectionRef, where("name", "==", userInputName));
  const snapshot = await getDocs(q);
  const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  console.log(results);
  results.forEach(async (result) => {
    await deleteDoc(doc(db, "colors", result.id));
  });
};

export const handleQueryAdd = async () => {
  const listHiraganas = [
    { hiragana: "いぬ", romaji: "inu", english: "chien" },
    { hiragana: "ねこ", romaji: "neko", english: "chat" },
    { hiragana: "とり", romaji: "tori", english: "oiseau" },
    { hiragana: "さる", romaji: "saru", english: "singe" },
    { hiragana: "くま", romaji: "kuma", english: "ours" },
    { hiragana: "ぞう", romaji: "zou", english: "elephant" },
    { hiragana: "たこ", romaji: "tako", english: "octopus" },
    { hiragana: "さめ", romaji: "same", english: "requin" },
    { hiragana: "とら", romaji: "tora", english: "tigre" },
    { hiragana: "ひつじ", romaji: "hitsuji", english: "mouton" },
    { hiragana: "とんぼ", romaji: "tonbo", english: "libellule" },
    { hiragana: "さかな", romaji: "sakana", english: "poisson" },
    { hiragana: "へび", romaji: "hebi", english: "serpent" },
    { hiragana: "たぬき", romaji: "tanuki", english: "raton laveur" },
    { hiragana: "たいらいし", romaji: "tairaisi", english: "hippocampe" },
    { hiragana: "うさぎ", romaji: "usagi", english: "lapin" },
    { hiragana: "かめ", romaji: "kame", english: "tortue" },
    { hiragana: "あざらし", romaji: "azarashi", english: "phoque" },
    { hiragana: "かえる", romaji: "kaeru", english: "grenouille" },
  ];
  const collectionRef = collection(db, "quizs/animaux/childrens");

  listHiraganas.forEach(async (kana) => {
    await addDoc(collectionRef, kana);
  });
};
