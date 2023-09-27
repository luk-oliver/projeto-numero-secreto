
//SpeechRecognition é um API de reconhecimento de voz
const elementoChute = document.getElementById('chute')

 window.SpeechRecognition =
    window.SpeechRecognition || webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.lang = 'pt-Br'; // passa  para português
  recognition.start() //iniciar microfone

  recognition.addEventListener('result', onSpeak) //ativa o evento

  function onSpeak(event){
        chute = event.results[0][0].transcript
        exibirElementoChute(chute)
        validarNumeroSecreto(chute)
  }

  function exibirElementoChute(chute){
        elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>

       `
  }

  recognition.addEventListener('end', () => recognition.start())