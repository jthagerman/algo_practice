/*
String Compression
Implement a method to perform basic string compression, using the counts of repeated characters
For example, the string aabccccaaa would become a2b1c5a3, if the "compressed string" is longer than
the original string return the original string, string will only have uppercase and lowercase letters.
*/

const strCompress = (str) => {
    let compressedString = "";

    let pointer = 0;
    let currentLetter = "";
    let count = 1;

    while (pointer < str.length) {
        if (str[pointer] === currentLetter) {
            count++;
        } else {
            if (currentLetter != "")
                compressedString += `${count}${currentLetter}`;
            currentLetter = str[pointer];
            count = 1;
        }

        pointer++;
    }

    if (str.length <= compressedString.length) return str;
    else return compressedString;
};

console.log(strCompress("aabbbbbccccdbbbb"));
console.log(strCompress("abcdefghijklmnop"));
console.log(strCompress("aabbbcb"));
console.log(strCompress("aabcccaa"));
