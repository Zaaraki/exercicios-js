let valor //nao inicializada
console.log(valor) //dará undefined por padrão

valor = null //não aponta para nenhum endereço de memória, ausência de valor
console.log(valor)//será null
//console.log(valor.toString()) //erro. não pode ler toString de nulo

const produto = {}
console.log(produto.preco) //preço não foi definido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco //tirar o atributo de um objeto
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)