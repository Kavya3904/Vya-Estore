import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  writeBatch,
  collection,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi76QboyB17Wg3aTCucW2eWyO3D5rCCAU",
  authDomain: "vyastore-e7260.firebaseapp.com",
  projectId: "vyastore-e7260",
  storageBucket: "vyastore-e7260.firebasestorage.app",
  messagingSenderId: "500019216509",
  appId: "1:500019216509:web:0ec824cdbf4e3649c23114",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
console.log(provider);

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const userDocumentFirebasedb = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const snapshot = await getDoc(userDocRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error : ", error.message);
    }
  }
  return userDocRef;
};

export const addcollectiontodb = async (collectionKey, Objecttoadd) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  Objecttoadd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCollectionfromdb = async () => {
  const collectionRef = collection(db, "catogries");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const catogrymap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return catogrymap;
};

export const signupEmailAuth = async (email, pass) => {
  if (!email || !pass) return;

  return await createUserWithEmailAndPassword(auth, email, pass);
};

export const signinEmailAuth = async (email, pass) => {
  if (!email || !pass) return;

  return await signInWithEmailAndPassword(auth, email, pass);
};

export const userSignOut = async () => await signOut(auth);

export const onAuthUserStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);
