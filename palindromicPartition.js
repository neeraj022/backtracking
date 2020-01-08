function main (string) {
    solve(string, []);
}

function solve (string, solution) {
    if (string.length === 0) {
        console.log(solution.join(' '));
        return true;
    }
    for (let i=0; i<string.length; i++) {
        if (isPalindrome(string.substring(0, i+1))) {
            solution.push(string.substring(0, i+1));
            solve(string.substring(i+1), [...solution]);
            solution.pop();
        }
    }
    return false;
}

function isPalindrome (string) {
    let isPalindrome = true;
    let i = 0;
    let j = string.length-1;
    while(i<j) {
        if (string[i]!==string[j]) {
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }
    return isPalindrome;
}

main ('nitin');