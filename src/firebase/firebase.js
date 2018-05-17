import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCJQNXIN48qPfTnqZ7xcnT8gYUyJADt0V8',
  authDomain: 'react-blog-42896.firebaseapp.com',
  databaseURL: 'https://react-blog-42896.firebaseio.com',
  projectId: 'react-blog-42896',
  storageBucket: 'react-blog-42896.appspot.com',
  messagingSenderId: '633457477108',
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };
