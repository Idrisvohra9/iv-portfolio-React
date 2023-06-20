// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDeusLEyPvojd__fweFDXiEHgm89XbdMPw",
    authDomain: "project-data-761c2.firebaseapp.com",
    projectId: "project-data-761c2",
    storageBucket: "project-data-761c2.appspot.com",
    messagingSenderId: "460027200756",
    appId: "1:460027200756:web:7e6057af039ab944850aa1",
    measurementId: "G-QVCRGX16MQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);