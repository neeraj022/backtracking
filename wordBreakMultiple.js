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
    "and": true,
    "man": true,
    "go": true,
    "mango": true
}

function main(sentence) {
    wordbreak(sentence, []);
}

function wordbreak (sentence, solution) {
    //console.log(sentence, solution);
    if (sentence.length===0) {
        console.log(solution.join(' '));
    } else {
    for (let i=0; i<sentence.length; i++) {
        if (isPresent(sentence.substring(0,i+1))) {
            wordbreak(sentence.substring(i+1), [...solution, sentence.substring(0,i+1)]);
    }
    }
}
}

function isPresent (string) {
    return myDictionary[string]? true: false;
}

main('ilikeicecreamandmango');