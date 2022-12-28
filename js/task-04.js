let counterValue = 0;

const minus = document.querySelector('button[data-action="decrement"]');
const value = document.getElementById('value')
const plus = document.querySelector('button[data-action="increment"]');

function add() {
    counterValue += 1;
    value.textContent = counterValue
}

function remove() {
    counterValue -= 1;
    value.textContent = counterValue
}

minus.addEventListener('click', remove)

plus.addEventListener('click', add)

