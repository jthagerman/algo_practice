/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0
Example 5:

Input: nums = [1], target = 0
Output: 0
*/

const searchInsert = (nums, target) => {
    if (nums.indexOf(target) !== -1) return nums.indexOf(target);
    else {
        let index = 0;
        while (index < nums.length) {
            if (nums[index] > target) break;
            index++;
        }
        return index;
    }
};

let a = [1, 3, 5, 6];
let b = [1, 3, 5, 6];
let c = [1, 3, 5, 6];
let d = [1, 3, 5, 6];
let e = [1];

console.log(searchInsert(a, 5));
console.log(searchInsert(b, 2));
console.log(searchInsert(c, 7));
console.log(searchInsert(d, 0));
console.log(searchInsert(e, 0));
