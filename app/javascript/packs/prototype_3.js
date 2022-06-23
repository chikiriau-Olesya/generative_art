import p5 from 'p5'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_3')[0]
  const frame = document.createElement('div')
  frame.classList.add('frame')
  frame.id = 'frame'
  container.appendChild(frame)

  let sketch = (p) => {
    let x = 100
    let y = 100

    p.setup = () => {
      let canvas = p.createCanvas(800, 800, WEBGL)
      canvas.parent('frame')
      p.background(0)
      p.frameRate(10)
    }

    p.draw = () => {
      p.background(0)
      p.rotateZ(frameCount * 0.01)
      p.rotateX(frameCount * 0.01)
      p.rotateY(frameCount * 0.01)

      p.noFill()
      p.stroke(255)

      let mapX = map(p.mouseX, 0, width, 500, 10)

      for (let i = 0; i < 100; i++) {
        p.stroke(random(255), 0, random(155))
        p.ellipse(random(-10, 10), random(-10, 10), 10 * i + 10)
      }
    }
  }

  let myp5 = new p5(sketch)
})
