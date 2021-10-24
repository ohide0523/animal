import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import {
  getAuth,
  signInWithPopup,signInWithRedirect,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLTWmcFtqUiJFEvWqfMLG5i2j2ic9WZAg",
  authDomain: "animal-1a100.firebaseapp.com",
  projectId: "animal-1a100",
  storageBucket: "animal-1a100.appspot.com",
  messagingSenderId: "62785613591",
  appId: "1:62785613591:web:c1d76e9903faf3c5db1152",
  measurementId: "G-PCJKP6F4ZK",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = getAuth()

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = ()=>{signInWithPopup(auth, googleProvider)
.then(()=>{
    console.log("ログインしました。");
})
.catch(()=>{
    console.log("ログイン失敗です。。")
})
}

export const signInRedirect=()=>{
    signInWithRedirect(auth,googleProvider)
}

export const logOut = ()=>{
    signOut(auth).then(()=>{
        console.log("ログアウトしました。。")
    })
    .catch((error)=>{
        alert("エラーが発生しました。。",error)
    })
}
