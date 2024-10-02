document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const modal = document.getElementById('modalRegistro');
    const btnEntrar = document.getElementById('btnEntrar');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const nombres = document.getElementById('nombres');
        const apellidos = document.getElementById('apellidos');
        const celular = document.getElementById('celular');
        const telefono = document.getElementById('telefono');
        const usuario = document.getElementById('usuario');
        const contrasena = document.getElementById('contraseña');
        
        const errores = [];

        if (!nombres.value.trim()) {
            errores.push('El campo de nombres es obligatorio');
            nombres.classList.add('error');
        } else {
            nombres.classList.remove('error');
        }

        if (!apellidos.value.trim()) {
            errores.push('El campo de apellidos es obligatorio');
            apellidos.classList.add('error');
        } else {
            apellidos.classList.remove('error');
        }

        if (!validarCelular(celular.value)) {
            errores.push('El número de celular es inválido');
            celular.classList.add('error');
        } else {
            celular.classList.remove('error');
        }

        if (!validarTelefono(telefono.value)) {
            errores.push('El número de teléfono es inválido');
            telefono.classList.add('error');
        } else {
            telefono.classList.remove('error');
        }

        if (!usuario.value.trim()) {
            errores.push('El nombre de usuario es obligatorio');
            usuario.classList.add('error');
        } else {
            usuario.classList.remove('error');
        }

        if (!validarContrasena(contrasena.value)) {
            errores.push('La contraseña debe tener al menos 8 caracteres');
            contrasena.classList.add('error');
        } else {
            contrasena.classList.remove('error');
        }

        if (errores.length === 0) {
            mostrarModal();
        } else {
            alert(errores.join('\n'));
        }
    });

    function mostrarModal() {
        modal.style.display = 'flex'; // Mostrar el modal
    }

    btnEntrar.addEventListener('click', function () {
        window.location.href = '../login/login.html'; // Redirigir a la página de login
    });

    function validarCelular(celular) {
        const regex = /^[0-9]{10}$/;
        return regex.test(celular);
    }

    function validarTelefono(telefono) {
        const regex = /^[0-9]{7,10}$/;
        return regex.test(telefono);
    }

    function validarContrasena(contrasena) {
        return contrasena.length >= 8;
    }
});
