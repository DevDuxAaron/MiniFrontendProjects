const $blue = document.getElementById('blue')
const $pink = document.getElementById('pink')
const $green = document.getElementById('green')
const $purple = document.getElementById('purple')
const $yellow = document.getElementById('yellow')

const $background = document.querySelector('.container-image')
const $title = Array(...document.querySelectorAll('.title'))
const $btnLight = document.querySelector('.btn-light')
const $btnDark = document.querySelector('.btn-dark')

$blue.addEventListener('click', () => {
    change('blue')
})
$pink.addEventListener('click', () => {
    change('pink')
})
$green.addEventListener('click', () => {
    change('green')
})
$purple.addEventListener('click', () => {
    change('purple')
})
$yellow.addEventListener('click', () => {
    change('yellow')
})

const change = (color) => {
    $background.style.backgroundColor = `var(--${color})`
    for (let i = 0; i < $title.length; i++) {
        $title[i].style.color = `var(--${color})`
    }

    $btnDark.style.backgroundColor = `var(--${color})`
    $btnLight.style.color = `var(--${color})`
    $btnLight.style.border = `2px solid var(--${color})`
}