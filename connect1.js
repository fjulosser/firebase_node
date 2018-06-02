var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyCJ0hXFY9_xM-ueiW3UKiQv49XAefu9dXA",
    authDomain: "wedproject-d750d.firebaseapp.com",
    databaseURL: "https://wedproject-d750d.firebaseio.com",
    projectId: "wedproject-d750d",
    storageBucket: "wedproject-d750d.appspot.com",
    messagingSenderId: "911927278113"
  };
  firebase.initializeApp(config);

  var db = firebase.database();
  
 var ref = db.ref("/");

 var refall = db.ref("users/33/phone");

//  ref.once("value", function(snapshot) {
//   console.log(snapshot.val().users.phone);
//  });

 refall.on('value', function(snapshot) {
    console.log("目前所有使用者：",snapshot.exists());
  });
// refall.on('value', function(snapshot) {
//     snapshot.forEach(function(childSnapshot){
//         console.log(childSnapshot.key());
//     });
//   });
// var postsRef = firebase.database().ref('value').orderByChild("Q&A").startAt(12);
// console.log("取得使用者所有超過12歲的Post")

// postsRef.once('value'),then(function(snapshot) {
//     console.log("目前所有使用者：",snapshot.val());
//   });