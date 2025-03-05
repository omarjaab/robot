const Room = require('./room');

class Robot {
    constructor(x, y, direction, room) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.room = room;
        this.directions = ['N', 'E', 'S', 'W']; // Array representing directions
    }

    // Rotates the robot 90 degrees to the left
    turnLeft() {
        let index = this.directions.indexOf(this.direction);
        this.direction = this.directions[(index + 3) % 4];
    }

    // Rotates the robot 90 degrees to the right
    turnRight() {
        let index = this.directions.indexOf(this.direction);
        this.direction = this.directions[(index + 1) % 4];
    }

    // Moves the robot forward based on its current direction
    moveForward() {
        let newX = this.x;
        let newY = this.y;

        switch (this.direction) {
            case 'N': newY += 1; break;
            case 'E': newX += 1; break;
            case 'S': newY -= 1; break;
            case 'W': newX -= 1; break;
        }

        if (this.room.isWithinBounds(newX, newY)) {
            this.x = newX;
            this.y = newY;
        } else {
            throw new Error("Error: Robot moved out of bounds!");
        }
    }

    // Returns the final position and direction of the robot
    report() {
        return `${this.x} ${this.y} ${this.direction}`;
    }
}

module.exports = Robot;
