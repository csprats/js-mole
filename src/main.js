const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeleft = document.getElementById('time')
const score = document.getElementById('score')

let time = 60
let result = 0
let hitPosition = 0

function moveMole() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')
  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('click', () => {
      if (square.id == hitPosition) {
        result++
        score.textContent = result
        moveMole()
      }
  })
})

function quitTime() {
  time--
  timeleft.textContent = time
  if (time == 0) {
    alert('The time end! Score: ' + result)
    document.location.reload()
  }
}

setInterval(quitTime, 1000)
moveMole()