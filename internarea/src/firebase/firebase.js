// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBx7nuU4Zl72oZfez1ZG1l4igS91rRKE_s",
    authDomain: "internshala-clone1.firebaseapp.com",
    projectId: "internshala-clone1",
    storageBucket: "internshala-clone1.firebasestorage.app",
    messagingSenderId: "577519074440",
    appId: "1:577519074440:web:fbf4186bb3b2c37c1ef33d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
export default app;