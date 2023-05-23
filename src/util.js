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
  const collectionRef = collection(db, base);

  input.forEach(async (kana) => {
    await addDoc(collectionRef, kana);
  });
};
