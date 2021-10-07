/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.


*/

const isValidSodoku = (board) => {
    const checkRow = (row) => {
        let map = new Map();
        for (let i = 0; i < row.length; i++) {
            if (!isNaN(row[i])) {
                if (map.has(row[i])) return false;
                else map.set(row[i], true);
            }
        }
        return true;
    };

    const checkColumn = (index) => {
        let map = new Map();
        for (let i = 0; i < board.length; i++) {
            if (!isNaN(board[i][index])) {
                if (map.has(board[i][index])) return false;
                else map.set(board[i][index], true);
            }
        }
        return true;
    };

    const check3x3 = () => {
        let colMax = 2
        let colStart = 0
        let rowMax = 2
        let rowStart = 0;

        while(colMax < board.length && rowMax < board.length) {
            let group = []
            let map = new Map()
            for(let i = rowStart; i <= rowMax; i++){
                for(let j = colStart; j <= colMax; j++){
                    group.push(board[i][j])
                    if(!isNaN(board[i][j])){
                        if (map.has(board[i][j])) return false;
                        else map.set(board[i][j], true);

                    }
                }
            }
            console.log(group)
            if(colMax === 8) {
                colStart = 0
                colMax = 2 
                rowStart += 3
                rowMax +=3    
            }else{
                colStart += 3
                colMax += 3
                
            }     
        }  
        return true
    }

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        let row = board[rowIndex];
        if (!checkRow(row)) return false;
        if (!checkColumn(rowIndex)) return false;
    }
    if(!check3x3()) return false
    else return true;
};

let a = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

let b = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

let c = [
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

console.log(isValidSodoku(a));
//console.log(isValidSodoku(b));
//console.log(isValidSodoku(c));
