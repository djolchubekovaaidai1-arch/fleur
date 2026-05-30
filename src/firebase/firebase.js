import { initializeApp } from 'firebase/app'

import {
  getAuth,
  GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBEenWcQtNFT8nSygsBFcrzsbwxQl6-pHs',
  authDomain: 'fleur-972b2.firebaseapp.com',
  projectId: 'fleur-972b2',
  storageBucket: 'fleur-972b2.firebasestorage.app',
  messagingSenderId: '787020233766',
  appId: '1:787020233766:web:eabdca9e983b6f2eb0fae7',
  measurementId: 'G-69MZCPB7LC'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const provider =
  new GoogleAuthProvider()

export default app