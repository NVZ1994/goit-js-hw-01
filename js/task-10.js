function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]'); 
const destroyBtn = document.querySelector('button[data-destroy]'); 
const input = document.querySelector('#controls > input')
const boxes = document.getElementById('boxes')


const createBoxes = amount => {
    const elementsToAdd = []
    for (let i = 0; i < amount; i += 1) {
        const div = document.createElement('div')
        div.style.height = `${30 + 10 * i}px`
        div.style.width = `${30 + 10 * i}px`
        div.style.background = getRandomHexColor()
        div.textContent = getRandomHexColor()
        elementsToAdd.push(div)
    }
    return elementsToAdd
}
const destroyBoxes = () => {
    boxes.innerHTML = ''
}
createBtn.addEventListener('click', () => {
    let boxesToAdd = createBoxes(input.value)
    boxes.append(...boxesToAdd)
})
console.log(input.value)
destroyBtn.addEventListener('click', () => {
    destroyBoxes.call()
})

// сделал не сам )=