import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider } from  "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDJl7Io3zc0jvks2IdrdGfZtu3JiyKFdYc",
    authDomain: "disneyplus-clone-14568.firebaseapp.com",
    projectId: "disneyplus-clone-14568",
    storageBucket: "disneyplus-clone-14568.appspot.com",
    messagingSenderId: "980077974663",
    appId: "1:980077974663:web:d58ec44dd8be5b70ee9422",
    measurementId: "G-WNCXV4MZ1P"
  };

  
  const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(app);
  const db = getFirestore(app);
export{ auth,provider,storage};

export default  db;
