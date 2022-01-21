function startCript() {
  animar('cript')
}

function startDecript() {
  let texto = document.querySelector('#texto')
  let wordsKeys = ['enter', 'imes', 'ai', 'ober', 'ufat']
  let textoValor = texto.value
  let verify = wordsKeys.some(e => textoValor.includes(e))
  if (!verify) {
    alert('O texto não está codificado!')
  } else {
    animar('decript')
  }
}

function cript() {
  let texto = document.querySelector('#texto')
  let resultado = document.querySelector('#resultado')
  let textoValor = texto.value
  let textoResultante = textoValor
    .replace(/i/gi, 'imes')
    .replace(/e/gi, 'enter')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat')
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
  copyText.select()
  document.execCommand('copy')
  copyText.value = ''
}

// CONSUMINDO API DO GITHUB

let urlApi = 'https://api.github.com/users/gabrielcarfepro'

function getGitHubAPI() {
  fetch(urlApi)
    .then(response => response.json())
    .then(data => {
      devName.textContent = data.name
      //userBio.textContent = data.bio
      //devPhoto.src = data.avatar_url
      //githubUserUrl.href = data.html_url
      githubUserName.textContent = data.login
    })
}

getGitHubAPI()(
  // ANIMAÇÃO DO TITULO

  (async function IncriptaAnimation() {
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
