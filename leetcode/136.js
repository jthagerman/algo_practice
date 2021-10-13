/*
136. Single Number
Easy

7454

252

Add to List

Share
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
*/

const findTheSingle = array => {
    let map = {}

    array.forEach((element) => {
        if(map[element]) map[element] = 2
        else map[element] = 1
    })

    for(key in map) {
        if(map[key] === 1) return key
    }
    

}
let a = [1,1,2,2,3,3,5,5,8]
let b = [4,1,2,1,2]


console.log(findTheSingle(a))
console.log(findTheSingle(b))