function tratarErroELancar(erro){
    //throw new Error("...")
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimir(obj){
    try{
    console.log(obj.name.toUpperCase()+ "!!!")
    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimir(obj)