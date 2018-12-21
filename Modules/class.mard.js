var LivingCreature = require("./livingcreature");

module.exports = class Mard extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index)

        this.energy = 50;
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
            [this.x - 2, this.y - 1]
        ];
    }

    chooseCell(num) {
        this.getNewCoordinates();
        return super.chooseCell(num);
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
                this.die();
            }
            this.acted = true;
        }

    }
    eat(matrix) {
        if (this.acted == false) {
            var newCell = random_items(this.chooseCell(random([2, 3]), matrix));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.energy += 3;
                if (this.energy >= 80) {
                    this.mul();
                    this.energy = 50;
                }

                this.acted = true;
            }
            else {
                this.move();
            }
        }
    }
    mul(matrix) {

        var newCell = random_items(this.chooseCell(0, matrix));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Mard(newX, newY, 4);

        }

    }
    die(matrix) {

        matrix[this.y][this.x] = 0;

    }
}
function random_items(items) {
    return items[Math.floor(Math.random() * items.length)];
}