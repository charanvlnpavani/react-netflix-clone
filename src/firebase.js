import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useId } from "react";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBhRivAoz9hzze1gBQ6hvSkg1AAGuUv-g4",
  authDomain: "neflix-clone-68860.firebaseapp.com",
  projectId: "neflix-clone-68860",
  storageBucket: "neflix-clone-68860.firebasestorage.app",
  messagingSenderId: "660689920449",
  appId: "1:660689920449:web:ad7ed2c37385b08d17cf40",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  }
  catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};


const logout = () =>{
    signOut(auth)
}

export {auth, db, login, signup, logout};