function main () {
    let mySet = [3, 4, 5, -3, 100, 1, 89, 54, 23, 20];
    let solution = {};
    let solutionMin = {};
    solve(mySet, solution, solutionMin, 0);
    console.log(solutionMin.oneSide? "YES" : "NO");
    if (solutionMin.oneSide) {
        console.log(solutionMin["oneSide"], solutionMin["otherSide"]);
    }
}

function solve(mySet, solution, solutionMin, index) {
    if(index===mySet.length && checkIfComplete(solution, 2)) {
        if((solutionMin.minDiff===undefined) || (solutionMin.minDiff && solutionMin.minDiff>Math.abs(solution[0].reduce((accumulator, curr)=> (accumulator = accumulator+curr), 0) - solution[1].reduce((accumulator, curr)=> (accumulator = accumulator+curr), 0)))) {
            solutionMin["minDiff"] = Math.abs(solution[0].reduce((accumulator, curr)=> (accumulator = accumulator+curr), 0) - solution[1].reduce((accumulator, curr)=> (accumulator = accumulator+curr), 0));
            solutionMin["oneSide"] = solution[0];
            solutionMin["otherSide"] = solution[1];
        }
        return true;
    } else if (index===mySet.length && !checkIfComplete(solution, 2)) {
        return false;
    }
    for (let i=0; i<2; i++) {
        if(index<mySet.length) {
            if (!solution[i]) {
                solution[i] = [];
            }
            solution[i].push(mySet[index]);
            solve(mySet, makeCopy(solution), solutionMin, index+1)
            solution[i].pop();
        }
    }
    return false;
}

function makeCopy (solution) {
    let array1 = [...solution[0]];
    let array2 = solution[1]? [...solution[1]] : [];
    return {0: array1, 1: array2}; 
}

function checkIfComplete (input, totalKeys) {
    let keys = Object.keys(input);
    if (keys.length !== totalKeys) {
        return false;
    }
    for (let el of keys) {
        if (input[el].length===0) {
            return false;
        }
    }
    if (Math.abs(input[0].length-input[1].length)>1) {
        return false;
    }

    return true;
}

main ();