function main () {
    let grid = [
    [ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
    [ 1,  0,  1,  1,  1,  1,  1,  1,  1,  1 ],
    [ 1,  1,  1,  0,  1,  1,  1,  1,  1,  1 ],
    [ 1,  1,  1,  1,  0,  1,  1,  1,  1,  1 ],
    [ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
    [ 1,  1,  1,  1,  1,  0,  1,  1,  1,  1 ],
    [ 1,  0,  1,  1,  1,  1,  1,  1,  0,  1 ],
    [ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
    [ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
    [ 0,  1,  1,  1,  1,  0,  1,  1,  1,  1 ],
    [ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
    [ 1,  1,  1,  0,  1,  1,  1,  1,  1,  1 ]
    ];
    let solution = {
    }
    for (let i=0; i<grid.length; i++) {
        if (ifValid(i, 0, grid)) {
            solve(i, 0, grid, solution, 0);
        }
    }
    console.log(solution.shortestPath? 'YES': 'NO');
    if (solution.shortestPath) {
        console.log(`Shortest length is: ${solution.shortestPath}`);
    }
}

let xMoves = [0, 1, -1, 0];
let yMoves = [1, 0, 0, -1];

function solve (currentRow, currentColumn, grid, solution, pathLength) {
    console.log(currentRow, currentColumn, pathLength);
    if (currentColumn===grid[0].length-1) {
        if (solution["shortestPath"]) {
            if(solution["shortestPath"] > pathLength) {
                solution["shortestPath"] = pathLength; 
            }
        } else {
            solution["shortestPath"] = pathLength;
        }
        return true;
    }
    for (let i=0; i<xMoves.length; i++) {
        if (ifValid(currentRow+xMoves[i], currentColumn+yMoves[i], grid)) {
            if (solve(currentRow+xMoves[i], currentColumn+yMoves[i], grid, solution, pathLength+1)) {
                return true;
            }
        }
    }
    return false;
}

function ifValid (i, j , grid) {
    return !(i<0 || j<0 || i>=grid.length || j>=grid[0].length || isInMineVicinity(i, j , grid))
}

function isInMineVicinity (i, j , grid) {
    if(grid[i][j]===0) {
        return true;
    } else if (i-1>=0 && grid[i-1][j]===0) {
        return true;
    } else if (j-1>=0 && grid[i][j-1]===0) {
        return true;
    } else if (i+1<grid.length && grid[i+1][j]===0) {
        return true;
    } else if (j+1<grid[0].length && grid[i][j+1]===0) {
        return true;
    }
    return false;
}


main ();