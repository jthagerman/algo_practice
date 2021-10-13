/*
328. Odd Even Linked List
Medium

3878

355

Add to List

Share
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
Example 2:


Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
*/


class Node {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = null;
    }
}


const oddEvenList = (head) => {
    if(!head) return head
    let odds = []
    let evens = []
    let counter = 1
    
    let node = head
    while(node) {
        (counter % 2) ? odds.push(node.val) : evens.push(node.val)
        counter++
        node = node.next
    }

    console.log(odds,"h",evens)

    let node2 = head
    let counter2 = 1
    while(node2) {
        if(counter2 % 2){
            node.val = odds[0]
            odds.slice(1)

        }else{
            node.val = evens[0]
            evens.slice(1)

        } 
        counter2++
        node = node.next
 


    }
    
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);

a.next = b;
b.next = c;
c.next = d;


console.log(oddEvenList(a))