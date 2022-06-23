import p5 from 'p5'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}
let dots = []
let count
let cellSize = 100

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_4')[0]
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

      let xCellsCount = canvas / cellSize
      let yCellsCount = canvas / cellSize
      count = xCellsCount * yCellsCount

      for (let yCount = 0; yCount < yCellsCount; yCount++) {
        for (let xCount = 0; xCount < xCellsCount; xCount++) {
          dots.push(createDot({ xCount, yCount }))
        }
      }
    }

    p.draw = () => {
      p.background('#D2C0D4')

      for (let i = 0; i < count; i++) {
        dots[i].move()
        dots[i].display()
      }
    }
  }

  let myp5 = new p5(sketch)

  function createDot({
    xCount,
    yCount,
    d = Math.floor(getRandomArbitrary(40, 50)),
    speed = Math.floor(getRandomArbitrary(1, 3))
  }) {
    let paddingX = cellSize / 2
    let paddingY = cellSize / 2
    let directionX = 1
    let directionY = 1

    return {
      move() {
        paddingX = paddingX + speed * directionX
        if (paddingX > cellSize || paddingX < 0) {
          directionX *= -1
          paddingY = paddingY + speed * directionY
          d = Math.floor(getRandomArbitrary(40, 60))
        }
        if (paddingY > cellSize || paddingY < 0) {
          directionY *= -1
          paddingY = paddingY + speed * directionY
          d = Math.floor(getRandomArbitrary(40, 60))
        }
      },

      display() {
        let x = xCount * cellSize + paddingX
        let y = yCount * cellSize + paddingY
        if (p.mouseX < width / 2) {
          p.noStroke()
          p.fill(255)
        }
        if (p.mouseX > width / 2) {
          p.stroke(255)
          p.strokeWeight(3)
          p.noFill()
        }

        if (p.mouseIsPressed) {
          p.noStroke()
          p.fill(
            random(0, 255),
            random(80, 100),
            random(200, 255)
          )((x = xCount * p.mouseY + paddingX)),
            (y = yCount * p.mouseY + paddingY)
        }

        p.ellipse(x, y, d)
      }
    }
  }
})
