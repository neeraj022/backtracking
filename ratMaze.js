function main (initialX, initialY) {
    // let maze = [
    // [1, 0, 0, 1, 1, 0],
    // [1, 1, 1, 0, 1, 0],
    // [0, 0, 1, 1, 0],
    // [1, 0, 0, 1, 1]
    // ];

    let maze = [
        [1, 0, 1, 1, 1, 0],
        [1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 1, 1]
        ];

    let solution = [];
    for (let i=0;i<maze.length;i++) {
        let temp = []
        for (let j=0;j<maze[i].length;j++) {
            temp.push(0);
        }
        solution.push(temp);
    }
    solution[initialX][initialY] = 1;
    // let isSolved = solveMaze(0, 0, maze, solution);
    let isSolved = solveMazeComplex(initialX, initialY, -1, -1, maze, solution);
    console.log('MAZE IS: ');
    for (let i=0;i<maze.length;i++) {
        console.log(maze[i].join(' '));
       }
    console.log('\n');
    console.log(isSolved? 'YES' : 'NO');
    for (let i=0;i<solution.length;i++) {
        console.log(solution[i].join(' '));
       }
}
let xMoves = [1, 0];
let yMoves = [0, 1];


function solveMaze(x, y, maze, solution) {

    // for (let i=0;i<solution.length;i++) {
    //     console.log(solution[i].join(' '));
    // }
    // console.log('\n');

    if (x===maze.length-1 && y===(maze[maze.length-1].length)-1) {
        return true;
    }
    
    for (let i=0; i<xMoves.length;i++) {
        if (isValidMove(x+xMoves[i], y+yMoves[i], maze)) {
            solution[x+xMoves[i]][y+yMoves[i]] = 1;
            if (solveMaze(x+xMoves[i], y+yMoves[i], maze, solution)) {
                return true;
            } else {
                solution[x+xMoves[i]][y+yMoves[i]] = 0;
            }
        }
    }

    return false;
}

function isValidMove (x, y, maze) {
    return !(x<0 || y<0 || x>=maze.length || y>maze[x].length || maze[x][y]===0);
}


let xMovesComplex = [1, 0, -1, 0];
let yMovesComplex = [0, 1, 0, -1];

function solveMazeComplex (x, y, prevX, prevY, maze, solution) {
    // for (let i=0;i<solution.length;i++) {
    //     console.log(solution[i].join(' '));
    // }
    // console.log('\n');

    if (x===maze.length-1 && y===(maze[maze.length-1].length)-1) {
        return true;
    }
    
    for (let i=0; i<xMovesComplex.length;i++) {
        if (isValidMoveComplex(x+xMovesComplex[i], y+yMovesComplex[i], prevX, prevY, maze)) {
            solution[x+xMovesComplex[i]][y+yMovesComplex[i]] = 1;
            if (solveMazeComplex(x+xMovesComplex[i], y+yMovesComplex[i], x, y, maze, solution)) {
                return true;
            } else {
                solution[x+xMovesComplex[i]][y+yMovesComplex[i]] = 0;
            }
        }
    }

    return false;
}

function isValidMoveComplex (x, y, prevX, prevY, maze) {
    return !(x<0 || y<0 || x>=maze.length || y>maze[x].length || (x===prevX && y===prevY) || maze[x][y]===0);
}

main(0,0);