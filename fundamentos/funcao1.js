// Função sem retorno

function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //NaN 2 + undefined
imprimirSoma(2, 3, 4, 5, 6, 7, 8) //só vai pegar os dois primeiros números. o resto ignora
imprimirSoma() //NaN

//Função com retorno

function soma(a, b=0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) //b=0 por padrão
console.log(soma()) //NaN