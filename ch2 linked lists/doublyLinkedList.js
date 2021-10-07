class Node {
    constructor(value = null, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
    }
    add(newNode) {
        if (!this.head) {
            this.head = newNode;
        } else {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node.next = newNode;
            newNode.prev = node;
        }
    }
    toString() {
        let str = [];
        if (!this.head) return "empty";
        else {
            let node = this.head;
            str.push(node.value);

            while (node.next) {
                node = node.next;
                str.push(node.value);
            }
        }
        return str;
    }
    deleteLast() {
        if (!this.head.next) this.head = null;
        let node = this.head;
        while (node.next) node = node.next;
        let prev = node.prev;
        prev.next = null;
    }

    deleteIndex(index) {
        let count = 0;
        if (index === 0) this.head = this.head.next;
        let node = this.head;
        while (count < index) {
            if (node.next === null) break;
            node = node.next;
            count++;
        }
        if (count === index) {
            let prev = node.prev;
            prev.next = node.next;
        }
    }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(4);
let d = new Node(3);

let list = new DoublyLinkedList();

list.add(a);
list.add(b);
list.add(c);
list.add(d);
//list.deleteLast()
list.deleteIndex(2);
console.log(list.toString());
