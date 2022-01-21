const classAnimate = 'animate'
const class_svg_1 = document.querySelector('.dataSvg')
const class_svg_2 = document.querySelector('.dataSvg2')
const lock = document.getElementById('lock')

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

function animar(WhoCall) {
  let responseWhoCall = WhoCall
  class_svg_1.classList.add(classAnimate)
  class_svg_2.classList.add(classAnimate)
  lock.classList.add(classAnimate)
  stop(responseWhoCall)
}
