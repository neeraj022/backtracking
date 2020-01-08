function main (row, column) {
    let grid = [];
    let counter = 1;
    for (let i=0; i<row; i++) {
        let temp = [];
        for (let j=0; j<column; j++) {
            temp.push(counter);
            counter++;
        }
        grid.push(temp);
    }
    solve(0, 0, grid, [grid[0][0]]);
}

let xMoves = [0, 1];
let yMoves = [1, 0];

function solve (i, j, grid, solution) {
    if (i===grid.length-1 && j===grid[0].length-1) {
        console.log(solution.join(' '));
        return true;
    } 
    for (let p=0; p<xMoves.length; p++) {
        if (isValid(i+xMoves[p], j+yMoves[p], grid)) {
            solution.push(grid[i+xMoves[p]][j+yMoves[p]]);
            solve(i+xMoves[p], j+yMoves[p], grid, [...solution]);
            solution.pop();
        }
    }
    return false;

}

function isValid(i, j, grid) {
    return (i>=0 && j>=0 && i<grid.length && j<grid[0].length);
}

main (3, 3);