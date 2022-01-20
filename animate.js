const classAnimate = 'animate'
const class_svg_1 = document.querySelector('.dataSvg')
const class_svg_2 = document.querySelector('.dataSvg2')
const lock = document.getElementById('lock')

async function stop() {
  setTimeout(() => {
    class_svg_1.classList.remove(classAnimate)
    class_svg_2.classList.remove(classAnimate)
    lock.classList.remove(classAnimate)
    cript()
  }, 1000)
}

function animar() {
  class_svg_1.classList.add(classAnimate)
  class_svg_2.classList.add(classAnimate)
  lock.classList.add(classAnimate)
  stop()
}
