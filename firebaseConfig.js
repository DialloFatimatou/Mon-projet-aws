// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//initialisation et enregistrement voir https://firebase.google.com/docs/firestore/quickstart#web-version-8_2
const firebaseConfig = {
  apiKey: 'AIzaSyAMK6y8jOqpueCPoXkADOZNkerPu-0YLL8',
  authDomain: 'exerciceaws.firebaseapp.com',
  projectId: 'exerciceaws',
  storageBucket: 'exerciceaws.appspot.com',
  messagingSenderId: '406410380562',
  appId: '1:406410380562:web:c0f66e5fa4c4df88375fcb',
  measurementId: 'G-Y6PB0XVEWN',
};

// Initialize Firebase
firebase.initializeApp (firebaseConfig);
const db = firebase.firestore ();



