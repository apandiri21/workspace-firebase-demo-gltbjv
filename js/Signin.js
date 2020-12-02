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
$("#Login").submit(function(e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(success => {
      // Signed in
      // ...
      console.log("login in");
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
