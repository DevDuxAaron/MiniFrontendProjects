const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const milisecond = document.getElementById('milisecond')

let stopwatchId
let countH = 0
let countM = 0
let countS = 0
let countMs = 0

let isRunnning = false

const start = document.querySelector('#start')
const reset = document.querySelector('#reset')
const pause = document.querySelector('#pause')

start.addEventListener('click', () => {
    if (!isRunnning) {
        stopwatchId = setInterval(() => {
            increment()
            update()
        }, 1)
        isRunnning = true
    }
})
pause.addEventListener('click', () => {
    clearInterval(stopwatchId)
    isRunnning = false
})
reset.addEventListener('click', () => {
    countH = 0
    countM = 0
    countS = 0
    countMs = 0
    isRunnning = false
    update()
    clearInterval(stopwatchId)
})

const increment = () => {
    if (countMs < 999) {
        countMs++
    } else {
        countMs = 0
        if (countS < 60) {
            countS++
        } else {
            countS = 0
            if (countM < 60) {
                countM++
            } else {
                countM = 0
                if (countH < 60) {
                    countH++
                } else {
                    countH = 0
                }
            }
        }
    }
}

const update = () => {
    let len = (countMs.toString()).length
    let comp = (len == 2) ? "0" : (len == 1) ? "00": ""
    milisecond.textContent = comp + countMs

    second.textContent = calculate(countS)
    minute.textContent = calculate(countM)
    hour.textContent = calculate(countH)
}
const calculate = (count) => {
    let len = (count.toString()).length
    let comp = (len == 1) ? "0" : " "
    return comp + count
}