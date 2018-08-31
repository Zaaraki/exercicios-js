//hoisting quer dizer içamento

console.log('a =', a) //undefined
var a = 2;
console.log('a=', a)

console.log('b=', b)
let b=2
console.log('b=', b) //não ocorre içamento com let

/*
o que aconteceu foi isso, ele içou a variável a

var a
console.log('a =', a) //undefined
a = 2;
console.log('a=', a)
*/

