{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

//O bloco nesse contexto não fará diferença
console.log(sera) //Com o var, mesmo fora do bloco, também será possível enxergar o var. Ficará visível mesmo fora do bloco

function teste(){
    var local = 123
    console.log(local)
}

teste()
//console.log(local) //ERRO! Variável dentro de função, o escopo será apenas para a função