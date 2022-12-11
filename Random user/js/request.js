// api
const API = 'https://randomuser.me/api/?results=9'
// functions
// toggle loader
const overlay = document.getElementById('overlay')
const toggle = true
const toggleLoader = function (toggle) {
    if (toggle) {
        overlay.classList.remove("hidden")
    }else {
        overlay.classList.add("hidden")
    }
}


const getData = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.addEventListener("readystatechange", () => {
            if (request.readyState < 4) {
                toggleLoader(true)
            }else if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data.results)
                toggleLoader(false)
            }else if (request.readyState === 4) {
                reject("Error")
                toggleLoader(false)
            }
                
        } )
            request.open("GET", resource)
            request.send()
    } )

}
const reload = () => {
    getData(API)
        .then((data) => {
            updateUI(data)
        })
        .catch((err) => {
            console.log(err)
        })
}
document.addEventListener("DOMContentLoaded", reload)


