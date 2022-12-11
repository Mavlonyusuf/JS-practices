const form = document.getElementById('form')
const formButton = document.getElementById('form__button')
const user = document.getElementById('user')
const deleteBtn = document.getElementById("delete__btn")
const clearBtn = document.getElementById('clear__button')


// update ul 
const updateUI = (data) => {
    user.innerHTML = ""
    data.forEach((item) => {
        const {picture, name, dob, location, gender} = item
        user.innerHTML += `
        
        <li class="user__item">
          <button onclick="test_function()" id="delete__btn" class="user__delete--btn">
            <i class="fas fa-trash"></i>
          </button>
          <img
            class="user__img"
            alt="User photo"
            src="${item.picture.large}"
            width="100"
            height="100"
          />
          <div class="user__name">
            <span class="material-symbols-outlined">badge</span>
            <span>- ${item.name.title} ${item.name.first} ${item.name.last}</span>
          </div>
          <div class="user__year">
            <span class="material-symbols-outlined">cake</span>
            <span>- ${item.dob.age} years old.</span>
          </div>
          <div class="user__location">
            <span class="material-symbols-outlined">person_pin_circle</span>
            <span>-${item.location.city}, ${item.location.country}</span>
          </div>
          <div class="user__gender">
            <span class="material-symbols-outlined">man</span>
            <span>- ${item.gender}</span>
          </div>
        </li>
        
        `
    })
}



// clear
clearBtn.addEventListener("click", (e) => {
  e.preventDefault()
  user.innerHTML = ""
  clearBtn.classList.add("hidden")
} )

// refresh
formButton.addEventListener("click", (e) => {
    clearBtn.classList.remove("hidden")
    e.preventDefault()
    reload()
    
})
// search by name

form["form__input"].addEventListener("input", () => {
    const inputValue = form["form__input"].value
    const names = document.querySelectorAll(".user__name")
    names.forEach((item) => {
     if(item.lastElementChild.textContent.toLowerCase().includes(inputValue)) {
        item.parentElement.classList.remove("hidden")
      }else {
        item.parentElement.classList.add("hidden")
      }
    })
})

// delete button
function test_function(){
  document.getElementById('delete__btn').parentElement.remove();
  if (!user.children.length) {
    clearBtn.classList.add("hidden")
  }
}


// document.addEventListener('click', (e) => {
//   if (e.target.classList[0] === "user__delete--btn") {
//     e.target.parentElement.remove()
//   }
  // if (!user.children.length) {
  //   clearBtn.classList.add("hidden")
//   }
// })