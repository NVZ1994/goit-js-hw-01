const input = document.querySelector('input[type="range"]')
const span = document.getElementById('text')

input.addEventListener('input', checker)

function checker(event) {
    span.style.fontSize = event.target.value + 'px'
}