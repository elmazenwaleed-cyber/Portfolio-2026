let MouseEffect = document.getElementById("MouseEffect");
let bars = document.getElementById("bars")
let Close = document.getElementById("Close")
let menu = document.getElementById("menu")
let Screen = document.getElementById("Screen")

window.addEventListener('mousemove', function(e) {
    MouseEffect.style.top = e.clientY  + "px"
    MouseEffect.style.left = e.clientX + "px"
})

bars.addEventListener('click', function() {
    menu.classList.add("active")
})
Close.addEventListener('click', function() {
    menu.classList.remove("active")
})
Screen.addEventListener('click', function() {
    menu.classList.remove("active")
})