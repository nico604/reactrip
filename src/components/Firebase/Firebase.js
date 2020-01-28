import * as firebase  from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDTwQFnKkAUtk5lJh1D5RSTzSHBmAPwwHU",
  authDomain: "disquecollection.firebaseapp.com",
  databaseURL: "https://disquecollection.firebaseio.com",
  projectId: "disquecollection",
  storageBucket: "disquecollection.appspot.com",
  messagingSenderId: "129599902804",
  appId: "1:129599902804:web:87b214a7c4170f1880c9c1",
  measurementId: "G-X3TDZ0GZKE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
