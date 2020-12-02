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
/* object examples 
var testJson = {};
testJson["lastname"] = "zhang";
testJson["location"] = "aiken";
console.log(testJson);
*/

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    //console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson);
  /* save the data to database */
  firebase
    .firestore()
    .collection("hoteldata") // use different name
    .add(inputJson);

  /* clear the entry */
  $("form")[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection("hoteldata")
  .onSnapshot(function(querySnapshot) {
    //console.log(querySnapshot);
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      //  var roomtype= doc.data().room;
      //   if (roomtype =="1 Bedroom Smaller Suite $169"){
      //     do sth
      //   console.log("This roomtype");
      //  }
    });
  });
