let wind = 1000
let temp = 100

let apiKey = '5de7c12586e7ea8e8536387ce01bec46'
let lat = '55.751244'
let long = '37.618423'
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=daily&appid=${apiKey}`

fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data.current.temp)
    temp = data.current.temp
    for (var i = 0; i < 48; i++) {
      wind = data.hourly[i].wind_speed
      console.log(wind)
    }
  })

import p5 from 'p5'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_12')[0]
  const frame = document.createElement('div')
  frame.classList.add('frame')
  frame.id = 'frame'
  container.appendChild(frame)

  //sketch
  let sketch = (p) => {
    var angle,
      gen = 333

    p.setup = () => {
      let canvas = p.createCanvas(800, 800)
      canvas.parent('frame')
      // p.stroke(200, 0, 255, 80)
      // //p.fill(127, 2, 55, 60)
      // p.fill(0, 0, 255, 60)

      p.input = p.createInput()
      p.input.position(20, 30)
    }

    p.draw = () => {
      p.background(255)
      angle = Math.sin(gen * 30) * 30 * wind

      p.push()
      p.translate(400, 400)
      p.rotate(gen * 4)
      for (var i = 0; i < Math.floor(temp / 3); i++) {
        p.rotate((3 * gen) / 33)
        //p.stroke(25, temp - 134, 125)
        p.stroke(wind * 20, 0, wind + 134, 80)
        p.fill(0, wind * 12, 255, 70)
        //p.fill(255, 18, 89, 80)
        p.strokeWeight(1)
        p.bezier(i, i, 0, Math.cos(angle - i), 300, angle + i, i + 300, i)
      }
      p.pop()

      p.push()
      p.translate(400, 400)
      p.rotate(gen * 4)
      for (var i = 0; i < 100; i++) {
        p.rotate((3 * gen) / 33)
        p.stroke(0, 0, 0, 90)
        p.fill(255, 255, 255, 10)
        p.strokeWeight(0.1)
        p.bezier(i, -i, 0, angle - i, 400, angle - i, i - 400, i)
      }
      p.pop()

      // p.push()
      // p.translate(400, 400)
      // p.rotate(gen * 8.95)
      // for (var i = 0; i < 9; i++) {
      //   p.rotate((2 * gen) / 1000)
      //   p.textSize(64)
      //   p.textFont('Georgia')
      //   p.fill(0, 0, 0)
      //   p.noStroke()
      //   //последними цыфрами управляй расстрянием вжуха
      //   p.text('kindness', 32, 50)
      // }
      // p.pop()
      //
      gen += 0.0009

      p.push()
      p.translate(400, 400)
      p.rotate(gen * 8.96)
      drawName()
      p.pop()
    }

    function drawName() {
      for (var i = 0; i < 9; i++) {
        p.rotate((2 * gen) / 990)
        p.textSize(64)
        p.textFont('Georgia')
        var name = p.input.value()
        p.fill(0, 0, 0)
        p.text(name, 32, 50)
      }
    }
  }

  let myp5 = new p5(sketch)
})
