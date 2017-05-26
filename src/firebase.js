import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB5iBc8vZKeRnYdQ4lcCKIoPCHtHG3IxH0",
    authDomain: "goalcoach-e1ee1.firebaseapp.com",
    databaseURL: "https://goalcoach-e1ee1.firebaseio.com",
    projectId: "goalcoach-e1ee1",
    storageBucket: "goalcoach-e1ee1.appspot.com",
    messagingSenderId: "56764152679"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoals');
