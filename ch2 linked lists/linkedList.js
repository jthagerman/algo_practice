class Node {
    constructor(value, next = null) {
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
        let count = 1;
        let node = this.head;
        while (node.next) {
            count++;
            node = node.next;
        }
        return count;
    }
    clear() {
        this.head = null;
    }
    print() {
        if (!this.head) console.log("empty");
        else {
            let str = [];
            str.push(this.head.value);
            let node = this.head;
            while (node.next) {
                str.push(node.next.value);
                node = node.next;
            }
            console.log(str);
        }
    }
    getLast() {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node.value;
    }
    getFirst() {
        return this.head.value;
    }
    insert(value) {
        let newNode = new Node(value);
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }
    
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(4);
let d = new Node(3);
a.next = b;
b.next = c;
c.next = d;

let list = new LinkedList(a);
let list2 = new LinkedList();
console.log(list);
console.log("size of full list", list.size());
console.log("size of empty list", list2.size());
list.insert(892348938);
list.print();
console.log("first", list.getFirst());
console.log("last", list.getLast());

list.clear();
console.log("size after clear", list.size());
