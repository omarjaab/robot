class Room {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Checks if the given coordinates are within the room boundaries
    isWithinBounds(x, y) {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }
}

module.exports = Room;
