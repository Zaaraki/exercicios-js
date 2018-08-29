var a = 3 //Identificador
let b = 4 //Também identificador

var a = 30 //var pode redeclarar dentro de um mesmo escopo
b = 40  //let não pode ser redeclarado

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5;
//c = 50  //Erro. Não se pode atribuir valores a constantes
console.log(c)