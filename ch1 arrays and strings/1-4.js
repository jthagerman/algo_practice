/*
  Write a function to check if a string is a permutation of a palidrone
  ignore casing and non letters.

  ex
  imput = "Tact Coa"
  output => True  taco cat
*/

const checkPermPalidrone = (str) => {
    str = str.trim().toLowerCase();

    const dict = {};
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            length++;
            if (dict[str[i]]) {
                dict[str[i]]++;
            } else dict[str[i]] = 1;
        }
    }

    if (length % 2) {
        //odd length
        let odd = 0;
        for (let key in dict) {
            if (dict[key] % 2) odd++;
            if (odd > 1) return false;
        }
    } else {
        for (let key in dict) {
            if (dict[key] % 2) return false;
        }
    }

    return true;
};

//0(2n)

console.log(checkPermPalidrone("this is not"));
console.log(checkPermPalidrone("taco cat"));
console.log(checkPermPalidrone("Tact Coa"));
console.log(checkPermPalidrone("abbbbbbba"));
console.log(checkPermPalidrone("abbbcbba"));
console.log(checkPermPalidrone("race car"));
console.log(checkPermPalidrone("car race"));
