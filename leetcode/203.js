/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
*/

class Node {
    constuctor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}

const removeElements = (head, val) => {
    if (!head) return head;
    if (!val) return head;

    while (head) {
        if (head.val === val) head = head.next;
        else break;
    }

    let node = head;

    while (node.next) {
        if (node.next.val === val) {
            node.next = node.next.next;
        } else node = node.next;
    }
};

let a = new Node(1);
let b = new Node(1);
let c = new Node(3);
let d = new Node(1);
let e = new Node(1);
let f = new Node(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(removeElements(a, 1));
