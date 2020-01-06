function main(input) {
    let board = [];
    for (let j=0;j<input;j++) {
        let temp = [];
    for (let i=0;i<input;i++) {
        temp.push(-1);
    }
        board.push(temp);
    }
    board[0][0]=1;
    let isSuccess = moveKnight(0,0,board, 1);
    console.log(isSuccess? "YES": "NO");
    if (isSuccess) {
        for (let i=0;i<board.length;i++) {
     console.log(board[i].join(' '));
    }
    }
}

let xMoves = [2, 1, -1, -2, -2, -1, 1, 2 ];
let yMoves = [1, 2, 2, 1, -1, -2, -2, -1];

function moveKnight(x,y,board, moveNo) {
    //console.log('For Move No: ', moveNo);
    //console.log('\n');
    // for (let i=0;i<board.length;i++) {
    //     console.log(board[i].join(' '));
    //    }
    //    console.log('\n');

    if (moveNo === (board.length)*(board.length)) {
        return true;
    }
    //try all possible combinations of 2,1
    for (let i=0;i<xMoves.length;i++) {
        if (isValidMove(x+xMoves[i],y+yMoves[i], board)) {
            board[x+xMoves[i]][y+yMoves[i]] = moveNo+1;
            if (!moveKnight(x+xMoves[i],y+yMoves[i], board, moveNo+1)) {
                board[x+xMoves[i]][y+yMoves[i]] = -1;
            } else {
                return true;
            }
        }
    }
    return false;
}

function isValidMove(x,y,board) {
    if (x<0 || y<0 || x>=board.length || y>=board.length) {
        return false;
    }
    if (board[x][y]!==-1) {
        return false;
    }
    return true;
}


main('8');