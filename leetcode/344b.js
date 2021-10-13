/*
same problem with pointers
*/

var reverseString = function(s) {
    let front = 0
    let back = s.length -1
    
    while(front < back) {
        let temp = s[front]
        s[front] = s[back]
        s[back] = temp
        front++
        back--
    }
   
};

