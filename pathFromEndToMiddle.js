function main (i, j) {
    let maze = [
    [ 3, 5, 4, 4, 7, 3, 4, 6, 3 ],
    [ 6, 7, 5, 6, 6, 2, 6, 6, 2 ],
    [ 3, 3, 4, 3, 2, 5, 4, 7, 2 ],
    [ 6, 5, 5, 1, 2, 3, 6, 5, 6 ],
    [ 3, 3, 4, 3, 0, 1, 4, 3, 4 ],
    [ 3, 5, 4, 3, 2, 2, 3, 3, 5 ],
    [ 3, 5, 4, 3, 2, 6, 4, 4, 3 ],
    [ 3, 5, 1, 3, 7, 5, 3, 6, 4 ],
    [ 6, 2, 4, 3, 4, 5, 4, 5, 1 ]
    ];
    let solution = [];
    let visited = {};
    pushToSolution(i,j, solution, visited);
    let isSuccess = findWay (i, j, maze, solution, visited);
    console.log(isSuccess? "YES" : "NO");
    if (isSuccess) {
        let finalString = solution.reduce((sum , el) => sum + `(${el.x}, ${el.y}) --> `, '');
        console.log(finalString + 'DEST');
    }
}

let xMoves = [-1, 1, 0, 0];
let yMoves = [0, 0, -1, 1];


function findWay (i, j, maze, solution, visited) {
    if (i===(maze.length-1)/2 && j===(maze[0].length-1)/2) {
        return true;
    }

    //trying out north east south west
    for (let p=0; p<xMoves.length;p++) {
        let n = maze[i][j];
        if (isValidMove(i+n*xMoves[p], j+n*yMoves[p], maze, visited)) {
            pushToSolution(i+n*xMoves[p], j+n*yMoves[p], solution, visited);
            if(!findWay(i+n*xMoves[p], j+n*yMoves[p], maze, solution, visited)) {
                popFromSolution(i+n*xMoves[p], j+n*yMoves[p], solution, visited);
            } else {
                return true;
            }
        }
    }
    return false;
}

function pushToSolution (x, y, solution, visited) {
   solution.push({x,y}); 
   visited[`x-${x}-y-${y}`] = true;
}

function popFromSolution (x, y, solution, visited) {
    solution.pop();
    delete visited[`x-${x}-y-${y}`];
 }

 function checkIfVisited (x, y, visited) {
     return visited[`x-${x}-y-${y}`];
 }

function isValidMove (i, j, maze, visited) {
    if (i<0 || j<0 || i>=maze.length || j>=maze[0].length || checkIfVisited(i, j, visited)) {
        return false;
    }
    return true;
}


main (0, 0);