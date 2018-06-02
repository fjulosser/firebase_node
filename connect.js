var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyDI1knumoFX7N1YFM9cqGZJysTIW9cElsg",
    authDomain: "easytoquit-d2c63.firebaseapp.com",
    databaseURL: "https://easytoquit-d2c63.firebaseio.com",
    projectId: "easytoquit-d2c63",
    storageBucket: "easytoquit-d2c63.appspot.com",
    messagingSenderId: "66220447106"
  };
  firebase.initializeApp(config);

  var db = firebase.database();
  
  ref = db.ref("/");
  userRef = db.ref('Test1');
  
//  ref = db.ref("/");
//  var value = {
//   Test1: "t1",
//   Test2: "t2"
//  }
  
//  ref.set(value);
  
//  var ref = db.ref("/");
//  ref.once('value') .then( function(snapshot) {
//   console.log(snapshot.val());
//  });

userRef.on('value', function(snapshot) {
    console.log("目前所有使用者：",snapshot.val());
  });