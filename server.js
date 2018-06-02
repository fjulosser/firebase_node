var express = require('express');
var app = express();
var bodyParser = require('body-parser');
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

 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use(express.static('public'));
 
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
 



app.post('/process_post', urlencodedParser, function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.body.first_name,
       "last_name":req.body.last_name
   };
   var refall = db.ref("users/"+response.first_name+"/phone");
   refall.on('value', function(snapshot) {
    console.log("目前所有使用者：",snapshot.exists());
   var a=snapshot.exists();
   console.log("目前外面的a：",a);
   if(a==true){
    res.end(JSON.stringify(response));
    console.log("a=true",a);
   }else{
    res.end(JSON.stringify("not exist"));
    console.log("a=false",a);
   }
  
  });
   console.log(response);
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})