const Room = require('../src/room');
const assert = require('assert');

describe('Room', function () {
    it('should validate in-bound coordinates', function () {
        const room = new Room(5, 5);
        assert.strictEqual(room.isWithinBounds(2, 3), true);
    });

    it('should detect out-of-bound coordinates', function () {
        const room = new Room(5, 5);
        assert.strictEqual(room.isWithinBounds(5, 5), false);
    });
});
