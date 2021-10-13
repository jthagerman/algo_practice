/*
Zero Matrix
Write an alogrithm such that if an element in an MxN matrix is 0
its entire row and column are set to zero.

[
    [1, 1, 1, 1]
    [2, 0, 2, 2]
    [3, 3, 3, 3]
    [4, 4, 4, 4]
]
=>
[
    [1, 0, 1, 1]
    [0, 0, 0, 0]
    [3, 0, 3, 3]
    [4, 0, 4, 4]
]


*/

const zeroMatrix = (array) => {
    let rows = [];
    let columns = [];
    let newArray = [];

    for (let row in array) {
        for (let column in array[row]) {
            if (array[row][column] === 0) {
               
                rows.push(Number(row));
                columns.push(Number(column));
            }
        }
    }


    for (let i = 0; i < array.length; i++) {
        let row = [];
        for (let j = 0; j < array[i].length; j++) {
            
            if (rows.includes(i) || columns.includes(j)) {
                
                row.push(0);
            } else row.push(array[i][j]);
        }
        newArray.push(row);
    }

    return newArray;
};

const printNicely = (array) => {
    for (row in array) {
        console.log(array[row]);
    }
    console.log("");
};

let a = [
    [1, 1, 1, 1],
    [2, 0, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
];
let b = [
    [1, 1, 1, 1],
    [2, 0, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 0],
];

let c = [
    [1, 1, 1, 1, 2],
    [2, 0, 2, 2, 4],
    [3, 3, 3, 3, 4],
    [4, 4, 4, 0, 6],
];
let d = [
    [1, 1, 1, 1, 0],
    [2, 0, 2, 2, 4],
    [3, 3, 3, 3, 4],
    [4, 4, 4, 0, 6],
];
let e = [
    [0, 1, 1, 1],
    [2, 0, 2, 2],
    [3, 3, 0, 3],
    [4, 4, 4, 0],
];
let f = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
];

printNicely(zeroMatrix(a));
printNicely(zeroMatrix(b));
printNicely(zeroMatrix(c));
printNicely(zeroMatrix(d));
printNicely(zeroMatrix(e));
printNicely(zeroMatrix(f));



//0(2n^2)