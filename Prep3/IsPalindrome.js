// https://leetcode.com/problems/palindrome-linked-list/

// var isPalindrome = function(head) {
//     let current = '', reverse = ''
//     while(head) {
//         current += head.val
//         reverse = head.val + reverse
//         head = head.next
//     }
//     return current === reverse
// };

let isPalindrome = function (head) {
  if (head == null || head.next == null) return true;
  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = reverseList(slow.next);
  slow = slow.next;
  while (slow !== null) {
    if (head.val !== slow.val) return false;
    head = head.next;
    slow = slow.next;
  }
  return true;
};

let reverseList = function (head) {
  let pre = null;
  let next = null;
  while (head !== null) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};
