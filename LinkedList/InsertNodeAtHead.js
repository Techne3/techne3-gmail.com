// https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem

function insertNodeAtHead(head, data) {
  const newHead = new SinglyLinkedListNode(data, null);
  newHead.next = head;
  head = newHead;
  return head;
}
