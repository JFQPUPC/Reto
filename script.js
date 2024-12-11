const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const container = document.querySelector('.container');

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (username && password) {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Por favor, complete todos los campos');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const email = document.getElementById('register-email').value.trim();

    if (username && password && email) {
        alert('Registro exitoso');
    } else {
        alert('Por favor, complete todos los campos');
    }
});
