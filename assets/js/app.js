 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";

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
 const analytics = getAnalytics(app);

 