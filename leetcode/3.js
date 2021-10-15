/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0

*/

const lengthOfLongestSubstring = (string) => {
    let map = new Map();
    let front = 0;
    let back = 0;
    let maxLength = 0;

    while (back <= string.length) {

        if (map.has(string[back]) && front < back) {
        console.log(string[front],front,back, string[back],map.get(string[back]))
        
            
            if (back - front + 1 > maxLength) maxLength = back - front;
            
            

             if(string[front] === string[back]){
                 console.log("match")
                 front++
                 back++
             }else{
                 map.delete(string[front])
                 front++
             }

   
        } else {
            console.log("hjere")
            console.log(front,back,"j")

            if (back - front + 1 > maxLength) maxLength = back - front;
            map.set(string[back],front);
            back++;
        }
    }
    return maxLength
};



let a = "tmmzuxt"


console.log(lengthOfLongestSubstring(a))