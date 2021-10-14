/*
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
Example 2:

Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
Example 3:

Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.
*/

const checkIfExist = (arr) => {
    let map = new Map();
    for (element in arr) {
        if (map.has(arr[element] * 2)) return true;
        else if (map.has(arr[element] / 2)) return true;
        else map.set(arr[element]);
    }
    return false;
};

let a = [10, 2, 5, 3];
let b = [7, 1, 14, 11];
let c = [3, 1, 7, 11];

console.log(checkIfExist(a));
console.log(checkIfExist(b));
console.log(checkIfExist(c));