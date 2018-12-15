var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

server.listen(3000);

var grass = require("./grass");
var eatgrass = require("./eatgrass");
var gishatich = require("./gishatich");
var mard = require("./mard");
var vampir = require("./vampir");

 
var time = frameRate(5);
function frameRate(frameCount)
{
    return 1000 / frameCount;
}
function draw(){
    for(var i in grass)
    {
        grass[i].mul();

    }
    socket.emit("update matrix", matrix.js);
    for(var i in eatgrass)
    {
        grass[i].mul();

    }
    socket.emit("update matrix", matrix.js);
    for(var i in gishatich)
    {
        grass[i].mul();

    }
    socket.emit("update matrix", matrix.js);
    for(var i in mard)
    {
        grass[i].mul();

    }
    socket.emit("update matrix", matrix.js);
    for(var i in vampir)
    {
        grass[i].mul();

    }
    socket.emit("update matrix", matrix.js);
}
setInterval(draw, time);


