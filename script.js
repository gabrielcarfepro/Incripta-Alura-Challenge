function startCript() {
  animar()
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
  let wordsKeys = ['enter', 'imes', 'ai', 'ober', 'ufat']
  let verify = wordsKeys.some(e => textoValor.includes(e))
  if (!verify) {
    alert('O texto não está codificado!')
  } else {
    let res = textoValor
      .replace(/enter/gi, 'e')
      .replace(/imes/gi, 'i')
      .replace(/ai/gi, 'a')
      .replace(/ober/gi, 'o')
      .replace(/ufat/gi, 'u')
    resultado.value = res
  }
}

function copy() {
  let copyText = document.querySelector('#resultado')
  copyText.select()
  document.execCommand('copy')
}

function transformate(input, output) {
  let valorDeSaida = input
    .replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat')
  textforcopy.innerHTML = res
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

getGitHubAPI()
