/*
Roman Numerals To Integer
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

*/

const romanToInt = (numerals) => {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0;
    let chars = 0;

    while (chars < numerals.length) {
        let currentChar = numerals[chars];
        let value = values[currentChar];
        if (
            (currentChar === "I" && numerals[chars + 1] === "X") ||
            (currentChar === "I" && numerals[chars + 1] === "V")
        ) {
            value = values[numerals[chars + 1]] - value;
            chars++;
        }
        if (
            (currentChar === "X" && numerals[chars + 1] === "L") ||
            (currentChar === "X" && numerals[chars + 1] === "C")
        ) {
            value = values[numerals[chars + 1]] - value;
            chars++;
        }
        if (
            (currentChar === "C" && numerals[chars + 1] === "D") ||
            (currentChar === "C" && numerals[chars + 1] === "M")
        ) {
            value = values[numerals[chars + 1]] - value;
            chars++;
        }
        total += value;
        chars++;
    }

    return total;
};

let a = "III"
let b = "IV"
let c = "IX"
let d = "LVIII"
let e = "MCMXCIV"

console.log(romanToInt("MMMIX"));
console.log(romanToInt(a))
console.log(romanToInt(b))
console.log(romanToInt(c))
console.log(romanToInt(d))
console.log(romanToInt(e))



