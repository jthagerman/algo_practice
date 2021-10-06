/*
Create an algorithm to check if a string is all unique characters
*/

const uniqueChecker = (str) => {
    str = str.trim();
    const dict = {};

    for (let i = 0; i < str.length; i++) {
        if (dict[str[i]]) return false;
        else dict[str[i]] = true;
    }
    return true;
};

const a = "abcde";
const b = "abcdcba";
const c = "ABCbca";

console.log(uniqueChecker(a));
console.log(uniqueChecker(b));
console.log(uniqueChecker(c));

//0(n)
