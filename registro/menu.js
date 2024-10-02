document.addEventListener('DOMContentLoaded', function () {
    const menuItems = [
        { name: 'Inicio', link: '#' },
        { name: 'Transparencia', link: '#' },
        { name: 'Atención a la ciudadanía', link: '#' },
        { name: 'Registro', link: '/registro/registro.html' },
        { name: 'Ingreso', link: '../login/login.html' },
        { name: 'IPS y proveedores', link: '#' },
        { name: 'Entidades territoriales', link: '#' },
        { name: 'Nuestra entidad', link: '#' },
        { name: 'Análitica', link: '#' }
    ];

    const menu = document.getElementById('menu');

    menuItems.forEach(function (item) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.name;
        a.href = item.link;
        li.appendChild(a);
        menu.appendChild(li);
    });
});


