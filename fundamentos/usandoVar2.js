var numero = 1
{
    var  numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//Pode declarar var 2 vezes sem problema, mas como os dois estão no mesmo escopo, o numero 2 será impresso 2 vezes, pois foi sobrescrito