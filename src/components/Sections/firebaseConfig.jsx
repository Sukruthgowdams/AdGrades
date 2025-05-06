// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBvaLgcbnA3IQmvFTDMP5uynfT_YivXF88",
  authDomain: "adgrades-267a4.firebaseapp.com",
  databaseURL: "https://adgrades-267a4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "adgrades-267a4",
  storageBucket: "adgrades-267a4.firebasestorage.app",
  messagingSenderId: "377230900759",
  appId: "1:377230900759:web:c907b0c86021a53fae6652",
  measurementId: "G-XXPWJBT4BD"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push };
