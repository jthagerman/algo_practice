/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
 

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
 

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/

const findDisappearedNumbers = (nums) => {
    let missing = []
    for(let i = 1; i <= nums.length; i++) {
        if(!nums.includes(i)) missing.push(i)    
    }
    return missing
}

var findDisappearedNumbers = function(nums) {
    let missing = []
    let values = new Map()
    for(let i = 0; i <= nums.length; i++) {
        values.set(nums[i])
    }
    
    for(let i = 1; i<= nums.length; i++) {
        if(!values.has(i)) missing.push(i)
    }
    return missing
  

    
};