const Robot = require('../src/robot');
const Room = require('../src/room');
const assert = require('assert');

describe('Robot', function () {
    let room;
    beforeEach(() => {
        room = new Room(5, 5);
    });

    it('should turn left correctly', function () {
        const robot = new Robot(2, 2, 'N', room);
        robot.turnLeft();
        assert.strictEqual(robot.direction, 'W');
    });

    it('should turn right correctly', function () {
        const robot = new Robot(2, 2, 'N', room);
        robot.turnRight();
        assert.strictEqual(robot.direction, 'E');
    });

    it('should move forward correctly', function () {
        const robot = new Robot(2, 2, 'N', room);
        robot.moveForward();
        assert.deepStrictEqual([robot.x, robot.y], [2, 3]);
    });

    it('should stop at boundaries', function () {
        const robot = new Robot(0, 0, 'S', room);
        expect(() => robot.moveForward()).toThrow("Error: Robot moved out of bounds!");
    });
    
});
