const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const data = {}

    const {
        elements: {email, password}
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert(`all fields should be filled in`);
        return
    }
    
    data.email = email.value;
    data.password = password.value

    console.log(data);
    event.currentTarget.reset();
}