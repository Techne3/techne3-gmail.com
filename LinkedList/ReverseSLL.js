// https://www.hackerrank.com/challenges/reverse-a-linked-list/problem


function reverse(head){
 let next =null
 let prev = null;
 let curr = head
 while(curr){
     next = curr.next
     curr.next = prev
     prev = curr
     curr = next
 }

 return prev
}

console.log(reverse(6,5,4,3,2,1))