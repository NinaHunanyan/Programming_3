var express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("./public"));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);

var grass = require("./Modules/class.grass");
var eatgrass = require("./Modules/class.eatgrass");
var gishatich = require("./Modules/class.gishatich");
var mard = require("./Modules/class.mard");
var vampir = require("./Modules/class.vampir");

var matrix = require("./Modules/matrix");
console.log(matrix); // ktesnes ardyunqy terminalum

io.on('connection', function (socket) {
    socket.emit("first matrix", matrix);
 });
 
var time = frameRate(2);

function frameRate(frameCount)
{
    return 1000 / frameCount;
}

function draw(){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x].index == 1) {
                matrix[y][x].mul(matrix);
            }
            else if (matrix[y][x].index == 2) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 3) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 4) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 5) {
                matrix[y][x].eat();
            }
        }
    }
}

setInterval(draw, time);