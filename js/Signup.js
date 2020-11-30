const firebaseConfig = {
  apiKey: "AIzaSyBxp6X1OSsbS_VRxIlZDXC3cLE1OffbKCE",
  authDomain: "grocerylist-6f38e.firebaseapp.com",
  databaseURL: "https://grocerylist-6f38e.firebaseio.com",
  projectId: "grocerylist-6f38e",
  storageBucket: "grocerylist-6f38e.appspot.com",
  messagingSenderId: "389435855205",
  appId: "1:389435855205:web:2667f96e169ad872cc918c",
  measurementId: "G-MTSB5QWTT1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// start ...
console.log("Start .... ");

// Sign up when user click the button
$("#signup-form").submit(function(e) {
  e.preventDefault();
  console.log("click the submit");

  // using the provided sign in
  // Your homework --- Read the email and password from the form
  var email = "adithyapandiri72@gmail.com";
  var psw = "Lexington";

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, psw)
    .then(user => {
      console.log("success");
    })
    .catch(error => {
      console.log(error.code);
      console.log(error.message);
    });
});
