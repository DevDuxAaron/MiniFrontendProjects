// import { displayMenu } from './menu'

const btnMenu = document.querySelector(".btn-menu")
const btnMenuItems = Array(...document.querySelectorAll(".menu-item"))
const btnUp = document.querySelector(".btn-up")
const menuItems = document.querySelector('.menu-items')
const menu = document.querySelector('.menu')

let sw = true

const displayMenu = () => {
    if (sw) {
        menu.style.setProperty('clip-path','circle(75%)')
        sw = false
    } else {
        menu.style.setProperty('clip-path','circle(.5% at 93% 90%)')
        sw = true
    }
    btnMenu.classList.toggle('is-active')
}
const playMenu = (e) => {
    if (e.target.matches('li') || e.target.matches(`li *`)) {
        console.log("boton");
        displayMenu()
    }
}
const arrowUp = () => {

}
const displayUp = (e) => {
    if (window.scrollY > 10) {
        btnUp.style.setProperty('display', 'flex')
    } else {
        btnUp.style.setProperty('display', 'none')
    }
}

btnMenu.addEventListener("click", displayMenu)
menuItems.addEventListener('click', playMenu)
document.addEventListener("scroll", displayUp)