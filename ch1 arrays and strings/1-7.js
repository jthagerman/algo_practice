/*
Rotate Matrx
Given an matrix represented by an n x n matrix, where each pixel in the image
is represented by an integer, write an method to rotate the image by 90 degrees.

//since it does not say imma rotate 90 degrees to the right 

[
    [1, 1, 1, 1]
    [2, 2, 2, 2]
    [3, 3, 3, 3]
    [4, 4, 4, 4]
]
 => 

 [
    [4, 3, 2, 1]
    [4, 3, 2, 1]
    [4, 3, 2, 1]
    [4, 3, 2, 1]
 ]
*/

const rotateMatrix = (array) => {
    let rotatedArray = [];

    for (let i = 0; i < array.length; i++) {
        let row = [];
        for (let j = array[i].length - 1; j >= 0; j--) {
            row.push(array[j][i]);
        }
        rotatedArray.push(row);
    }

    return rotatedArray;
};

const printNicely = (array) => {
    for (row in array) {
        console.log(array[row]);
    }
    console.log("");
};

let a = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
];

let b = [
    [7, 1, 1, 6],
    [2, 7, 6, 2],
    [3, 6, 7, 3],
    [6, 4, 4, 7],
];


printNicely(rotateMatrix(a));

printNicely(rotateMatrix(b));
