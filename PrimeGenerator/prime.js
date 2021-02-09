const calc = document.querySelector('.calculate')
const reset = document.querySelector('.reset')
const input = document.querySelector('.number')
const table = document.querySelector('.primes')
const addUp = document.querySelector('.sumPrimes')
let currentNumber = 1
let matrix = []

calc.addEventListener('click', () => {
    let number = input.value
    if (number != ""){
        number = parseInt(number, 10)
        for (let index = 0; index < number; index++) {
            createInput()
            currentNumber++
        }
        let sum = 0
        for (let i = 0; i < matrix.length; i++) {
            sum += matrix[i]
            if ((i + 1) % 4 == 0){
                createSum(sum)
                sum = 0
            }
        }
        if (sum != 0) {
            createSum(sum)
            sum = 0
        }
    }
})
reset.addEventListener('click', () => {
    cleanTable()
})
const createSum = (sum) => {
    const item = document.createElement('li')
    item.textContent = sum
    addUp.appendChild(item)
}
const createInput = () => {
    const item = document.createElement('li')
    matrix.push(generateNextPrime(currentNumber))
    item.innerHTML = generateNextPrime(currentNumber)
    table.appendChild(item)
}
const generateNextPrime = (number) => {
    let count = 0
    let num = 1
    while (count != number) {
        if (isPrime(num))
            count++
        num++
    }
    return num -1
}
const isPrime = (n) => {
    if (n <= 1)
        return false
    else {
        for (let i=2; i < Math.floor(Math.sqrt(n))+1;i++) {
            if (n % i == 0){
                return false
            }
        }
    }
    return true
}
const cleanTable = () => {
    matrix = []
    input.value = ""
    currentNumber = 1
    while(table.hasChildNodes){
        let aux = table.lastChild
        if (!aux)
            break
        table.removeChild(aux)
    }
    while(addUp.hasChildNodes){
        let aux = addUp.lastChild
        if (!aux)
            break
        addUp.removeChild(aux)
    }
}