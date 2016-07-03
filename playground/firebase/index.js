import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDUWW5-u19Q5fF8RwDOm_mAwASEY0xLFqw",
    authDomain: "reljaitodoapp.firebaseapp.com",
    databaseURL: "https://reljaitodoapp.firebaseio.com",
    storageBucket: "reljaitodoapp.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '0.1',
    },
    isRunning: true,
    user: {
        name: 'relja',
        age: 42,
    }, 
});

// firebaseRef.update({
//     'app/name': 'Todo Application',
//     'user/name': 'Mina',
// });

// firebaseRef.child('app').update({
//     name: 'Todo Application',
// });

// firebaseRef.child('user').update({
//     name: 'Mina',
// });

//firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//     version: '0.2',
//     name: null,
// });

// firebaseRef.update({
//     isRunning: null,
// });

// firebaseRef.child('user/name').remove();

// firebaseRef.child('app').once('value').then((snapshot) => {
//     console.log('got DB', snapshot.key, snapshot.val());
// }, (e) => {
//     console.log('failed to get value', e);
// });

// var logData = (snapshot) => {
//     console.log('got value', snapshot.val());
// };

// firebaseRef.on('value', logData);

// firebaseRef.off(logData);

// firebaseRef.update({isRunning: false});

// firebaseRef.child('user').on('value', (snapshot) => {
//     console.log('DB value', snapshot.val());
// });

// firebaseRef.child('user').update({name: 'Mina'});

// var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
// });

// // var newNoteRef = notesRef.push().set({
// //     text: 'walk Niko',
// // });
// // equivalent to
// var newNoteRef = notesRef.push({
//     text: 'walk Niko',
// });

// console.log('new note ref key', newNoteRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('todo added', snapshot.key, snapshot.val()); 
});

todosRef.on('child_removed', (snapshot) => {
    console.log('todo removed', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
    console.log('todo updated', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'walk Niko',
});

todosRef.push({
    text: 'feed Niko',
});