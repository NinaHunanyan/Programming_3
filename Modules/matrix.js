var kerpar1Qanak = 400;
var kerpar2Qanak = 100;
var kerpar3Qanak = 50;
var kerpar4Qanak = 50;
var kerpar5Qanak = 5;

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

var Grass = require("./class.grass");
var GrassEater = require("./class.eatgrass");
var Gishatich = require("./class.gishatich");
var Mard = require("./class.mard");
var Vampir = require("./class.vampir");

var matrix = [];
var m = 80;
var n = 80;

for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
       matrix[y][x] = 0;//random([0, 1, 2, 3, 4, 5]);
    }
}

var a = 0;

while (a < kerpar1Qanak) {
    var x = Math.floor(random(matrix[0].length));
    var y = Math.floor(random(matrix.length));

    if (matrix[y][x] == 0) {
        matrix[y][x] = new Grass(x, y, 1);
        Grass.born++;
        Grass.current++;
        a++;
    }
}

var b = 0;

while (b < kerpar2Qanak) {
    var x = Math.floor(random(matrix[0].length));
    var y = Math.floor(random(matrix.length));

    if (matrix[y][x] == 0) {
        matrix[y][x] = new GrassEater(x, y, 2);
        GrassEater.born++;
        GrassEater.current++;
        b++;
    }
}

var c = 0;

while (c < kerpar3Qanak) {
    var x = Math.floor(random(matrix[0].length));
    var y = Math.floor(random(matrix.length));

    if (matrix[y][x] == 0) {
        matrix[y][x] = new Gishatich(x, y, 3);
        Gishatich.born++;
        Gishatich.current++;
        c++;
    }
}

var f = 0;

while (f < kerpar4Qanak) {
    var x = Math.floor(random(matrix[0].length));
    var y = Math.floor(random(matrix.length));

    if (matrix[y][x] == 0) {
        matrix[y][x] = new Mard(x, y, 4);
        Mard.born++;
        Mard.current++;
        f++;
    }
}

var q = 0;

while (q < kerpar5Qanak) {
    var x = Math.floor(random(matrix[0].length));
    var y = Math.floor(random(matrix.length));

    if (matrix[y][x] == 0) {
        matrix[y][x] = new Vampir(x, y, 5);
        Vampir.born++;
        Vampir.current++;
        q++;
    }
}

function random(tiv) // tiv = 7; [0, 7] -> 3
{
    var min = 0
    var max = tiv
    var index = Math.floor(Math.random() * (min + max -1) + min);
    return index; // stextzel random functsian
}

module.exports = matrix;


