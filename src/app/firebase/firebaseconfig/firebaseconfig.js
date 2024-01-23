// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const ConfigurationDB = () =>{
    const firebaseConfig = {
        apiKey: "AIzaSyB5dqniGqJ46tafGeoHmpAkUD1XtRSH1mQ",
        authDomain: "newz-50ae6.firebaseapp.com",
        projectId: "newz-50ae6",
        storageBucket: "newz-50ae6.appspot.com",
        messagingSenderId: "839009054216",
        appId: "1:839009054216:web:703718165016af82a16bbd",
        measurementId: "G-LR13Y1B2ED"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      return getDatabase(app)
}

export default ConfigurationDB

