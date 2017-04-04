var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;

var dbins; 
    
MongoClient.connect("mongodb://annadivreddy:Vinod999@ds123400.mlab.com:23400/sampledb", function (err, db) {
    
    if(err){
        console.log('error while connecting to mongo db:::'+err);
    }else{
        dbins = db;
        console.log('we are connected:::::');
    }
});    

//var db = mongoose.connect(' ');

//console.log(db);

var Project = require('./models/projectModel');
var User = require('./models/userModel');

var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var projectfyRouter = express.Router();



projectfyRouter.route('/users').get(function(req,res){
    
    console.log('call from angular:::'+req.body);
    
     var coll = dbins.collection('users', function(err, collection) {});
        coll.find().toArray(function(err, items) {
           // res.items;
            res.json(items);
            //console.log('items'+JSON.stringify(items));
        });
});



projectfyRouter.route('/create').post(function(req,res){
    
    var coll  = dbins.collection('users', function(err, collection) {});
    var document = {firstname:req.body.fname, lastname:req.body.lname, email:req.body.email, username:req.body.username, password:req.body.password};
    coll.insert(document, {w: 1}, function(err, data){
  if(err){
      res.send("There was a problem adding the information to the database.");
  }else{
      res.send("Thankyou for signing up "+req.body.fname);
  }
});
    
    /* var coll = dbins.collection('users', function(err, collection) {});
        coll.insert().toArray(function(err, items) {
            res.json(items);*/
            
        });

projectfyRouter.route('/delete').post(function(req,res){
    
   // console.log(req.body.username);
    var coll  = dbins.collection('users', function(err, collection) {});
    var document ={username:req.body.username,password:req.body.password};
    coll.remove(document,{w:1}, function(err, data){
              if(err){
                    res.send("Invalid username or password");
                }else{
                    res.send("Your account has been successfully deleted");
  }  
                
                });
});

projectfyRouter.route('/edit').post(function(req,res){
    
    //console.log(req.body.username);
    
    
    var coll  = dbins.collection('users', function(err, collection) {});
    var document ={username:req.body.username,password:req.body.password};
    coll.find(document).toArray(function(err, items){
    console.log("items "+JSON.stringify(items));
       // res.send(JSON.stringify(items));
        res.json(items);
    });
    
});

projectfyRouter.route('/update').post(function(req,res){
    
    var coll  = dbins.collection('users', function(err, collection) {});
    var document = {firstname:req.body.fname, lastname:req.body.lname, email:req.body.email, _id:req.body._id};
   // console.log("in app.js "+req.body.fname+ req.body.lname+req.body.email+req.body._id);
   
 coll.update({_id:req.body._id}, {$set:{firstname:req.body.fname, lastname:req.body.lname, email:req.body.email}}, {w:1}, function(err, result) {
     
 });
    
    /* var coll = dbins.collection('users', function(err, collection) {});
        coll.insert().toArray(function(err, items) {
            res.json(items);*/
            
        });






app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use('/api',projectfyRouter);


app.get('/', function(req,res){
   
   console.log("sendiing html for the path /");
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(err){
    console.log("running server on from gulp port:::::::"+port);
});
/*var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    bodyParser = require('body-parser');

//var db = mongoose.connect('');

//console.log(db);

var Project = require('./models/projectModel');
var User = require('./models/userModel');

var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var projectfyRouter = express.Router();

projectfyRouter.route('/users').get(function(req,res){
    
    User.find(function(err,users){
       if(err){
           res.status(500).send(err);
       }else{
          res.json(users);
       } 
    });
})

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://annadivreddy:Vinod999@ds123400.mlab.com:23400/sampledb", function (err, db) {
   
     if(err){ console.log("error is"+err)}else{
    console.log( "we are connected");
     var col = db.collection('collection1',function(err, collection){});
         col.find().toArray(function(err, items){
             for(var i =0; i<items.length;i++){
                 console.log(items[i]);
             }
         })
     }

     //Write databse Insert/Update/Query code here..
                
});
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use('/api',projectfyRouter);


app.get('/', function(req,res){
   
   console.log("sendiing html for the path /");
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(err){
    console.log("running server on from gulp port:::::::"+port);
});
  */  