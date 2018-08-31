const funcs = []

for (let i=0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//var sem escopo de bloco, vai imprimir sempre o valor de 10