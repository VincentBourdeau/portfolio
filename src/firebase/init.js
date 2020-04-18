import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const firebaseConfig = {
  apiKey: 'AIzaSyB78ph3uU9AAGMygKRgH6TZVaDH3ZbbBu0',
  authDomain: 'vincbour-11d98.firebaseapp.com',
  databaseURL: 'https://vincbour-11d98.firebaseio.com',
  projectId: 'vincbour-11d98',
  storageBucket: 'vincbour-11d98.appspot.com',
  messagingSenderId: '249837823933',
  appId: '1:249837823933:web:41bee0ccefb767145754d4',
  measurementId: 'G-9L8E9KW2D2'
};

firebase.initializeApp(firebaseConfig)
