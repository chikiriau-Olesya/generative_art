import p5 from 'p5'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_6')[0]
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
      p.noStroke()
    }

    p.draw = () => {
      p.background(51)
      let time = p.millis() * 0.0001
      for (let i = 0; i < 2000; i++) {
        let horizontal = 1600 * Math.sin(i + time)
        let vertical = i % 800
        p.fill((i + time) % 256, i % 200, i % 1000)
        p.ellipse(horizontal, vertical, 1, 133)
      }
    }
  }

  let myp5 = new p5(sketch)
})
