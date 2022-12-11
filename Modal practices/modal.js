const showBtn = document.querySelector("#show-btn")
const closeBtn = document.querySelector("#close-btn")
const modalItems = document.querySelector("#modal-items")
const overlay = document.getElementById("overlay")
showBtn.addEventListener("click", () => {
    showBtn.classList.add("hidden")
    modalItems.classList.remove("hidden")
    overlay.classList.remove("hidden")
})
closeBtn.addEventListener("click", () => {
    modalItems.classList.add("hidden")
    overlay.classList.add("hidden")
    showBtn.classList.remove("hidden")
})
overlay.addEventListener("click", () => {
    modalItems.classList.add("hidden")
    overlay.classList.add("hidden")
    showBtn.classList.remove("hidden")
})
document.addEventListener("keydown" , (e) => {
    if (e.key == "Escape") {
        modalItems.classList.add("hidden")
        overlay.classList.add("hidden")
        showBtn.classList.remove("hidden")
    }
})
