document.getElementById('loginForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let errorElement = document.getElementById('error');

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let namePattern = /^[a-zA-Z\s]{3,40}$/; 

    if (name === '' || username === '' || email === '' || password === '') {
        event.preventDefault();
        errorElement.textContent = 'Por favor, complete todos los campos.';
        return;
    }

    // Validación de nombre
    if (!namePattern.test(name)) {
        event.preventDefault();
        errorElement.textContent = 'El nombre debe tener entre 3 y 40 caracteres y solo puede contener letras y espacios.';
        return;
    }

    // Validación de usuario
    if (username.length < 3 || username.length > 20) {
        event.preventDefault();
        errorElement.textContent = 'El nombre de usuario debe tener entre 3 y 20 caracteres.';
        return;
    }

    // Validación de correo electrónico
    if (!emailPattern.test(email)) {
        event.preventDefault();
        errorElement.textContent = 'Por favor, ingrese un correo electrónico válido.';
        return;
    }

    // Validación de contraseña
    if (password.length < 6) {
        event.preventDefault();
        errorElement.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        return;
    }

    errorElement.textContent = ''; 
});
