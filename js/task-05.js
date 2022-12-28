// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна 
//  отображаться строка "Anonymous".

const input = document.getElementById('name-input')
const span = document.getElementById('name-output')

input.addEventListener('input', onInputChange)

function onInputChange(event) {
    span.textContent = event.currentTarget.value
}