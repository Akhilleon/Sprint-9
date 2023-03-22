import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4UuQqKgh_Xal5kkhPoW-pssmygymdyvM",
  authDomain: "sprint-9-ceaef.firebaseapp.com",
  projectId: "sprint-9-ceaef",
  storageBucket: "sprint-9-ceaef.appspot.com",
  messagingSenderId: "163469176663",
  appId: "1:163469176663:web:216ec25c40dd6eafe29812"
};

initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
