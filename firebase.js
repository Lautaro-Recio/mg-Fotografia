import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_APIKEY,
    authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_RENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth()
auth.useDeviceLanguage()
export const googleProvider = new GoogleAuthProvider()



