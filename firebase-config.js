import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBuYYn6V3jqUs47fnVfW1OlCywfyDX6ix0",
    authDomain: "gatepass-saas.firebaseapp.com",
    projectId: "gatepass-saas",
    storageBucket: "gatepass-saas.appspot.com",
    messagingSenderId: "788886920648",
    appId: "1:788886920648:web:acf750800bf8a5b0b4f4fd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
