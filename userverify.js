// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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


document.addEventListener("DOMContentLoaded", () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            if(!window.location.href.match("index.html")){
                console.log("dawdawd")
                window.location.href = "index.html"; // Nutzer ist eingeloggt
            }
        } else {
            if(!window.location.href.match("login.html")){
                console.log("dawdawd");
                
                window.location.href = "login.html"; 
            } // Nutzer ist nicht eingeloggt
        }
    });
});
