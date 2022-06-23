import p5 from 'p5'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_2')[0]
  const frame = document.createElement('div')
  frame.classList.add('frame')
  frame.id = 'frame'
  container.appendChild(frame)

  let sketch = (p) => {
    let x = 100
    let y = 100

    p.setup = () => {
      let canvas = p.createCanvas(800, 800)
      canvas.parent('frame')
      p.background(0)
    }

    p.draw = () => {
      for (let i = 0; i < p.mouseX; i = i + 30)
        for (let j = 0; j < p.mouseY; j = j + 30) {
          p.fill(
            Math.floor(getRandomArbitrary(0, 255)),
            0,
            Math.floor(getRandomArbitrary(100, 200))
          )
          p.ellipse(i, j, 25, 25)
        }
    }
  }

  let myp5 = new p5(sketch)
})
