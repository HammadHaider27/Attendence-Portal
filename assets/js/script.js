import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { doc, setDoc, getDoc, getFirestore, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAqPqxWhK8ShP33-QxwCrOR-2Nq8FWvdJY",
    authDomain: "hackathon-3bd89.firebaseapp.com",
    projectId: "hackathon-3bd89",
    storageBucket: "hackathon-3bd89.appspot.com",
    messagingSenderId: "279187745842",
    appId: "1:279187745842:web:7893c1a37b73ab541ee02b",
    measurementId: "G-FPQB7ZJQHM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const database = getDatabase();

// Login
let login_btn = document.getElementById("login_btn");
login_btn.addEventListener("click", () => {
  console.log("login run");
   event.preventDefault();

  let login_email = document.getElementById("login_email");
  let login_password = document.getElementById("login_password");

  signInWithEmailAndPassword(auth, login_email.value, login_password.value)
    .then((userCredential) => {
      // Signed in 
      console.log("userCredential", userCredential)
      alert("Successfully Login");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error=>", error)
    });
})

// add course
let add_course_button = document.getElementById("add_course_button");
add_course_button.addEventListener('click', async () => {
  event.preventDefault();

  let course_name = document.getElementById("course_name");

  try {
    await setDoc(doc(db, "courses"), {
      course_name: course_name.value,
    });
  } catch (error) {
    console.log("add_course_button error=>", error)

  }
})

// add class
let add_class_button = document.getElementById("add_class_button");
add_class_button.addEventListener('click', async () => {
  event.preventDefault();

  let class_name = document.getElementById("class_name");
  let class_timing = document.getElementById("class_timing");
  let timing = document.getElementById("timing");
  let teachername = document.getElementById("teachername");
  let section = document.getElementById("section");
  let course = document.getElementById("course");


  try {
    await setDoc(doc(db, "courses"), {
      course_name: class_name.value,
      class_timing: class_timing.value,
      timing: timing.value,
      teachername: teachername.value,
      section: section.value,
      course: course.value,
    });
  } catch (error) {
    console.log("add_course_button error=>", error)

  }
})

// add student
let add_student_button = document.getElementById("add_student_button");
add_student_button.addEventListener('click', async () => {
  event.preventDefault();

  let student_name = document.getElementById("name");
  let fathername = document.getElementById("fathername");
  let rollnum = document.getElementById("rollnum");
  let phone = document.getElementById("phone");
  let cnic = document.getElementById('cnic')
  let course = document.getElementById('course')
  let gender = document.getElementById('gender');

  const student_pic = document.getElementById("file");
  const imageSrc = await changingImageToURL(student_pic.files[0],user.uid);

  try {
    await setDoc(doc(db, "courses"), {
      name: student_name.value,
      student_image: imageSrc,
      fathername: fathername.value,
      rollnum: rollnum.value,
      phone: phone.value,
      cnic: cnic.value,
      course: course.value,
      gender: gender.value
    });
  } catch (error) {
    console.log("add_course_button error=>", error)

  }
})

// Image uploader
const changingImageToURL = (file) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `images/${file?.name}.png`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            break;
          case 'storage/canceled':
            break;
          case 'storage/unknown':
            break;
        }
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         resolve(downloadURL)
        });
      }
    );
  })
}