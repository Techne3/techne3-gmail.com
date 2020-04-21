// const str = '[head, tail] = [1, 2, 3, 4]'
// let header=(str.split('='))
// let first=(header[0])
// let second=(header[1])
// console.log(first)
// console.log(second)
// return first, second

const str = "[head,tail] = [1, 2, 3, 4]";
let common = ([head, ...tail] = [1, 2, 3, 4]);
console.log(tail);
