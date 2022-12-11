const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

// dark va light buttonlardan hidden classini olib tashlaydi

const modeToggle = () => {
    darkBtn.classList.toggle("hidden")
    lightBtn.classList.toggle("hidden")
    body.classList.toggle("dark-mode")
}

const modalLocal = localStorage.getItem("mode")
if (modalLocal) {
    body.classList.add("dark-mode")
    darkBtn.classList.toggle("hidden")
    lightBtn.classList.toggle("hidden")
} 

// dark va light buttonlarni addEventlistener qilish
lightBtn.addEventListener("click" , () => {
    modeToggle()
    localStorage.setItem("mode", "")
})
darkBtn.addEventListener("click" , () => {
    modeToggle()
    localStorage.setItem("mode", "dark-mode")
})