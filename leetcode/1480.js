/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
*/

const runningSum = (array) => {
    let output = [array[0]]
    for(let i = 1; i < array.length; i++) {
        output.push(array[i] + output[i-1])
    }
    return output


}

const runningSum2 = (array) => {

    for(let i = 1; i < array.length; i++) {
        array[i] = array[i] + array[i-1]
    }
    return array


}

let a = [1,2,3,4,5,6,7]
let b = [1,1,1,1]
let c = [3,1,2,10,1]

console.log(runningSum2(a))
console.log(runningSum2(b))
console.log(runningSum2(c))