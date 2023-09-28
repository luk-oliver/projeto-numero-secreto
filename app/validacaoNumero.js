
function validarNumeroSecreto(chute){
    const numero = +chute
  
    if(validarNumero(numero)){
        elementoChute.innerHTML += '<div>número invalida!! fale um número inteiro!!!!</div>'
    }

    if(numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>O numero falado deve estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if(numero === sorteioDeNumero){
        document.body.innerHTML = `
        <h2>Você acertou, Parabéns!!</h2>
        <h3>O número secreto é realmente ${sorteioDeNumero}</h3>

        <button class="btn-jogar" id="jogando novamente">Jogar novamente?</button>
        `

    }else if(numero > sorteioDeNumero){
       elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa fa-long-arrow-down" aria-hidden="true"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa fa-long-arrow-up" aria-hidden="true"></i></div>`
    }
  
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

function validarNumero(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', (event) => {
    if(event.target.id == 'jogando novamente'){
        window.location.reload()
    }
})