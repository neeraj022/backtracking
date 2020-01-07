function main (operand1, operand2, result) {    
    
    let alphObj = {}
    for (let el of operand1+operand2+result) {
        alphObj[el] = -1;
    }

    let isSuccess = solve (operand1, operand2, result, alphObj);

    console.log(isSuccess? "YES" : "NO");
    if (isSuccess) {
        for (let key of Object.keys(alphObj)) {
            console.log(` ${key}: ${alphObj[key]}`);
        }
    }
}

function solve (operand1, operand2, result, alphObj) {
    let isCompleteObj = isComplete(operand1, operand2, result, alphObj);
    if (isCompleteObj.isComplete) {
        return true;
    } else if (isCompleteObj.isNonAssignedAlph.length===0){
        return false;
    } else {
        for (let i=0; i<=9; i++) {
            if (isValid(i, alphObj)) {
                alphObj[isCompleteObj.isNonAssignedAlph] = i;
                if (!solve(operand1, operand2, result, alphObj)) {
                    alphObj[isCompleteObj.isNonAssignedAlph] = -1;
                } else {
                    return true;
                }
            }
        }
        return false;
    }
}

function isComplete (operand1, operand2, result, alphObj) {
    let isComplete = true;
    let isNonAssignedAlph = '';
    for (let el of Object.keys(alphObj)) {
        if (alphObj[el] === -1) {
            isComplete = false;
            isNonAssignedAlph = el;
        }
    }
    if (!isComplete) {
        return {isComplete, isNonAssignedAlph};
    }
    return {isComplete: (makeNumber(operand1, alphObj) + makeNumber(operand2, alphObj) === makeNumber(result, alphObj)), 
    isNonAssignedAlph};
}

function makeNumber (string, alphObj) {
    let numString = '';
    for (let el of string) {
        numString = numString + alphObj[el].toString();
    }
    return parseInt(numString);
}

function isValid (num, alphObj) {
    for (let el of Object.keys(alphObj)) {
        if (alphObj[el] === num) {
            return false;
        }
    }
    return true;
}

main ('SEND', 'MORE', 'MONEY');