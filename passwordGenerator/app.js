const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtuvwxyz!\"$%&/()=?@~`\\.\';:+=^*_-0123456789';
let output = document.getElementById('output')

const randomValue = (value) => Math.floor(Math.random() * value)

const genPassword = () => {
    let length = document.getElementById('length').value
    document.getElementById('length-val').textContent = length

    let str = ''
    for (let i = 0; i < length; i++) {
        let random = randomValue(characters.length)
        str += characters.charAt(random)
    }
    output.value = str
}

const copyClipboard = () => {
    output.select()
    document.execCommand('copy')
    alert("Password copied")
}