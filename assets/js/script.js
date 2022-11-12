import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { doc, setDoc, getDoc, getFirestore, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyArIJ5K49kSBWbkTCjYmHO1BHSlefqr76U",
  authDomain: "practice-ce932.firebaseapp.com",
  databaseURL: "https://practice-ce932-default-rtdb.firebaseio.com",
  projectId: "practice-ce932",
  storageBucket: "practice-ce932.appspot.com",
  messagingSenderId: "940873466796",
  appId: "1:940873466796:web:03299d72276396c1ac3009",
  measurementId: "G-1CR3SXDNQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const database = getDatabase();

// Login

let login_btn = document.getElementById("login_btn");

login_btn.addEventListener("click", () => {

  event.preventDefault();

  let login_email = document.getElementById("login_email");
  let login_password = document.getElementById("login_password");

  signInWithEmailAndPassword(auth, login_email.value, login_password.value)
    .then(async (userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user=>", user)

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {

        let bioData = document.getElementById("bioData");
        console.log("Document data:", docSnap.data());

        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
        });

        bioData.innerHTML = querySnapshot();

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      alert("Successfully Registered");
      window.location.href = "profile.html";

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error=>", error)
    });


})