/*

Fast and Slow Pointer Solution
same question as before
*/


class Node {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = null;
    }
}

const returnMiddleNode = (head) => {
    if (!head || !head.next) return head;

    let slow = head
    let fast = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
      
   
    }

    
    return slow

};

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);


a.next = b;
b.next = c;
c.next = d;

console.log(returnMiddleNode(a));
