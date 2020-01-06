let myDictionary = {
    "i": true,
    "like": true,
    "sam": true, 
    "sung": true,
    "samsung": true,
    "mobile": true,
    "ice": true,
    "cream": true,
    "icecream": true,
    "man": true,
    "go": true,
    "mango": true
}

function main(sentence) {
    solution = [];
    let isSuccess = wordbreak(sentence, solution);
    console.log(isSuccess? 'YES': 'NO');
    console.log(solution.join(' '));
}

function wordbreak (sentence, solution) {
    //console.log(sentence, solution);
    if (sentence.length===0) {
        return true;
    }

    for (let i=0; i<sentence.length; i++) {
        if (isPresent(sentence.substring(0,i+1))) {
            solution.push(sentence.substring(0,i+1));
        if (wordbreak(sentence.substring(i+1), solution)) {
            return true;
        } else {
            solution.pop();
        }
    }
    }
    return false;

}

function isPresent (string) {
    return myDictionary[string]? true: false;
}

main('ilikesamsung');