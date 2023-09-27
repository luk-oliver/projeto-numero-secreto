const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')


const menorValor = 1
const maiorValor = 100

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

function numeroSecreto(){
    return parseInt(Math.random() * maiorValor + 1)
}

const sorteioDeNumero = numeroSecreto()

console.log(sorteioDeNumero)
