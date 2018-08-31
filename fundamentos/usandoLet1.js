var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero) //escopos diferentes, valores diferentes. dentro = 2, fora = 1

//let tem escopo global, de bloco e de função