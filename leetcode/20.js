/*
Valid Parenthesee

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true

*/

const isValid = (str) => {
    let dict = {
        "{": "}",
        "(": ")",
        "[": "]",
    };
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (dict[char]) stack.unshift(dict[char]);
        else {
            if (char === stack[0]) stack = stack.slice(1);
            else return false;
        }
    }

    return stack.length > 0 ? false : true
};

let a = "((()))";
let b = "({})";
let c = "({(})";
let d = "{]";
let e = "()[]{}";

console.log(isValid(a));
console.log(isValid(b));
console.log(isValid(c));
console.log(isValid(d));
console.log(isValid(e));
