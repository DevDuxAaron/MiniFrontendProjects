const btnMenu = document.querySelector(".btn-menu")
const menu = document.querySelector('.menu')
const menuItems = document.querySelector('.menu-items')

let sw = true

const displayMenu = () => {
    if (sw) {
        menu.style.setProperty('clip-path','circle(75%)')
        sw = false
    } else {
        menu.style.setProperty('clip-path','circle(.5% at 93% 93%)')
        sw = true
    }
    btnMenu.classList.toggle('is-active')
}

export default displayMenu