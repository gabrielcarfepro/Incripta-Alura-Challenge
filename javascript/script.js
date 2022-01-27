function startCript() {
  let texto = document.querySelector('#texto')
  if (texto.value == '') {
    showPopUp('empty')
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
    showPopUp('empty')
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
  texto.value = ''
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
  texto.value = ''
}

// BLOQUEANDO CARACTERES ESPECIAIS

function blockSpecialsChars(text){
  return text.replace(/[1\\!\¹\'2'\@\²\'3'\#\³\'4'\$\£\'5'\%\¢\'6'\¨\¬\'7'\&\'8'\*\'9'\(\'0'\´\)\-\_\=\+\§\`\[\{\ª\~\^\}\º\|\,\<\.\>\;\:\\\\/\?\°\"\']/g, '')
}

function copy() {
  let copyText = document.querySelector('#resultado')
  if (copyText.value == '') {
    showPopUp('tryCopy')
  } else {
    copyAnimation()
    navigator.clipboard.writeText(copyText.value)
    copyText.value = ''
  }
}

// CONSUMINDO API DO GITHUB

(function getGitHubAPI() {
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
})()