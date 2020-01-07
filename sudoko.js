function main () {
    let grid = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],  
    [5, 2, 0, 0, 0, 0, 0, 0, 0],  
    [0, 8, 7, 0, 0, 0, 0, 3, 1],  
    [0, 0, 3, 0, 1, 0, 0, 8, 0],  
    [9, 0, 0, 8, 6, 3, 0, 0, 5],  
    [0, 5, 0, 0, 9, 0, 6, 0, 0],  
    [1, 3, 0, 0, 0, 0, 2, 5, 0],  
    [0, 0, 0, 0, 0, 0, 0, 7, 4],  
    [0, 0, 5, 2, 0, 6, 3, 0, 0]
    ];

    let isSuccess = solve(grid);

    console.log(isSuccess? "YES" : "NO");
    if (isSuccess) {
        for (let i=0; i<grid.length; i++) {
            console.log(grid[i].join(' '));
        }
    }
}


function solve(grid) {
    // for (let i=0; i<grid.length; i++) {
    //     console.log(grid[i].join(' '));
    // }
    let solvedStatus = checkIfSolved(grid);
    // console.log(solvedStatus);
    // console.log('\n');
    if (solvedStatus.status) {
        return true;
    } else {
        for (let i=1; i<=9; i++) {
                    if (isValidEntry(i, solvedStatus.i, solvedStatus.j, grid)) {
                        grid[solvedStatus.i][solvedStatus.j] = i;
                        if (!solve(grid)) {
                            grid[solvedStatus.i][solvedStatus.j] = 0;
                        } else {
                            return true;
                        }
                    }
        }
        return false;
    }
}

function checkIfSolved (grid) {
    let status = true;
    let p = -1;
    let q = -1;
    for (let i=0; i<grid.length; i++) {
        if (grid[i].includes(0)) {
            status = false;
            p = i;
            q = grid[i].indexOf(0);
            break;
        }
        if (!status) {
            break;
        }
    }
    return {status, i: p, j: q};
}


let boxTypeIdentifier = {
    0: 1,
    1: 1,
    2: 1,
    3: 2,
    4: 2,
    5: 2,
    6: 3,
    7: 3,
    8: 3
}
let boxTypeToArray = {
    1: [0,1,2],
    2: [3,4,5],
    3: [6,7,8]
}



function isValidEntry(entry, i, j, grid) {
    if (i<0 || j<0 || i>=grid.length|| j>=grid.length|| grid[i][j]!==0) {
        return false;
    } else {
        //row check
        if (grid[i].includes(entry)) {
            return false;
        }
        //column check
        for (let p=0;p<grid.length;p++) {
            if (grid[p][j]===entry) {
                return false;
            }
        }
        //box check
        let xArray = boxTypeToArray[boxTypeIdentifier[i]];
        let yArray = boxTypeToArray[boxTypeIdentifier[j]];
        for (let p=0; p<xArray.length; p++) {
            for (let q=0; q<yArray.length; q++) {
                if (grid[xArray[p]][yArray[q]]===entry) {
                    return false;
                }
            }
        }
        
    }

    return true;

}

main();