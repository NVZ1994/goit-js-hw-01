function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color')
const span = document.querySelector('.color')

btn.addEventListener('click', colorChanger)

function colorChanger() {
  const body = document.body;
  const randomizer = getRandomHexColor()
  body.style.backgroundColor = getRandomHexColor()
  span.textContent = getRandomHexColor()
}