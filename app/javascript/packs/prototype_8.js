import p5 from 'p5'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_8')[0]
  const frame = document.createElement('div')
  frame.classList.add('frame')
  frame.id = 'frame'
  container.appendChild(frame)

  let sketch = (p) => {
    var angle,
      gen = 333

    p.setup = () => {
      let canvas = p.createCanvas(800, 800)
      canvas.parent('frame')
      p.stroke(200, 0, 255, 80)
      p.fill(127, 2, 55, 60)
    }

    p.draw = () => {
      p.background(0)
      angle = Math.sin(gen * 30) * 30

      p.push()
      p.translate(400, 400)
      p.rotate(gen * 4)
      for (var i = 0; i < 100; i++) {
        p.rotate((3 * gen) / 33)
        p.stroke(25, 34, 125)
        p.strokeWeight(0.6)
        //here i can manage sizes of curves
        p.bezier(i, i, 0, Math.cos(angle - i), 200, angle + i, i + 200, i)
      }
      p.pop()

      gen += 0.0009
    }
  }

  let myp5 = new p5(sketch)
})
