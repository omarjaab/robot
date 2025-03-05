const fs = require('fs');
const Room = require('./src/room');
const Robot = require('./src/robot');
const commands = require('./src/commands');

// Read input from a file
const input = fs.readFileSync('input.txt', 'utf8').split('\n');

const [roomWidth, roomHeight] = input[0].split(' ').map(Number);
const [startX, startY, startDir] = input[1].split(' ');
const commandString = input[2].trim();

const room = new Room(roomWidth, roomHeight);
const robot = new Robot(parseInt(startX), parseInt(startY), startDir, room);

robot.executeCommands(commandString);
console.log(`Report: ${robot.report()}`);
