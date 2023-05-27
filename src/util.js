import {
  collection,
  addDoc,
  setDoc,
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

export const handleDelete = async (id, base) => {
  const docref = doc(db, base, id);
  await deleteDoc(docref);
};

/* export const handleQueryDelete = async () => {
  const userInputName = prompt("Color name query?");
  const collectionRef = collection(db, "colors");
  const q = query(collectionRef, where("name", "==", userInputName));
  const snapshot = await getDocs(q);
  const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  console.log(results);
  results.forEach(async (result) => {
    await deleteDoc(doc(db, "colors", result.id));
  });
}; */

export const handleQueryAdd = async (base, input) => {
  const collectionRef = doc(db, base);
  await setDoc(collectionRef, { name: base });

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

  /*   const docRef = collection(db, base);
  input.forEach(async (kana) => {
    await addDoc(docRef, kana);
  }); */
};
/* export const handleQueryAdd = async (base, input) => {
  const collectionRef = collection(db, base);

  input.forEach(async (kana) => {
    await addDoc(collectionRef, kana);
  });
}; */
