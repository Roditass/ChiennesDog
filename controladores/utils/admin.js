//Constantes para el encabezado y el pie de pagina
const HEADER = document.querySelector("header");

const USER_API = 'services/admin/administradores.php';
// Constante para establecer el elemento del contenido principal.
const MAIN = document.querySelector('main');
MAIN.style.paddingTop = '75px';
MAIN.style.paddingBottom = '100px';
MAIN.classList.add('container');
// Se establece el título de la página web.
document.querySelector('title').textContent = 'Chiennes Dog - Dashboard';
// Constante para establecer el elemento del título principal.
const MAIN_TITLE = document.getElementById('mainTitle');
MAIN_TITLE.classList.add('text-center', 'py-3');



/*  Función asíncrona para cargar el encabezado y pie del documento.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/


HEADER.innerHTML = `
                
                <nav class="fixed-top navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">Chiennes Dog</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                  <ul class="navbar-nav ">
                  <li class="nav-item">
                      <a class="nav-link" href="Inicio.html">Perros</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="GesCategorias.html">Categorías</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="GesMarca.html">Marcas</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="GesProductos.html">Productos</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="GesPedidos.html">Pedidos</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="GesUsuario.html">Usuarios</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="index.html">Cerrar sesión</a>
              </li>
      
  
              </ul> 
                  </div>
                </div>
              </nav> 
                
            `;

