/* not my algo
 */

// const palindromeRearranging = (inputString) => {
//     let fail = new Map();

//     for (const i in inputString) {
//         const count = inputString.split(inputString[i]).length - 1;
//         if (count % 2 == 1 && !fail.has(inputString[i])) fail.set(inputString[i]);      
//     }

//     return fail.size <= 1 ? true : false;
// };

function palindromeRearranging(inputString) {
    var failArray = []

    for ( var i = 0; i < inputString.length ; i ++) {

        let count = inputString.split(inputString[i]).length - 1
        if (count % 2 == 1 && failArray.includes(inputString[i]) == false) {
            failArray.push(inputString[i])
        }
    }

    if (failArray.length == 1 || failArray.length == 0 ) {
        return true
    }
    else {
        return false
    }

}
 console.log(palindromeRearranging("aaabb"));

