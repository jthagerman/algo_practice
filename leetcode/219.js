/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j 
in the array such that nums[i] == nums[j] and abs(i - j) <= k.

-Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

-Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
-Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

const containsNearbyDuplicate = (nums, k) => {
    if (nums.length === 0) return false;
    const map = new Map();
    for (let index in nums) {
        if (map.has(nums[index])) {
            if (Math.abs(map.get(nums[index]) - index) <= k) return true;
            else map.set(nums[index], index);
        } else {
            map.set(nums[index], index);
        }
    }
    return false;
};

let a = [1, 2, 2, 4, 5, 3, 2, 5];
let b = [1,2,3,1]
let c = [1,0,1,1]
let d = [1,2,3,1,2,3]

console.log(containsNearbyDuplicate(a, 4));
console.log(containsNearbyDuplicate(b, 3));
console.log(containsNearbyDuplicate(c, 1));
console.log(containsNearbyDuplicate(d, 2));

