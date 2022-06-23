import p5 from 'p5'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_10')[0]
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
      angle = Math.sin(gen * 10) * 10

      p.push()
      p.translate(400, 400)
      p.rotate(gen * 4)
      for (var i = 0; i < 100; i++) {
        p.rotate((3 * gen) / 33)
        p.stroke(25, 34, 125)
        p.strokeWeight(1)
        //here i can manage sizes of curves
        p.bezier(i, i, 0, Math.cos(angle - i), 100, angle + i, i + 100, i)
      }
      p.pop()

      p.push()
      p.translate(400, 400)
      p.rotate(gen * 4)
      for (var i = 0; i < 100; i++) {
        p.rotate((3 * gen) / 33)
        p.stroke(0, 312, 12)
        p.fill(12, 122, 34, 30)
        p.strokeWeight(0.2)
        p.bezier(i, -i, 0, angle - i, 400, angle - i, i - 400, i)
      }
      p.pop()

      gen += 0.0009
    }
  }

  let myp5 = new p5(sketch)
})
