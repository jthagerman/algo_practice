/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

 

Example 1:

Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
Example 3:

Input: arr = [0,3,2,1]
Output: true
*/

const validMountainArray = (array) => {
    if (array.length < 3) return false;

    let inc = true;

    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) return false;
        if (inc) {
            if (array[i] < array[i - 1]) {
                inc = false;
                if (i === 1) return false;
            }
        } else {
            if (array[i] > array[i - 1]) return false;
        }
    }
    return inc ? false : true;
};

console.log(validMountainArray([0, 3, 2, 1]));

console.log(validMountainArray([2, 1]));

console.log(validMountainArray([3, 5, 5]));
