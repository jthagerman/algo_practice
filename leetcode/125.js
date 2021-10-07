/*
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

const isPalidrone = (string) => {
    string = string
        .toLowerCase()
        .trim()
        .split("")
        .filter((element) => {
            if (/[a-zA-Z0-9]/.test(element)) return element;
        })
        .join("");

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]) return false
    }
    return true;
};

console.log(isPalidrone("A man, a plan, a canal: Panama"));
console.log(isPalidrone("race a car"));
console.log(isPalidrone("0P"));
