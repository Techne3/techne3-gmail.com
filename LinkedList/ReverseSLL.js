// https://www.hackerrank.com/challenges/reverse-a-linked-list/problem
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(val) {
    const node = new ListNode(val);
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
}

ll = new SinglyLinkedList();
ll.insertNode(1);
ll.insertNode(2);
ll.insertNode(3);
ll.insertNode(4);
ll.insertNode(5);
ll.insertNode(6);

function reverse(head) {
  let next = null;
  let prev = null;
  let curr = head;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

console.log(reverse(ll.head));
