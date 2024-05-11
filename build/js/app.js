document.addEventListener('DOMContentLoaded', () => {
    crearGaleria();
})

function crearGaleria() {
    const NUM_IMAGES = 12
    const galeria = document.querySelector('.galeria-imagenes')


    for (let i = 1; i <= NUM_IMAGES; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/grande/${i}.jpg`;
        imagen.alt = `Imagen ${i} galeria`;

        //Event Handler
        imagen.onclick = function() {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i) {

    //Generar modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');

    //Agregar al HTML
    const body = document.querySelector('body');
    body.appendChild(modal)
}