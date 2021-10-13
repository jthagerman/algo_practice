/*Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

*/
class Node {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = null;
    }
}

const returnMiddleNode = (head) => {
    if (!head || !head.next) return head;
    let nodeArray = [];
    while (head.next) {
        nodeArray.push(head);
        head = head.next;
   
    }
    nodeArray.push(head)
    
    return (nodeArray.length % 2) ? nodeArray[Math.ceil(nodeArray.length / 2) -1] : nodeArray[nodeArray.length/2]

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

console.log(returnMiddleNode(a));
