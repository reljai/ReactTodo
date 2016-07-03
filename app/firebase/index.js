import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDUWW5-u19Q5fF8RwDOm_mAwASEY0xLFqw",
        authDomain: "reljaitodoapp.firebaseapp.com",
        databaseURL: "https://reljaitodoapp.firebaseio.com",
        storageBucket: "reljaitodoapp.appspot.com",
    };
    firebase.initializeApp(config);
} catch (e) {
    
}

export var firebaseRef = firebase.database().ref();
export default firebase;