import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  doc,
  deleteDoc,
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

export const handleEdit = async (input) => {
  input.forEach(async (e) => {
    console.log(e);
    const docref = doc(db, e.base, e.id);
    const payload = {
      english: e.english,
      hiragana: e.hiragana,
      romaji: e.romaji,
    };
    await updateDoc(docref, payload);
  });
};

export const handleToggleSelectQuiz = async (input) => {
  console.log(input);
  const docref = doc(db, input.base, input.id);
  const payload = {
    selected: !input.selected,
  };
  await updateDoc(docref, payload);
};

export const handleDelete = async (id, base) => {
  const docref = doc(db, base, id);
  await deleteDoc(docref);
};

export const handleQueryAdd = async (base, input) => {
  const collectionRef = doc(db, base);
  await setDoc(collectionRef, { name: base, selected: false });

  const dovRef = collection(db, base + "/childrens");

  input.forEach(async (kana) => {
    const payload = {
      english: kana.english,
      romaji: kana.romaji,
      hiragana: kana.hiragana,
      time: serverTimestamp(),
    };

    await addDoc(dovRef, payload);
    console.log(kana);
  });
};
export const handleEmptyCollection = async (base) => {
  const collectionRef = collection(db, base);

  try {
    // Fetch and delete each document in the collection
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach(async (documentSnapshot) => {
      await deleteDoc(documentSnapshot.ref);
    });

    console.log("Collection emptied successfully.");
  } catch (error) {
    console.error("Error emptying collection:", error);
  }
};
