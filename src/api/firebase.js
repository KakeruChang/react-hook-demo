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

export const fireauth = firebase.auth()
export const firestore = firebase.firestore()

export const signup = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('signup success')
    })
    .catch(error => {
      console.log('signup fail')
      console.log(error)
    })
}

export const addData = (info, data) => {
  firestore
    .collection('users')
    .add({
      info,
      id: info.email,
      ...data
    })
    .then(() => {
      console.log('add data success')
    })
    .catch(error => {
      console.log('add data fail')
      console.log(error)
    })
}

export const findUser = email => {
  const ref = firestore.collection('users')
  // Create a query against the collection.
  const query = ref.where('id', '==', email)

  return query
    .get()
    .then(querySnapshot => {
      if (querySnapshot.docs.length > 0) {
        const result = []
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, ' => ', doc.data())
          result.push(doc.data())
        })
        return result
      }
      return []
    })
    .catch(error => {
      return error
    })
}
