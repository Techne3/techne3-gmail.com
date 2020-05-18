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
ll.insertNode(7);

function removeKthLinkedList(heads, n) {
  let list = [];
  currentNode = heads;
  // loop through the List till the next node equals null
  while (currentNode.next !== null) {
    // push the nodes into an array
    list.push(currentNode);
    currentNode = currentNode.next;
  }
  list.push(currentNode);

  //   So basically in order to remove a node we need to find the node just before it
  //  and change the nodes pervious point to point to the node after the removed node
  // so it would looks something like prev.next = prev.next.next
  // so if the node to be removed was four we would  point to the node prior (3)  and
  // then point to the node after the removed node which would be (5) therefore bypassing the removed node

  // first we check to see whether the node previous to the node to be removed
  // && the node to be removed  is  somewhere within the the list

  if (list.length - n - 1 >= 0 && list.length - n + 1 < list.length) {
    // I then  link the node right before the node to be removed  to point
    // to the node after the removed node.
    // basically prev.next = current.next

    /// after the removal of the Nth node the list the length subtracts  by one
    /// therefore the new prev will be prev.next and linked to list[list.length -n +1]
    list[list.length - n - 1].next = list[list.length - n + 1];
    return list[0];
  }

  // If the node previous to the node to be removed is a negative
  // meaning it was the first  node in the list
  // I check to see if the length of the array is greater than 1
  // if not I return an empty array
  // else if there are elements in the list I return the first index of the list as the head
  if (list.length - n - 1 < 0) {
    return list.length <= 1 ? [] : list[1];
  }

  //   //   if the node that needs to be removed is on the last node of the LL
  //   // I points its pervious.next node to be null
  if (list.length - n + 1 >= list.length) {
    list[list.length - n - 1].next = null;
    return list[0];
  }
}
// console.log(removeKthLinkedList(ll.head,0));
