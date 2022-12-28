const input = document.getElementById('validation-input')

input.addEventListener('blur', notOnFocus)

function notOnFocus(event, onInputBlurRemove) {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else if (event.currentTarget.value.length !== Number(input.dataset.length)) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}
