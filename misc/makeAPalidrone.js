/*
Given a string, find out if its characters can be rearranged to form a palindrome.
*/

const CanIBeAPalidroneUWU = (string) => {
    string = string.toLowerCase().trim()
    let length = 0
    if (string.length <= 1) return true;
    let map = new Map();
    for (idx in string) {
        if(string[idx] !== " " ){
            length++
            if (map.has(string[idx])) map.get(string[idx]).val++;
            else map.set(string[idx], { val: 1 });
        }
    }

    if (length % 2) {
        let odds = 0;
        for (let [key, value] of map) {     
            if (value.val % 2) odds++;
            if (odds > 1) return false;
        }
    } else {
        for (let [key, value] of map) {
            if(value.val%2) return false;     
        }
    }
    return true;
};

function palindromeRearranging(inputString) {
    var countedArray = []
    var failArray = []


    for ( var i = 0; i < inputString.length ; i ++) {
        
        let count = inputString.split(inputString[i]).length - 1
        if (count % 2 == 1) {
            failArray.push(inputString[i])
        }
        else {
            countedArray.push(inputString[i])
        }
    }
    if (failArray.length > 1) {
        return false
    }
 
    if (failArray.length == 1 || failArray.length == 0 && countedArray.length % 2 == 0) {
        return true
    }

}

let a = "this is not"
let b = "taco cat"
let c = "tact coa"
let d = "abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbba"
let e = "racecar"
let count = 100000

// while((count > 0)){

// console.log(palindromeRearranging(a))
// console.log(palindromeRearranging(b))
// console.log(palindromeRearranging(c))
// console.log(palindromeRearranging(d))
// console.log(palindromeRearranging(e))
// count--


// }
let count2 = 100000
while((count2 > 0)){
    console.log(CanIBeAPalidroneUWU(a))
    console.log(CanIBeAPalidroneUWU(b))
    console.log(CanIBeAPalidroneUWU(c))
    console.log(CanIBeAPalidroneUWU(d))
    console.log(CanIBeAPalidroneUWU(e))
    count2--
}



// console.log(CanIBeAPalidroneUWU(a));
// console.log(CanIBeAPalidroneUWU("this is not"));
//  console.log(CanIBeAPalidroneUWU("taco cat"));
//  console.log(CanIBeAPalidroneUWU("Tact Coa"));
//  console.log(CanIBeAPalidroneUWU("abbbbbbba"));
//  console.log(CanIBeAPalidroneUWU("abbbcbba"));
//  console.log(CanIBeAPalidroneUWU("race car"));
//  console.log(CanIBeAPalidroneUWU("car race"));



