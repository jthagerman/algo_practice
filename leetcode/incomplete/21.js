/*
Merge Two Sorted Linked Lists
*/

class ListNode {
    constructor(val = null, next = null) {
        this.val = val
        this.next = next
    }
}

const Node = (val=0,next=null) => {
    this.val = val
    this.next = next
}

const mergeTwoLists = (l1, l2) => {
    const l3 = {val: null, next: null}

    if(!l1.next && !l2.next) {
        if(l1.val < l2.val){
            l3 = l1
            l3.next = l2
        } else {
            l3 = l2
            l3.next = l1
        }
    }

    while(l1.next || l2.next) {
        if(l1.val < l2.val) {
            if(!l3.val) l3 = l1
            else l3.next = l1
            l1 = l1.next
        }
        else{
            if(!l3.val) l3 = l2
            else l3.next = l2
            l2 = l2.next
        }
    }

    return l3


    
}

mergeTwoLists()