// Constante para completar la ruta de la API.
const MARCA_API = 'services/public/marcas.php';
// Constante para establecer el contenedor de marcas.
const MARCAS = document.getElementById('marcas');

// Método del evento para cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', async () => {
    // Llamada a la función para mostrar el encabezado y pie del documento.
    loadTemplate();

    // Petición para obtener las marcas disponibles.
    const DATA = await fetchData(MARCA_API, 'readAll');
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        // Se inicializa el contenedor de marcas.
        MARCAS.innerHTML = '';
        // Se recorre el conjunto de registros fila por fila a través del objeto row.
        DATA.dataset.forEach(row => {
            // Se establece la página web de destino con los parámetros.
            let url = `productos.html?id=${row.id_marca}&nombre=${row.nombre_marca}`;
            // Se crean y concatenan las tarjetas con los datos de cada categoría.
            MARCAS.innerHTML += `


                <div class="col-sm-12 col-md-6 col-lg-3 py-2">
                    
                        <div class="card seleccionable border-light mb-4 h-100 " style="max-width: 15rem;">
                            <a href="${url}" style="text-decoration: none; color: inherit;">
                                <img src="${SERVER_URL}images/marcas/${row.imagen_marca}" class="card-img-top p-2" alt="${row.nombre_marca}">
                                <div class="card-body text-center">
                                    <h5>${row.nombre_marca}</h5>
                                </div>
                            </a>
                        </div>
                    
                        
                </div>

            `;


        //     MARCAS.innerHTML += `
        //     <div class="col-sm-12 col-md-6 col-lg-3">
        //     <div class="card mb-3">
        //         <img src="${SERVER_URL}images/marcas/${row.imagen_marca}" class="card-img-top" alt="${row.nombre_marca}">
        //         <div class="card-body text-center">
        //             <h5 class="card-title">${row.nombre_marca}</h5>
        //             <a href="${url}" class="btn btn-primary">Ver productos</a>
        //         </div>
        //     </div>
        // </div>
        //     `;
        });
    } else {
        // Se asigna al título del contenido de la excepción cuando no existen datos para mostrar.
        document.getElementById('mainTitle').textContent = DATA.error;
    }
});