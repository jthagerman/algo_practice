/*
Write a function to return the Kth to last node of a singly linked list
going to assume not zero indexing the first spot is one
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
    size() {
        if (!this.head) return 0;
        let size = 1;
        let node = this.head;
        while(node.next) {
            node = node.next;
            size++;
        }
        return size;
    }
    add(newNode) {
        if(!this.head) this.head = newNode
        else{
            let node = this.head
            while(node.next) {
                node = node.next
            }
            node.next = newNode
        }
 
    }
    kthNode(number) {
        let length = this.size();
        if (length -1 < number) return "Out of bounds";
        else {
            let iterations = length - number -1;
            let node = this.head;
            while (iterations > 0) {
                node = node.next;
                iterations-- 
            }
            return node;
        }
    }
}


let a = new Node(1);
let b = new Node(2);
let c = new Node(9);
let d = new Node(3);
let list = new LinkedList()
list.add(a);
list.add(b);
list.add(c);
list.add(d)
console.log(list.kthNode(0))
console.log(list.kthNode(1))
console.log(list.kthNode(2))
console.log(list.kthNode(3))
console.log(list.kthNode(4))

