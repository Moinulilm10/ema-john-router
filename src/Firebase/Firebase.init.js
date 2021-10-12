import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initializAuthentication;