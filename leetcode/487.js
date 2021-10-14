/*
Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

 

Example 1:

Input: nums = [1,0,1,1,0]
Output: 4
Explanation: Flip the first zero will get the maximum number of consecutive 1s. After flipping, the maximum number of consecutive 1s is 4.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 4
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/

const findMaxConsecutiveOnes = (nums) => {
    let length = 0
    let front = 0
    let back = 0
    let numOfZeroes=0


    while(back < nums.length) {

        if(nums[back] === 0) numOfZeroes+=1
        if(numOfZeroes === 2) {
            console.log("there are two zeros",front,back,numOfZeroes)
            while(numOfZeroes >= 2){
                console.log("current front", numOfZeroes, "val", nums[front], "index",front)
                if(nums[front] === 0) {
                    numOfZeroes = numOfZeroes - 1
                    console.log("i am bringing down the number of zeros ",numOfZeroes)
                   
                }
                if(front < back){
                    front++
                }
                else{
                    back++
                }
         


            }
            back++
            console.log("left while loop",numOfZeroes,front,back)

        }
        else{
            console.log("the number of zeros are", numOfZeroes, front, back)
            if((back-front + 1 ) > length) length = back - front + 1
            back++
        }

        

    }
    return length
}

let a = [1,0,2,0,1,0,1,3,2,2,4,3,2,4,2,4,2,4,2,4,2]

console.log(findMaxConsecutiveOnes(a))
