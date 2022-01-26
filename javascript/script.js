function startCript() {
  let texto = document.querySelector('#texto')
  if (texto.value == '') {
    showPopUp('cript')
  } else {
    animar('cript')
  }
}

function startDecript() {
  let texto = document.querySelector('#texto')
  let wordsKeys = ['enter', 'imes', 'ai', 'ober', 'ufat']
  let textoValor = texto.value
  let verify = wordsKeys.some(e => textoValor.includes(e))
  if (textoValor === '') {
    showPopUp('decriptEmpty')
  } else if (!verify) {
    showPopUp('decript')
  } else {
    animar('decript')
  }
}

function cript() {
  let texto = document.querySelector('#texto')
  let resultado = document.querySelector('#resultado')
  let textoValor = blockSpecialsChars(texto.value.toLowerCase())
  let textoResultante = textoValor
    .replace(/[i\í]/gi, 'imes')
    .replace(/[e\é\ê]/gi, 'enter')
    .replace(/[a\á\â\ã]/gi, 'ai')
    .replace(/[o\ó\ô]/gi, 'ober')
    .replace(/[u\ú]/gi, 'ufat')
  resultado.value = textoResultante
}

function decript() {
  let texto = document.querySelector('#texto')
  let resultado = document.querySelector('#resultado')
  let textoValor = texto.value
  let res = textoValor
    .replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u')
  resultado.value = res
}


function copy() {
  let copyText = document.querySelector('#resultado')
  navigator.clipboard.writeText(copyText.value)
  copyText.value = ''
}

// CONSUMINDO API DO GITHUB

;(function getGitHubAPI() {
  let urlApi = 'https://api.github.com/users/gabrielcarfepro'
  fetch(urlApi)
    .then(response => response.json())
    .then(data => {
      devName.textContent = data.name
      userBio.textContent = data.bio
      devPhoto.src = data.avatar_url
      //githubUserUrl.href = data.html_url
      //githubUserName.textContent = data.login
    })
})

// ANIMAÇÃO DO TITULO

((async function IncriptaAnimation() {
    let animaEmbaralhar = setInterval(() => {
      embaralhar()
    }, 50)
    setTimeout(() => {
      clearInterval(animaEmbaralhar)
      document.querySelector('#titulo').textContent = '!ncripta'
      document.querySelector('#underline').style.display = 'block'
    }, 1000)
  })()
)

function embaralhar() {
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

// REMOVER POP-UP DE AVISO

function showPopUp(whoCalls) {
  let darkBackground = document.querySelector('.pop-up-back')
  let warningText = document.querySelector('.warning')
  if (whoCalls == 'cript') {
    warningText.textContent = 'A caixa de texto está vazia!'
    darkBackground.style.display = 'flex'
  } else if (whoCalls == 'decriptEmpty') {
    warningText.textContent = 'A caixa de texto está vazia!'
    darkBackground.style.display = 'flex'
  } else if (whoCalls == 'decript') {
    warningText.textContent = 'O texto não está criptografado!'
    darkBackground.style.display = 'flex'
  }
}

function removePopUp() {
  let darkBackground = document.querySelector('.pop-up-back')
  darkBackground.style.display = 'none'
}

backPopUp.addEventListener('click', removePopUp)

// BLOQUEANDO CARACTERES ESPECIAIS

function blockSpecialsChars(text){
      return text.replace(/[1\\!\¹\'2'\@\²\'3'\#\³\'4'\$\£\'5'\%\¢\'6'\¨\¬\'7'\&\'8'\*\'9'\(\'0'\´\)\-\_\=\+\§\`\[\{\ª\~\^\}\º\|\,\<\.\>\;\:\\\\/\?\°\"\']/g, '')
}