// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists

function insertNodeAtPosition(head, data, position) {
  if (!head || position === 0) {
    head = new SinglyLinkedListNode(data, null);
    return head;
  }

  let current = head;
  let i = 1;
  while (current) {
    if (i === position) {
      const node = new SinglyLinkedListNode(data, null);
      node.next = current.next;
      current.next = node;
      return head;
    }
    current = current.next;
    i++;
  }
}
