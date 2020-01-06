function main (input) {
    removeParenthesis(input);
}

function removeParenthesis(input) {
    let visited = {} //hashmap for tracking visit
    let toBeConsidered = []; //queue function to be executed
    visited [input] = true;
    toBeConsidered.push(input);
    let level = false; // BFS level
    while(toBeConsidered.length>0) {
        let str = toBeConsidered.shift();
        if (isValidParenthesisString(str)) {
            console.log(str);
            level = true; //nowonwards consider only this level
        }
        if (level) {
            continue;
        }
        for (let i=0;i<str.length;i++) {
            let newStr = str.substring(0,i)+str.substring(i+1);
            if (!visited[newStr]) {
                visited[newStr] = true;
                toBeConsidered.push(newStr);
            }
        }
    }
}

function isValidParenthesisString (string) {
    let counter = 0;
    for (let i=0; i<string.length;i++) {
        if (counter < 0) {
            return false;
        }
        if (string[i]==='(') {
            counter++;
        } else if (string[i]===')') {
            counter--;
        }
    }
    return counter===0;
}

main ('()())()');