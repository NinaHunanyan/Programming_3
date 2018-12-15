kerpar1Qanak = 400;
kerpar2Qanak = 100;
kerpar3Qanak = 50;
kerpar4Qanak = 50;
kerpar5Qanak = 5;

var Grass = require("./grass");
var GrassEater = require("./eatgrass");
var Gishatich = require("./gishatich");
var Mard = require("./mard");
var Vampir = require("./vampir");

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