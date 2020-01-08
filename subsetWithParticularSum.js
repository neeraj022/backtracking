function main (sum) {
    let mySet = [10, 7, 5, 18, 12, 20, 15];
    let solution = [];
    let isSuccess = solve(mySet, sum, solution);
    console.log(isSuccess? 'YES' : 'NO');
    if(isSuccess) console.log(solution);
}

function solve(mySet, sum, solution) {
    if (isSetComplete(solution, sum)) {
        return true;
    } else {
        for (let i=0;i<mySet.length; i++) {
            if(isValidInsert(mySet[i], solution)) {
                solution.push(mySet[i]);
                if(solve(mySet, sum, solution)) {
                    return true;
                } else {
                    solution.pop();
                }
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