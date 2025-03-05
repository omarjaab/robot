const commands = {
    'L': (robot) => robot.turnLeft(),
    'R': (robot) => robot.turnRight(),
    'F': (robot) => robot.moveForward()
};

module.exports = commands;
