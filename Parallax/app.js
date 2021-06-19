const d = document
const text = d.getElementById('text')
const bird1 = d.getElementById('bird1')
const bird2 = d.getElementById('bird2')
const btn = d.getElementById('btn')
const rocks = d.getElementById('rocks')
const forest = d.getElementById('forest')
const water = d.getElementById('water')
const header = d.getElementById('header')

window.addEventListener('scroll', () => {
    let value = window.scrollY

    if (38 + value * 0.5 <= 100)
        text.style.top = 38 + value * 0.5 + '%'
    bird1.style.top = value * -1.1 + 'px'
    bird1.style.left = value * 1.5 + 'px'
    bird2.style.top = value * -1.1 + 'px'
    bird2.style.left = value * -3 + 'px'
    if (330 + value * 1.5 <= 460)
        btn.style.top = 330 + value * 1.5 + 'px'
    rocks.style.top = value * -0.12 + 'px'
    forest.style.top = value * 0.25 + 'px'
    if (value * 0.5 <= 500)
        header.style.top = value * 0.5 + 'px'
})