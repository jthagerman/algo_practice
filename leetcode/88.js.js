/*
u are given two integer arrays numsA and numsB, sorted in non-decreasing order, and two integers m and n, representing the number of elements in numsA and numsB respectively.

Merge numsA and numsB into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array numsA. To accommodate this, numsA has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. numsB has a length of n.

 

Example 1:

Input: numsA = [1,2,3,0,0,0], m = 3, numsB = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from numsA.
Example 2:

Input: numsA = [1], m = 1, numsB = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: numsA = [0], m = 0, numsB = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in numsA. The 0 is only there to ensure the merge result can fit in numsA.
 

Constraints:

numsA.length == m + n
numsB.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= numsA[i], numsB[j] <= 109


*/

const merge = (nums1,m, nums2,n) => {
    numsA = numsA.slice(0,m)
    numsB = numsB.slice(0,n)

    let index = 0

    while(numsB.length > 0) {
        console.log(numsA,index,numsB.length)
        if(index > numsA.length -1) {
              numsA.push(numsB[0])
            numsB = numsB.slice(1)
            
        }    
        else if(numsA[index] >= numsB[0]){
            console.log('h', numsA[index], numsB[0])
            numsA = [...numsA.slice(0,index),numsB[0],...numsA.slice(index) ]
            numsB = numsB.slice(1)
        } else {
            index++
        }
    }

}