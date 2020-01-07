function main (string, pattern) {
    let solution = {};
    let isSuccess = match (string, pattern, solution, 0);
    console.log(isSuccess? "YES" : "NO");
    if (isSuccess) {
        for (let el of Object.keys(solution)) {
            console.log(`${el} : ${solution[el]}`);
        }
    }
}


function match (string, pattern, solution, patternIndex) {
    if (patternIndex===pattern.length && string.length===0) {
        return true;
    } else if (patternIndex===pattern.length || string.length===0) {
        return false;
    }
    for (let i=0; i<string.length; i++) {
        if (isValidCut(solution, pattern[patternIndex], string.substring(0,i+1))) {
            solution[pattern[patternIndex]] = string.substring(0,i+1);
            if (!match(string.substring(i+1), pattern, solution, patternIndex+1)) {
                if (pattern.indexOf(pattern[patternIndex])===patternIndex)
                {
                    delete solution[pattern[patternIndex]];
                }
            } else {
                return true;
            }
        }
    }
    return false;
}

function isValidCut (solution, patternChar, string) {
    if (!patternChar) {
        return false;
    }
    if (solution[patternChar]) {
        return solution[patternChar]===string;
    } else {
        return true;
    }
}

main ('GraphTreesGraph', 'aba');
//main ('GeeksforGeeks', 'gg');
//main ('GraphGraphGraph', 'ggg');