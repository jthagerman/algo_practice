/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached
 again by continuously following the next pointer. Internally, pos is used to denote the 
 index of the node that tail's next pointer is connected to. Note that pos is not passed 
 as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

*/

class Node {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = null;
    }
}

const hasCycle = (head) => {
    if (!head) return false;

    let dict = new Map();


    while (head.next) {
        if (dict.has(head)  ) {
            return true;

        }
        else {
            dict.set(head)
            head = head.next;
           
        }
    }

    return false;
};

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(1);
let f = new Node(1);

a.next = b;
b.next = c;
c.next = d;
d.next = b;
e.next = f

console.log(hasCycle(a));
console.log(hasCycle(e));
