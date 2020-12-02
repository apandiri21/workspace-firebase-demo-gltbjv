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

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
