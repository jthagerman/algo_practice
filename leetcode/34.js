/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

*/

const searchRange = (nums, target) => {
    let startingIndex = nums.indexOf(target)
    console.log(startingIndex)
    let endingIndex = startingIndex
    if(startingIndex === -1) return [-1,-1]
    else {
        for(let i = startingIndex; i < nums.length; i++){
            if(nums[i] === target) endingIndex++
            else return [startingIndex,endingIndex-1]
        }
    }
    return [startingIndex,endingIndex - 1]
}

let a = [1, 2, 2, 2, 3, 4];
let b =  [5,7,7,8,8,10]
let c = [5,7,7,8,8,10]


console.log(searchRange(a,2))
console.log(searchRange(b,8))
console.log(searchRange(c,6))
console.log(searchRange([],0))
console.log(searchRange([1],1))
