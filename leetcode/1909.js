/*
Input: nums = [1,2,10,5,7]
Output: true
Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
[1,2,5,7] is strictly increasing, so return true.
Example 2:

Input: nums = [2,3,1,2]
Output: false
Explanation:
[3,1,2] is the result of removing the element at index 0.
[2,1,2] is the result of removing the element at index 1.
[2,3,2] is the result of removing the element at index 2.
[2,3,1] is the result of removing the element at index 3.
No resulting array is strictly increasing, so return false.
Example 3:

Input: nums = [1,1,1]
Output: false
Explanation: The result of removing any element is [1,1].
[1,1] is not strictly increasing, so return false.
Example 4:

Input: nums = [1,2,3]
Output: true
Explanation: [1,2,3] is already strictly increasing, so return true.
*/

const canBeIncreasing = (array) => {
    const checkInOrder = (arr) => {
        let point = arr[0]
        for(let i = 1; i < arr.length; i++){
            if(point >= arr[i]) return false
            point = arr[i]
        }
        return true
    }

    
    for(let i = 0; i < array.length; i++ ){
        let temp = [...array.slice(0,i),...array.slice(i+1)]
        if(checkInOrder(temp)) return true
    }
    return false
}

let a = [1,2,3,4,5,6,7]
let b = [1,2,4,3,6,7]
let c = [10,9,1,2,3]
let d = [100,21,100]
let e = [541,783,433,744]

console.log(canBeIncreasing(a))
console.log(canBeIncreasing(b))
console.log(canBeIncreasing(c))
console.log(canBeIncreasing(e))