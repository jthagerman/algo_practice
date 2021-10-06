/*
One Away
There are three types of edits that can be done on a string: insert a character, remove a character, or replace a character.
Given two strings write a function to check if they are one edit away from each other

ex.
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
*/

const oneAway = (str1, str2) => {
    if (str1.length - str2.length > 1 || str1.length - str2.length < -1)
        return false;
    let diferences = 0;
    if (str2.length > str1.length) {
        for (let i = 0; i < str2.length; i++) {
            if (!str1.includes(str2[i])) diferences++;
            if (diferences > 1) return false;
        }
    } else {
        for (let i = 0; i < str1.length; i++) {
            if (!str2.includes(str1[i])) diferences++;
            if (diferences > 1) return false;
        }
    }
    return true;
};

const a = "pale";

console.log(oneAway(a, "pales"));
console.log(oneAway(a, "ple"));
console.log(oneAway(a, "bale"));
console.log(oneAway(a, "bake"));
