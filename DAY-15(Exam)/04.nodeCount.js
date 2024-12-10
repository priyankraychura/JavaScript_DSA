let arr = [1, 2, 3, 4, 5, -1];

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function insertNodeAtTail(head, data) {
    let newNode = new Node(data);
    
    if(head == null){
        return newNode;
    }
    
    let temp = head;
    while(temp.next != null){
        temp = temp.next;
    }
    temp.next = newNode;
    return head;
}

let llist = new Node();
let count = 0;
for(let i=0; i<arr.length; i++){
    const llist_head = insertNodeAtTail(llist.head, arr[i]);
    llist.next = llist_head;
    count++;
}

console.log(count)
