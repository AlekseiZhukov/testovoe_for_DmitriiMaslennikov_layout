const buttons_language_switching = document.querySelectorAll(".language_switching")

function toggleActive (el) {
    buttons_language_switching.forEach(item => {
        if (el !== item) {
            item.classList.remove("active")
            el.classList.add("active")
        }
    })
}
buttons_language_switching.forEach(item => item.addEventListener("click", ()=>{
    toggleActive(item)
}))

