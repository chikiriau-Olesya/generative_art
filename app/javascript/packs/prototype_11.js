let wind = 1000
let windDeg = 0
let temp = 0

const text = ['love', 'kind']

let apiKey = '5de7c12586e7ea8e8536387ce01bec46'
let lat = '55.751244'
let long = '37.618423'
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=daily&appid=${apiKey}`

fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data.hourly)
    //temp = data.current.temp
    for (var i = 0; i < 48; i++) {
      wind = data.hourly[i].wind_speed
      console.log(wind)
    }
    for (var i = 0; i < 48; i++) {
      temp = data.hourly[i].humidity
      console.log(temp)
    }
    for (var i = 0; i < 48; i++) {
      windDeg = data.hourly[i].wind_deg
      //console.log(windDeg)
    }
  })

import p5 from 'p5'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_11')[0]
  const frame = document.createElement('div')
  frame.classList.add('frame')
  frame.id = 'frame'
  container.appendChild(frame)

  const letter = document.createElement('div')
  letter.classList.add('letter')
  frame.appendChild(letter)

  //sketch
  let sketch = (p) => {
    var angle,
      gen = 333

    let img
    function preload() {
      img = p.loadImage('/assets/bc.jpg')
    }

    p.setup = () => {
      let canvas = p.createCanvas(1440, 840)
      canvas.parent('frame')
      preload()

      p.input = p.createInput()
      p.input.position(610, 760)
    }

    p.draw = () => {
      p.background(img)
      angle = Math.sin(gen * 30) * 30 * wind

      p.push()
      p.translate(720, 400)
      p.rotate(gen * 4)
      for (var i = 0; i < 72; i++) {
        p.rotate((3 * gen) / 33)
        p.stroke(0, 255, temp - 20, 50)
        p.stroke('#C5FF8E')
        p.fill(windDeg - 32, windDeg * 2, 91, 90)
        p.strokeWeight(1)
        p.bezier(
          i,
          i,
          0,
          Math.cos(angle - i),
          windDeg,
          angle + i,
          i + windDeg * 5,
          i
        )
      }
      p.pop()

      p.push()
      p.translate(720, 400)
      p.rotate(gen * 4)
      for (var i = 0; i < 100; i++) {
        p.rotate((3 * gen) / 33)
        p.stroke('#072D37')
        p.fill(0, 0, 0, 0)
        p.strokeWeight(0.3)
        p.bezier(i, -i, 0, angle - i, 500, angle - i, i - 500, i)
      }
      p.pop()

      gen += 0.0009

      p.push()
      p.translate(720, 400)
      p.rotate(gen * 2.96)
      drawName()
      p.pop()
    }

    function drawName() {
      for (var i = 0; i < 9; i++) {
        p.rotate((2 * gen) / 990)
        p.textSize(80)
        p.textFont('BeforeTheRain')
        var name = p.input.value()
        p.fill('#C5FF8E')
        p.text(name, 40, 90)
      }
    }
  }

  let myp5 = new p5(sketch)
})
