import firebase from 'firebase/app'
// import 'firebase/database';
// import 'firebase/storage';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_HOOK_DEMO_API_KEY,
  authDomain: process.env.REACT_APP_HOOK_DEMO_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_HOOK_DEMO_DATABASE_URL,
  projectId: process.env.REACT_APP_HOOK_DEMO_PROJECT_ID,
  storageBucket: process.env.REACT_APP_HOOK_DEMO_STORAGE_BUCKET,
  messagingSenderId: process.env.RREACT_APP_HOOK_DEMO_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_HOOK_DEMO_APP_ID,
  measurementId: process.env.REACT_APP_HOOK_DEMO_MEASUREMENT_ID
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()

const fireauth = firebase.auth()
const firestore = firebase.firestore()
export { fireauth, firestore }
