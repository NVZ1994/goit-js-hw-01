function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на
//  button.change-color и выводит значение цвета в span.color.

const btn = document.querySelector('.change-color')
const span = document.querySelector('.color')

btn.addEventListener('click', colorChanger)

function colorChanger() {
  const body = document.body;
  body.style.backgroundColor = getRandomHexColor()
  span.textContent = getRandomHexColor()
}