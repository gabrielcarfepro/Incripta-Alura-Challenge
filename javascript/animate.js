const classAnimate = 'animate'
const class_svg_1 = document.querySelector('.dataSvg')
const class_svg_2 = document.querySelector('.dataSvg2')
const lock = document.getElementById('lock')
const copiedMessage = document.querySelector('.msgCopiado')

// ANIMAÇÃO DO TÍTULO

function embaralharTitulo() {
  let caracteres = ['a', 'b', '¢', '!', '#', '%', '+', '@', '1', '§', '¨']
  let titulo = document.querySelector('#titulo')
  let tituloOriginal = '!ncripta'
  let arrayTitulo = tituloOriginal.split('')
  let random = parseInt(Math.random() * (1 + caracteres.length) - 1)
  let random2 = parseInt(Math.random() * (1 + arrayTitulo.length) - 1)
  titulo.textContent = tituloOriginal.replace(
    arrayTitulo[random2],
    caracteres[random]
  )
  }

((async function IncriptaAnimation() {
  let animaEmbaralhar = setInterval(() => {
    embaralharTitulo()
  }, 50)
  setTimeout(() => {
    clearInterval(animaEmbaralhar)
    document.querySelector('#titulo').textContent = '!ncripta'
    document.querySelector('#underline').style.display = 'block'
  }, 1000)
})()
)

// ANIMAÇÃO DO CADEADO

function animar(WhoCall) {
  let responseWhoCall = WhoCall
  class_svg_1.classList.add(classAnimate)
  class_svg_2.classList.add(classAnimate)
  lock.classList.add(classAnimate)
  stop(responseWhoCall)
}

async function stop(SoWhoCallIs) {
  setTimeout(() => {
    class_svg_1.classList.remove(classAnimate)
    class_svg_2.classList.remove(classAnimate)
    lock.classList.remove(classAnimate)
    if (SoWhoCallIs == 'cript') {
      cript()
    } else {
      decript()
    }
  }, 1000)
}

// ANIMAÇÃO AVISO DE USO

texto.addEventListener('mouseover', () => {
  animation = setTimeout(() => {
    let textoAviso = document.querySelector('.text-info')
    textoAviso.classList.remove('text-info-out')
    textoAviso.classList.add('text-info-show')
  }, 1000);
})


texto.addEventListener('mouseout', () => {
  clearTimeout(animation)
  let textoAviso = document.querySelector('.text-info')
  textoAviso.classList.remove('text-info-show')
  textoAviso.classList.add('text-info-out')
})

// ANIMAÇÃO TEXTO COPIADO

function copyAnimation() {
  copiedMessage.classList.add('copiado')
  if (copiedMessage.classList.length > 1) {
    copiedMessage.classList.remove('copiado')
    setTimeout(() => {
      copiedMessage.classList.add('copiado')
    }, 30)
  }
}

// EXIBIR E REMOVER POP-UP DE AVISO

function showPopUp(whoCalls) {
  let darkBackground = document.querySelector('.pop-up-back')
  let warningText = document.querySelector('.warning')
  if (whoCalls == 'empty') {
    warningText.textContent = 'A caixa de texto está vazia!'
    darkBackground.style.display = 'flex'
  } else if (whoCalls == 'decript') {
    warningText.textContent = 'O texto não está criptografado!'
    darkBackground.style.display = 'flex'
  } else if (whoCalls == 'tryCopy') {
    warningText.textContent = 'Não há texto para ser copiado!'
    darkBackground.style.display = 'flex'
  }
}

function removePopUp() {
  let darkBackground = document.querySelector('.pop-up-back')
  darkBackground.style.display = 'none'
}

backPopUp.addEventListener('click', removePopUp)