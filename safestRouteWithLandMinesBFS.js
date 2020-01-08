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
        let solutionGrid = [];
        for (let i=0; i<grid.length; i++) {
            let temp = []
            for (let j=0; j<grid[i].length; j++) {
                temp.push(-1);
            }
            solutionGrid.push(temp);
        }
        solve (grid, solutionGrid);
        let minPathLength = grid.length * grid[0].length + 1;
        for (let i=0; i<solutionGrid.length; i++) {
            if (solutionGrid[i][solutionGrid[0].length-1]!==-1 && solutionGrid[i][solutionGrid[0].length-1]<minPathLength) {
                minPathLength = solutionGrid[i][solutionGrid[0].length-1];
            }
        }
        console.log(minPathLength === (grid.length * grid[0].length + 1)? 'NO' : 'YES');
        if (!(minPathLength === (grid.length * grid[0].length + 1))) {
            console.log(`Shortest Path is: ${minPathLength}`);
        }
}

let xMoves = [0, 1, -1, 0];
let yMoves = [1, 0, 0, -1];

function solve (grid, solutionGrid) {
    let toBeConsidered = [];
    for (let i=0; i<grid.length; i++) {
        if (ifValid(i, 0, grid)) {
            toBeConsidered.push({i, j: 0});
            solutionGrid[i][0] = 0;
        }
    }
    while(toBeConsidered.length) {
        let currentElement = toBeConsidered.shift();
        for (let i=0; i<xMoves.length; i++) {
            if (ifValid(currentElement.i + xMoves[i], currentElement.j + yMoves[i], grid) && solutionGrid[currentElement.i + xMoves[i]][currentElement.j + yMoves[i]] === -1) {
                
                toBeConsidered.push({i: currentElement.i + xMoves[i], j:currentElement.j + yMoves[i]});
                
                solutionGrid[currentElement.i + xMoves[i]][currentElement.j + yMoves[i]] = solutionGrid[currentElement.i][currentElement.j]+1;
            }
        }
    }
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

main();