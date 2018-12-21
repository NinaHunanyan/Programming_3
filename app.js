var express = require('express');
var app = express();
var fs = require("fs");
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("./public"));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3001);

var Grass = require("./Modules/class.grass");
var GrassEater = require("./Modules/class.eatgrass");
var Gishatich = require("./Modules/class.gishatich");
var Mard = require("./Modules/class.mard");
var Vampir = require("./Modules/class.vampir");

Grass.born = 0;
Grass.dead = 0;
Grass.current = 0;
GrassEater.born = 0;
GrassEater.dead = 0;
GrassEater.current = 0;
Gishatich.born = 0;
Gishatich.dead = 0;
Gishatich.current = 0;
Mard.born = 0;
Mard.dead = 0;
Mard.current = 0;
Vampir.born = 0;
Vampir.dead = 0;
Vampir.current = 0;

var matrix = require("./Modules/matrix");
console.log(matrix);

io.on('connection', function (socket) {
    socket.emit("first matrix", matrix);

    setInterval(function(){
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[0].length; x++) {
                if (matrix[y][x].index == 1) {
                    matrix[y][x].mul(matrix);
                }
                else if (matrix[y][x].index == 2) {
                    matrix[y][x].eat(matrix);
                }
                else if (matrix[y][x].index == 3) {
                    matrix[y][x].eat(matrix);
                }
                else if (matrix[y][x].index == 4) {
                    matrix[y][x].eat(matrix);
                }
                else if (matrix[y][x].index == 5) {
                    matrix[y][x].eat(matrix);
                }
            }
        }
        
        socket.emit("redraw", matrix);
    }, time);

    setInterval(function(){
        ctt = {
            "Grass": {
                "born": Grass.born,
                "dead": Grass.dead,
                "current": Grass.corrent
            },
            "GrassEater": {
                "born": GrassEater.born,
                "dead": GrassEater.dead,
                "current" : GrassEater.current
            },
            "Gishatich": {
                "born": Gishatich.born,
                "dead": Gishatich.dead,
                "current" : Gishatich.current
            },
            "Mard": {
                "born": Mard.born,
                "dead": Mard.dead,
                "current" : Mard.corrent
            },
            "Vampir" : {
                "born": Vampir.born,
                "dead": Vampir.dead,
                "current" : Vampir.corrent
            }
        };
        
        var myJson = JSON.stringify(ctt);
        fs.writeFileSync("statistic.json", myJson);
        socket.emit("stats" , ctt);
        
    }, 1000);
    
});



var ctt = {
   "Grass": {
       "born": 0,
       "dead": 0,
       "current": 0
   },
   "GrassEater": {
       "born": 0,
       "dead": 0,
       "current" : 0
   },
   "Mard": {
       "born": 0,
       "dead": 0,
       "current" : 0
   },
   "Vampir" : {
       "born": 0,
       "dead": 0,
       "current" : 0
   }
};

 

 
var time = frameRate(2);

function frameRate(frameCount)
{
    return 1000 / frameCount;
}





