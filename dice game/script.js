//  buttons

const newBtn = document.querySelector(".btn--new")
const btnHold = document.querySelector(".btn--hold")
const btnRoll = document.querySelector(".btn--roll")
// currentScore

const currentScore1 = document.getElementById("score--0")
const currentScore2 = document.getElementById("score--1")
const current1 = document.getElementById("current--0")
const current2 = document.getElementById("current--1")

//  players

const player1 = document.querySelector(".player--0")
const player2 = document.querySelector(".player--1")

//  dice image

const diceImage = document.querySelector(".dice")
diceImage.style.display = "none"
current1.textContent = 0

// variables

let currentScore = 0
let activePlayer = 0
let score = [0, 0]
let gameOver = true

// functions

function switchPlayer () {
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0 ? 1 : 0 
    player1.classList.toggle("player--active")
    player2.classList.toggle("player--active")
}

// click btnRoll

btnRoll.addEventListener("click", () => {
    if(gameOver) {
        diceImage.style.display = "block"
        const random = Math.floor(Math.random()*6 + 1)
        diceImage.src = `./dice-${random}.png`
        if (random !== 1) {
            currentScore += random
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
            switchPlayer()
        }
    }
})

// click btnHold 
btnHold.addEventListener("click", () => {
    if (gameOver) {
        score[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
        if (score[activePlayer] >= 100) {
            gameOver = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        } else {
            switchPlayer()
        }
    }
    }
) 

//  click new button
newBtn.addEventListener("click", () => {
    diceImage.style.display = "none"
    activePlayer = 0
    document.querySelector(`.player--1`).classList.remove('player--winner')
    document.querySelector(`.player--0`).classList.remove('player--winner')
    document.getElementById(`current--0`).textContent = 0
    document.getElementById(`current--1`).textContent = 0
    document.getElementById(`score--0`).textContent = 0
    document.getElementById(`score--1`).textContent = 0
    gameOver = true
    score = [0, 0]
})
