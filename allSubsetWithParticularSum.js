function main (sum) {
    let mySet = [10, 7, 5, 18, 12, 20, 15];
    let solution = [];
    solve(mySet, sum, solution);
}

function solve(mySet, sum, solution) {
    if (isSetComplete(solution, sum)) {
        console.log(solution);
        return true;
    } else {
        for (let i=0;i<mySet.length; i++) {
            if(isValidInsert(mySet[i], solution)) {
                solve(mySet, sum, [...solution, mySet[i]]);
            }
        }
        return false;
    }
}

function isValidInsert (num, solution) {
    return !solution.includes(num);
}

function isSetComplete(solution, sum) {
    return (solution.reduce((acc, curr)=> acc+curr, 0) === sum) ;
}

main (35);