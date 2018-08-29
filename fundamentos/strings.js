const escola = "Cod3r" 

console.log(escola.charAt(4)) //começa do índice 0
console.log(escola.charAt(5)) // exibe nada
console.log(escola.charCodeAt(3)) //valor do caracter na tabela ascii
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) //inclui zero, não inclui 3. Vai do zero ao 3, mas sem incluir o 3

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + '!')

console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) //gera um array com 3 elementos
