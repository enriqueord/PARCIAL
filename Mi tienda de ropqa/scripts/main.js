document.addEventListener('DOMContentLoaded', () => {
    const botonesComprar = document.querySelectorAll('button');

    botonesComprar.forEach(boton => {
        boton.addEventListener('click', (event) => {
            const producto = event.target.closest('.producto');
            alert('Producto agregado al carrito');
            producto.style.backgroundColor = 'var(--gris-medio-claro)';
            setTimeout(() => {
                producto.style.backgroundColor = 'var(--blanco)';
            }, 500);
        });
    });
    const header = document.querySelector('header');
    header.style.backgroundColor = 'var(--gris-muy-oscuro)';

    const tituloPrincipal = document.getElementById('introduccion').querySelector('h2');
    tituloPrincipal.style.color = 'var(--gris-muy-oscuro)';
});
