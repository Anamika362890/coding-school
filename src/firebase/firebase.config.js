// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgVKZg3PhH8H6QbESqYTf6VTalzAs9Mfw",
    authDomain: "coding-school-client.firebaseapp.com",
    projectId: "coding-school-client",
    storageBucket: "coding-school-client.appspot.com",
    messagingSenderId: "875648076703",
    appId: "1:875648076703:web:6d886a078de8fd8b4f0baa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;