/*
given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
 */

const isPalidrone = (num) => {
    if(num.length <= 1) return true
    num = num.toString();
    let front = 0;
    let back = num.length - 1;

    while (front < back) {
        if (num[front] !== num[back]) return false;
        else {
            front++;
            back--;
        }
    }
    return true;
};

let a = 123454321;
let b = 122221;
let c = -12321;


console.log(isPalidrone(a));
console.log(isPalidrone(b));
console.log(isPalidrone(c));
