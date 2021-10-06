/*
Given two strings check if one is a permutation of another
case insinsitive? 
*/

const isPermutation = (str1, str2) => {
    str1 = str1.toLowerCase().trim();
    str2 = str2.toLowerCase().trim();
    if (str1.length !== str2.length) return false;
    for (let i = 0; i < str1.length; i++) {
        if (!str2.includes(str1[i])) return false;
    }
    return true;
};

console.log(isPermutation("Car", "rac")); //true
console.log(isPermutation("race", "pizza")); //false
console.log(isPermutation("piz", "piza")); //false
console.log(isPermutation("pig", "gip")); //true
console.log(isPermutation("max", "xac")); //false

//0(n)
