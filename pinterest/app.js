const columns = Array(...document.querySelectorAll('.column'))
console.log(columns);
let matrix = [0, 0, 0]
const addNewImages = 3
const mini = 1
const maxi = 122

window.onscroll = (ev) => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        // console.log("you're at the bottom of the page");
        for (let i = 0; i < addNewImages; i++) {
            addImage()
        }
    }
};

const observer = new IntersectionObserver((entries) => {
    entries
    .filter(isIntersecting)
    .forEach(loadImg)
})

const randomImg = () => Math.floor(Math.random() * (maxi - mini)) + mini

const createImg = () => {
    const container = document.createElement('div');
    const link = document.createElement('a');
    const img = document.createElement('img');
    container.className = "image-container"
    link.className = "image"
    link.setAttribute("href","#")
    img.dataset.src = `https://randomfox.ca/images/${randomImg()}.jpg`
    link.appendChild(img)
    container.appendChild(link)
    return container
}

const addImage = () => {
    const newImg = createImg()
    // console.log(newImg);
    let min = getMinimun()
    columns[min].appendChild(newImg)
    matrix[min] += newImg.children[0].children[0].clientHeight
    console.log(matrix);
}

const getMinimun = () => {
    if (matrix[0] <= matrix[1] && matrix[0] <= matrix[2]){
        return 0
    } else  if(matrix[1] <= matrix[2]){
        return 1
    } else return 2
}