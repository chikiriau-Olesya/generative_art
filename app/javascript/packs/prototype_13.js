//api
// let apiKey = '5de7c12586e7ea8e8536387ce01bec46'
// let city = 'Moscow'
// let url = `https://api.openweathermap.org/data/2.5/onecall?q=${city}&lang=ru&units=metric&appid=${apiKey}`
let wind = 1000
let temp = 100

let apiKey = '5de7c12586e7ea8e8536387ce01bec46'
let lat = '55.751244'
let long = '37.618423'
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=daily&appid=${apiKey}`
let urlCity = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`

import p5 from 'p5'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_13')[0]
  const cityInput = document.createElement('input')
  const cityButton = document.createElement('button')
  container.appendChild(cityInput)
  container.appendChild(cityButton)

  cityButton.addEventListener('submit', (e) => {
    e.preventDefault()
    const cityInput = cityInput.value
  })

  fetch(urlCity)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      for (var i = 0; i < 1; i++) {
        //wind = data.0[i].lat
        console.log(data.lat)
      }
    })

  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      temp = data.current.temp
      for (var i = 0; i < 48; i++) {
        wind = data.hourly[i].wind_speed
        console.log(wind)
      }
      // for (var i = 0; i < 48; i++) {
      //   temp = data.current[i].temp
      //   console.log(temp)
      // }
    })

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
      p.stroke(200, 0, 255, 80)
      //p.fill(127, 2, 55, 60)
      p.fill(0, 0, 255, 80)

      p.input = p.createInput()
      p.input.position(20, 30)

      // inputVal = p.createInput()
      // p.inputWeather.position(20, 80)
      // p.button = p.createButton('submit')
      // p.button.position(160, 80)
    }

    p.draw = () => {
      p.background(255)
      angle = Math.sin(gen * 30) * 30 * wind

      p.push()
      p.translate(400, 400)
      p.rotate(gen * 4)
      //here I cam manage amount of curves
      for (var i = 0; i < 100; i++) {
        p.rotate((3 * gen) / 33)
        p.stroke(25, 34, 125)
        p.strokeWeight(1)
        //here i can manage sizes of curves
        p.bezier(i, i, 0, Math.cos(angle - i), 300, angle + i, i + 300, i)
      }
      p.pop()

      p.push()
      p.translate(400, 400)
      p.rotate(gen * 4)
      for (var i = 0; i < 100; i++) {
        p.rotate((3 * gen) / 33)
        p.stroke(0, 0, 0, 90)
        p.fill(255, 255, 255, 20)
        //  p.fill(255, wind - 95, wind - 255, 20)
        p.strokeWeight(0.1)
        p.bezier(i, -i, 0, angle - i, 400, angle - i, i - 400, i)
      }
      p.pop()

      gen += 0.0009

      p.push()
      p.translate(400, 400)
      p.rotate(gen * 8.95)
      drawName()
      p.pop()
    }

    function drawName() {
      for (var i = 0; i < 9; i++) {
        p.rotate((2 * gen) / 1000)
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
