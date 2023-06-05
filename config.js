import firebase from 'firebase';


var firebaseConfig = {
        apiKey: "AIzaSyBpVjo6JMr9Sk-hAjdVl_8mWoA46f0Z4F4",
        authDomain: "bfkarq.firebaseapp.com",
        databaseURL: "https://bfkarq-default-rtdb.firebaseio.com",
        projectId: "bfkarq",
        storageBucket: "bfkarq.appspot.com",
        messagingSenderId: "162414191977",
        appId: "1:162414191977:web:3dd3cc2b0768ffa7d009f8"
      };

 
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();