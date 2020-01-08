function main() {
    //let inputArr = [2, 1, 4, 5, 6];
    let inputArr = [2, 1, 4, 5, 3, 2, -1, -1,];
    let k = 3;
    let solution = {};
    let isSuccess = solve (k, inputArr, solution, 0);
    console.log(isSuccess? "YES" : "NO");
    if (isSuccess) {
        console.log(solution);
    }
}

function solve (k, inputArr, solution, index) {
    if (index===inputArr.length && isSumEqual(solution, k)) {
        return true;
    }
    for (let i=0; i<k; i++) {
        if (index<inputArr.length) {
            if (!solution[i]) {
                solution[i] = [];
            }
            solution[i].push(inputArr[index]);
            if(solve(k, inputArr, solution, index+1)) {
                return true;
            } else {
                solution[i].pop();
            }
        }
    }
    return false;
}

function isSumEqual (input, totalKeys) {
    let keys = Object.keys(input).length;
    if (keys !== totalKeys) {
        return false;
    }
    let sum;
    for (let el of Object.keys(input)) {
        if (input[el].length===0) {
            return false;
        }
        if(!sum) {
            sum = input[el].reduce((accumulator, curr)=> (accumulator = accumulator+curr), 0);
        } else {
            if (sum!==input[el].reduce((accumulator, curr)=> (accumulator = accumulator+curr), 0)){
                return false;
            }
        }
    }

    return true;
}

main ();