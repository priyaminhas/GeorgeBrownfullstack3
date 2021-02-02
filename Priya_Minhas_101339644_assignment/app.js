var express  = require('express');
var mongoose = require('mongoose');
const path = require('path');

//import mongoose models
var socketEvent = require('./models/SocketEvent');
var downloadEvent = require('./models/DownloadEvent');
//App setup
var app     = new express();
var server  = app.listen(3000,function(){
    console.log('Listening to port 3000');
});

//mongoose connection 
const connectionString = "mongodb://localhost:27017/musicDb";
//const connectionString = "";
mongoose.connect(connectionString)
.then(() => {console.log("Mongoose connected successfully!!");},
error => {console.log("Mongoose could not be connected to database:"+error);
});

app.use(express.static(path.join(__dirname, 'public')))

var io      = require('socket.io')(server);



app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/filterMusic', function(req, res) {
  const queryStr = req.query;
  console.log(queryStr)
  const data = musicFactory.filterMusic(queryStr.genre, queryStr.band, queryStr.title, queryStr.albulm)
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
})

io.on('connection',function (socket) {
    console.log('connection made');
    socket.emit('connect');
    socket.on('connection',()=>{
        console.log("SOCKET - connection accepted");
    })
    socket.on('disconnect',()=>{
        console.log("SOCKET - Disconnected");
    })
    socket.on('download',function(id){
        console.log("SOCKET- Received client message to download music id: "+id);
        
        socket.emit('download-received',id);
    })
  })

  