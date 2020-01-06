function main(input) {
    input = parseInt(input);
    let board = [];
    for (let j=0;j<input;j++) {
        let temp = [];
    for (let i=0;i<input;i++) {
        temp.push(0);
    }
        board.push(temp);
    }
    let isSuccess = fillQueens(board, input);
    console.log(isSuccess? "YES": "NO");
    if (isSuccess) {
        for (let i=0;i<board.length;i++) {
     console.log(board[i].join(' '));
    }
    }
}
 
 
// Write your code here
 
function fillQueens (board, N) {
    // console.log('N is ', N);
    // for (let i=0;i<board.length;i++) {
    //  console.log(board[i].join(' '));
    //  //console.log('\n');
    // }
    //console.log('\n');
    if (N===0) {
        return true;
    }
    for (let i=0; i<board.length;i++) {
        for (let j=0;j<board.length;j++) {
            if (isAttacked(i,j,board)) {
                continue;
            }
            board[i][j] = 1;
            if (!fillQueens(board, N-1)) {
                board[i][j] = 0;
            } else {
                return true;
            }
        }
    }
    return false;
}
 
 
function isAttacked (x,y,board) {
    let boardLength = board.length;
    if (board[x].includes(1)) {
        return true;
    } 
    for (let i=0; i<boardLength;i++) {
        if(board[i][y]===1) {
            return true;
        }
    }
    //check for diagonals
    let iteratorX = x;
    let iteratorY = y;
    while (iteratorX>=0 && iteratorY>=0 && iteratorX<boardLength && iteratorY<boardLength) {
        if (board[iteratorX][iteratorY]===1) {
            return true;
        }
        iteratorX++;
        iteratorY++;
    }
    
    iteratorX = x;
    iteratorY = y;
    while (iteratorX>=0 && iteratorY>=0 && iteratorX<boardLength && iteratorY<boardLength) {
        if (board[iteratorX][iteratorY]===1) {
            return true;
        }
        iteratorX--;
        iteratorY--;
    }
    
    iteratorX = x;
    iteratorY = y;
    while (iteratorX>=0 && iteratorY>=0 && iteratorX<boardLength && iteratorY<boardLength) {
        if (board[iteratorX][iteratorY]===1) {
            return true;
        }
        iteratorX++;
        iteratorY--;
    }
    
    iteratorX = x;
    iteratorY = y;
    while (iteratorX>=0 && iteratorY>=0 && iteratorX<boardLength && iteratorY<boardLength) {
        if (board[iteratorX][iteratorY]===1) {
            return true;
        }
        iteratorX--;
        iteratorY++;
    }
    return false;
}


main('4');