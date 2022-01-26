const classAnimate = 'animate'
const class_svg_1 = document.querySelector('.dataSvg')
const class_svg_2 = document.querySelector('.dataSvg2')
const lock = document.getElementById('lock')

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

// ANIMAÇÃO AVISO DA CAIXA DE TEXTO

texto.addEventListener('mouseover', () => {
  animation = setTimeout(() => {
    let textoAviso = document.querySelector('.text-info')
    textoAviso.classList.remove('text-info-out')
    textoAviso.classList.add('text-info-show')
  }, 1500);
})


texto.addEventListener('mouseout', () => {
  clearTimeout(animation)
  let textoAviso = document.querySelector('.text-info')
  textoAviso.classList.remove('text-info-show')
  textoAviso.classList.add('text-info-out')
})