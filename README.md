# robot
This project implements a simple robot navigation system in a bounded room. The robot can move forward and turn left or right based on input commands. The program ensures the robot stays within the defined boundaries.
 # Robot Assignment Backend


## Installation & Running

### Install Dependencies
```sh
npm install
```

### Run the Program
```sh
node index.js
```

### Edit and Run Tests
Modify `input.txt` if necessary to test different cases.
To run automated tests:
```sh
npm test
```

## Input Format
The program reads input from `input.txt`.

```
5 5   # Room size (width x height)
1 2 N # Initial position (x y direction)
RFRFFRFRF # Movement commands
```

## Expected Output
```
Report: 1 3 N
```

## Features
- Modular structure
- Proper error handling
- Unit tests using Jest
- Easy to extend for new commands

## Created by Omar Jaab
