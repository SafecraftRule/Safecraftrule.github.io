// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {createUserWithEmailAndPassword, getAuth} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzlPAwOZ_qnrEBrfA4-zAKe-SuWWXHu4I",
  authDomain: "safecraftrule-f4add.firebaseapp.com",
  projectId: "safecraftrule-f4add",
  storageBucket: "safecraftrule-f4add.firebasestorage.app",
  messagingSenderId: "1049235443546",
  appId: "1:1049235443546:web:c16de3021f7bb4df016d63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login-Funktion
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Erfolgreich eingeloggt
            window.location.href = "index.html"; // Weiterleitung zur Hauptseite
        })
        .catch((error) => {
            console.error("Fehler beim Login:", error.message);
        });
});