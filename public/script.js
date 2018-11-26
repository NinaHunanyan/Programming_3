
/*
var matrix = [
  [0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0]
];

var matrix = [];
var m = 10;
var n = 10;

var side = 50;
*/
kerpar1Qanak = 400;
kerpar2Qanak = 100;
kerpar3Qanak = 50;
kerpar4Qanak = 50;
kerpar5Qanak = 5;


var matrix = [];
var m = 80;
var n = 80;



// var matrix = [
//   [0, 0, 1, 0, 0],
//   [1, 0, 0, 0, 0],
//   [0, 1, 2, 0, 0],
//   [0, 0, 1, 0, 0],
//   [1, 1, 0, 0, 0],
//   [1, 1, 0, 0, 0],
//   [1, 1, 0, 0, 0]
// ];



var side = 10;

function setup() {
    frameRate(20);
    createCanvas(n * side, m * side);
    background('#acacac');

    /////////////lav ban
    // for (var y = 0; y < n; y++) {
    //   matrix[y] = [];
    //   for (var x = 0; x < m; x++) {
    //     matrix[y][x] = random([0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2]);
    //     if (matrix[y][x] == 1) {
    //       matrix[y][x] = new Grass(x, y, 1);
    //     }
    //     else if (matrix[y][x] == 2) {
    //       matrix[y][x] = new GrassEater(x, y, 2);
    //     }
    //   }
    // }
    
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            
           matrix[y][x] = 0;//random([0, 1, 2, 3, 4, 5]);

        }
    }
    // for (var y = 0; y < matrix.length; y++) {
    //     for (var x = 0; x < matrix[0].length; x++) {
    //         if (matrix[y][x] == 1) {
    //             matrix[y][x] = new Grass(x, y, 1);
    //         }
    //         else if (matrix[y][x] == 2) {
    //             matrix[y][x] = new GrassEater(x, y, 2);
    //         }
    //         else if (matrix[y][x] == 3) {
    //             matrix[y][x] = new Gishatich(x, y, 3);
    //         }
    //         else if (matrix[y][x] == 4) {
    //             matrix[y][x] = new Mard(x, y, 4);
    //         }
    //         else if (matrix[y][x] == 5) {
    //             matrix[y][x] = new Vampir(x, y, 5);
    //         }
    //     }
    // }
    // console.log(matrix);
  
    var a = 0;
    while (a < kerpar1Qanak) {
        var x = Math.floor(random(matrix[0].length));
        var y = Math.floor(random(matrix.length));

        if (matrix[y][x] == 0) {
            matrix[y][x] = new Grass(x, y, 1);
            a++;
        }
    }
    var b = 0;
    while (b < kerpar2Qanak) {
        var x = Math.floor(random(matrix[0].length));
        var y = Math.floor(random(matrix.length));

        if (matrix[y][x] == 0) {
            matrix[y][x] = new GrassEater(x, y, 2);
            b++;
        }
    }
    var c = 0;
    while (c < kerpar3Qanak) {
        var x = Math.floor(random(matrix[0].length));
        var y = Math.floor(random(matrix.length));

        if (matrix[y][x] == 0) {
            matrix[y][x] = new Gishatich(x, y, 3);
            c++;
        }
    }
    var f = 0;
    while (f < kerpar4Qanak) {
        var x = Math.floor(random(matrix[0].length));
        var y = Math.floor(random(matrix.length));

        if (matrix[y][x] == 0) {
            matrix[y][x] = new Mard(x, y, 4);
            f++;
        }
    }
    var q = 0;
    while (q < kerpar5Qanak) {
        var x = Math.floor(random(matrix[0].length));
        var y = Math.floor(random(matrix.length));

        if (matrix[y][x] == 0) {
            matrix[y][x] = new Vampir(x, y, 5);
            q++;
        }
    }
    
}

function draw() {


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x].index == 1) {
                matrix[y][x].mul();
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

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {

            if (matrix[y][x].index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
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
                fill("SandyBrown");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 5) {
                fill("DarkRed");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
        }
    }
}




