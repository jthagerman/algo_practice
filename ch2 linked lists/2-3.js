/*
Delete Middle Node
Implement an algorithm to delete a node in the middle of a singly linked list,
given only access to that node.

*/

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    add(newNode) {
        if (!this.head) this.head = newNode;
        else {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node.next = newNode;
        }
    }
}

const printList = (linkedList) => {
    if (!linkedList.head) return "empty";
    else {
        let values = [];
        let node = linkedList.head;
        values.push(node.value);
        while (node.next) {
            node = node.next;
            values.push(node.value);
        }
        console.log(values);
    }
};

const deleteMiddleNode = (node) => {
    let next = node.next;
    node.value = next.value;
    node.next = next.next;
};

let a = new Node(180);
let b = new Node(209);
let c = new Node(909);
let d = new Node(387);
let list = new LinkedList();
list.add(a);
list.add(b);
list.add(c);
list.add(d);
printList(list);
deleteMiddleNode(c);
printList(list);
deleteMiddleNode(b);
printList(list);
