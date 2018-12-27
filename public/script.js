var socket;
var matrix = [];
var stat;
var side = 10;
var tact;
function setup() {
    frameRate(0);

    //ashxatatnel socket
    //stanal "first matrix" emit-y
    //veragrel serveri matritsaji arjeqy script-i matrixin
    //nkarel game of life-i arajin kadry
    //console.log(matrix); // ktesnes ardyunqy inspect patuhanun
    socket = io();
    
    socket.on('first matrix', function (mtx) {
        matrix = mtx;
        console.log(matrix);
        createCanvas(matrix[0].length * side, matrix.length * side);
        background('#acacac');

        socket.on("redraw", function (mtx) {
            matrix = mtx;
            redraw();
        });
        socket.on("stats", function (ctt) {
            stat = ctt;
        });
        socket.on("tact", function (tct) {
            tact = tct;
        });
    });
    noLoop();
}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {

            if (matrix[y][x].index == 1) {
                if(tact <= 20) {
                    fill("green");
                    rect(x * side, y * side, side, side);
                    matrix[y][x].acted = false;
                }
                else if(tact <= 40 && tact > 20) {
                    fill("#02AEFE");
                    rect(x * side, y * side, side, side);
                    matrix[y][x].acted = false;
                }
            }
            else if (matrix[y][x].index == 2) {
                fill("#ffff00");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 3) {
                fill("#FF0000");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 4) {
                if(tact <= 20) {
                    fill("SandyBrown");
                    rect(x * side, y * side, side, side);
                    matrix[y][x].acted = false;
                }
                else if(tact <= 40 && tact > 20) {
                    fill("#914808");
                    rect(x * side, y * side, side, side);
                    matrix[y][x].acted = false;
                }
            }
            else if (matrix[y][x].index == 5) {
                fill("DarkRed");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
        }
    }
  
}


