import firebase from "firebase/app";
import 'firebase/auth'

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: "admin-template-6eca9.appspot.com",
        messagingSenderId: "834009003061",
        appId: "1:834009003061:web:e6c37fd97599e3cbdf2d7c"
    })
}

export default firebase