function main (p, q, x, y) {
    let matrix = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], 
    [1, 1, 0, 1, 1, 0, 1, 1, 0, 1 ], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
    ];
    let solution = {};
    let visited = {};
    visited[`${p}-${q}`] = true;
    solve(p, q, x, y, matrix, solution, 1, visited);
    if (solution.longestPath) {
        console.log('YES');
        console.log(`Longest path is: ${solution.longestPath}`);
    } else {
        console.log('NO');
    }
}
let xMoves = [0, 1, -1, 0];
let yMoves = [1, 0, 0, -1];

function solve (p, q, x, y, matrix, solution, pathLength, visited) {
    if (p===x && q===y) {
        if (solution.longestPath) {
            if (pathLength>solution.longestPath) {
                solution.longestPath = pathLength;
            }
        } else {
            solution["longestPath"] = pathLength;
        }
        return true;
    }
    for (let i=0; i<xMoves.length; i++) {
        if (isValid(p+xMoves[i], q+yMoves[i], matrix, visited)) {
            let temp = `${p+xMoves[i]}-${q+yMoves[i]}`;
            let tempObj = {};
            tempObj[temp] = true;
            solve(p+xMoves[i], q+yMoves[i], x, y, matrix, solution, pathLength+1, 
                {...visited, ...tempObj});
        }
    }
    return false;
}

function isValid (i, j, matrix, visited) {
    return (i>=0 && j>=0 && i<matrix.length && j<matrix[0].length && matrix[i][j]!==0 && !visited[`${i}-${j}`]);
}

main(0, 0, 1, 7);