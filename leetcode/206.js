/*



Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []

*/


const reverseLinkedList = (head) => {
    let list = []
    let node = head
    
    while(node) {
        list.unshift(node.val)
        node = node.next
    }
    
    let rev = head
    
    while(rev) {
        rev.val = list[0]
        list = list.slice(1)
        rev = rev.next
    }
    return head
}



