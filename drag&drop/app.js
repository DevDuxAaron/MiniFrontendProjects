const initApp = () => {
    const droparea = document.querySelector('.droparea')

    const active = () => droparea.classList.add('green-border')

    const inactive = () => droparea.classList.remove('green-border')

    const prevents = (e) => e.preventDefault()

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach( evtName => {
        droparea.addEventListener(evtName, prevents)
    })
    ['dragenter', 'dragover'].forEach(evtName => {
        droparea.addEventListener(evtName, active)
    })
    ['dragleave', 'drop'].forEach(evtName => {
        droparea.addEventListener(evtName, inactive)
    })

    droparea.addEventListener('drop',hadleDrop)
}

document.addEventListener('DOMContentLoaded', initApp)

const hadleDrop = (e) => {
    const dt = e.dataTransfer
    const files = dt.files
    // console.log(files);
    const fileArray = [...files];
    // console.log(fileArray);
}