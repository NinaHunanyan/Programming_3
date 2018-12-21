var LivingCreature = require("./livingcreature");

module.exports = class Vampir extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index)

        this.energy = 16;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y - 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y - 3],
            [this.x - 1, this.y + 3],
            [this.x, this.y - 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y - 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x + 3, this.y + 3],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2]
        ];
    }

    chooseCell(num, matrix) {
        this.getNewCoordinates();
        return super.chooseCell(num, matrix);
    }
    move(matrix) {
        if (this.acted == false) {
            var newCell = random_items(this.chooseCell(0, matrix));

            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
            }
            this.energy -= 2;
            if (this.energy <= 0) {
                this.die(matrix);
            }
            this.acted = true;
        }
        else this.acted = false;
    }
    eat(matrix) {
        if (this.acted == false) {
            var newCell = random_items(this.chooseCell(4, matrix));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                console.log("Darav mard");
                matrix[newY][newX] = new Vampir(newX, newY, 5);
                matrix[newY][newX].dieCounter();
            }
            else {
                newCell = random_items(this.chooseCell(random_items([3, 2]), matrix));
                if (newCell) {
                    var newX = newCell[0];
                    var newY = newCell[1];
                    if(matrix[newY][newX] == 2){
                        matrix[newY][newX].dieCounter();
                    }
                    else if(matrix[newY][newX] == 3){
                        matrix[newY][newX].dieCounter();
                    }

                    matrix[newY][newX] = matrix[this.y][this.x];
                    matrix[this.y][this.x] = 0;
                    this.x = newX;
                    this.y = newY;
                    this.energy += 3;
                    if (this.energy >= 100) {
                        this.mul(matrix);
                        this.energy = 16;
                    }

                    this.acted = true;
                }
                else {
                    this.move(matrix);
                }
            }
        }
        else this.acted = false;
    }
    mul(matrix) {

        var newCell = random_items(this.chooseCell(0, matrix));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Vampir(newX, newY, 5);
            Vampir.born++;
            Vampir.current++;

        }
        else this.acted = false;
    }
    die(matrix) {
        matrix[this.y][this.x] = 0;
        this.dieCounter();
    }
    dieCounter(){
        Vampir.dead++;
        Vampir.current--;
    }
}
function random_items(items) {
    return items[Math.floor(Math.random() * items.length)];
}