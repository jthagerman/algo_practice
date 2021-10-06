/*
URLify
Write a method to replace spaces with '%20' 
*/

const urlify = (str) => {
    let strArray = str.trim().split(" ").join("%20");
    return strArray;
};

//0(2n) ????

const urlify2 = (str) => {
    str = str.trim();
    let url = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") url += "%20";
        else url += str[i];
    }
    return url;
};

//0(n)
// n space complexity
console.log(urlify("the quick fox jumps over the moon     "));
console.log(urlify2("the quick fox jumps over the moon"));
