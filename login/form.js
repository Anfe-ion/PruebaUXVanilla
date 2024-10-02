document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const usuario = document.getElementById('usuario');
        const contraseña = document.getElementById('contraseña');

        if (!usuario.value.trim()) {
            alert('El campo de usuario es obligatorio.');
            return;
        }

        if (!contraseña.value.trim()) {
            alert('El campo de contraseña es obligatorio.');
            return;
        }

        window.location.href = '../panel/panel.html';
    });
});
