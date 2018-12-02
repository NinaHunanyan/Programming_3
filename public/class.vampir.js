class Vampir extends LivingCreature{
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

    chooseCell(num) {
        this.getNewCoordinates();
        return super.chooseCell(num);
    }
    move() {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(0));

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
    eat() {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(4));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                console.log("Darav mard");
                matrix[newY][newX] = new Vampir(newX, newY, 5);
            }
            else {
                newCell = random(this.chooseCell(random([3, 2])));
                if (newCell) {
                    var newX = newCell[0];
                    var newY = newCell[1];

                    matrix[newY][newX] = matrix[this.y][this.x];
                    matrix[this.y][this.x] = 0;
                    this.x = newX;
                    this.y = newY;
                    this.energy += 3;
                    if (this.energy >= 100) {
                        this.mul();
                        this.energy = 16;
                    }

                    this.acted = true;
                }
                else {
                    this.move();
                }
            }
        }
    }
    mul() {

        var newCell = random(this.chooseCell(0));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Vampir(newX, newY, 5);

        }

    }
    die() {

        matrix[this.y][this.x] = 0;

    }
}