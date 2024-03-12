const firebaseConfig = {
  apiKey: "AIzaSyBpoO3yKEZTc0ATpthuHO-BdhxpKwOoBM0",
  authDomain: "chaty-4f749.firebaseapp.com",
  databaseURL: "https://chaty-4f749-default-rtdb.firebaseio.com",
  projectId: "chaty-4f749",
  storageBucket: "chaty-4f749.appspot.com",
  messagingSenderId: "644233214896",
  appId: "1:644233214896:web:3798e4f644326c0734f475",
  measurementId: "G-RYQTV8LSB3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
