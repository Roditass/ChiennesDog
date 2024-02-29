// Constante para establecer el elemento del contenido principal.
const MAIN = document.querySelector('main');
MAIN.style.paddingTop = '75px';
MAIN.style.paddingBottom = '100px';
MAIN.classList.add('container');
// Se establece el título de la página web.
document.querySelector('title').textContent = 'Chiennes Dog';
// Constante para establecer el elemento del título principal.
const MAIN_TITLE = document.getElementById('mainTitle');
MAIN_TITLE.classList.add('text-center', 'py-3');

/*  Función asíncrona para cargar el encabezado y pie del documento.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/

const loadTemplate = async () => {
    MAIN.insertAdjacentHTML('beforebegin', `
                <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">Chiennes Dog</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link" href="Inicio.html">Inicio</a>
                      </li>
          
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          Productos
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="GesProductos.html">Gestionar Productos</a></li>
                          <li><a class="dropdown-item" href="Productos.html">Añadir Productos</a></li>
                          <li><a class="dropdown-item" href="AcProductos">Actualizar Productos</a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          Marcas
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="GesMarca.html">Gestionar Marca</a></li>
                          <li><a class="dropdown-item" href="AñadirMarca.html">Añadir Marca</a></li>
                          <li><a class="dropdown-item" href="AcMarca.html">Actualizar Marca</a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                        </ul>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          Categorias
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="Categorias.html">Añadir Categoria</a></li>
                          <li><a class="dropdown-item" href="GesCategorias.html">Gestionar Categoria</a></li>
                          <li><a class="dropdown-item" href="AcCategoria.html">Actualizar Categoria</a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                        </ul>
                      <li class="nav-item">
                        <a class="nav-link" href="GesPedidos.html">Pedidos</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          Usuarios
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="Usuarios.html">Añadir Usuario</a></li>
                          <li><a class="dropdown-item" href="GesUsuario.html">Gestionar Usuario</a></li>
                          <li><a class="dropdown-item" href="AcUsuario.html">Actualizar Usuario</a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                        </ul>
                      <li class="nav-item">
                        <a class="nav-link" href="Login.html">Cerrar Sesión</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav> 
                </header>
            `);
    // Se agrega el pie de la página web después del contenido principal.
    MAIN.insertAdjacentHTML('afterend', `
            <footer class="text-dark pt-5 pb-4" style="background-color:#a78768" ;>
            <div class="container text-center text-md-start">
              <div class="row text-center text-md-start">
        
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto nt-5">
                  <img src="file:///C:/Users/gyaci/AppData/Local/Microsoft/Windows/INetCache/IE/VXF1WW2Q/logo[1].svg"
                    class="img-fluid" alt="...">
        
                </div>
        
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto nt-3">
                  <button type="button" class="btn">
                    <h5 class="text-uppercase mb-2 font-weight-bold text-light">Productos</h5>
                  </button>
                  <hr style="color:#ffffff" ; class="mb-4">
                </div>
        
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto nt-3">
                  <button type="button" class="btn">
                    <h5 class="text-uppercase mb-2 font-weight-bold text-light">Marcas</h5>
                  </button>
                  <hr style="color:#ffffff" ; class="mb-4">
                </div>
        
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto nt-3">
                  <button type="button" class="btn">
                    <h5 class="text-uppercase mb-2 font-weight-bold text-light">Categorías</h5>
                  </button>
                  <hr style="color:#ffffff" ; class="mb-4">
                </div>
        
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto nt-3">
                  <button type="button" class="btn">
                    <h5 class="text-uppercase mb-2 font-weight-bold text-light">Pedidos</h5>
                  </button>
                  <hr style="color:#ffffff" ; class="mb-4">
                </div>
        
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto nt-3">
                  <button type="button" class="btn">
                    <h5 class="text-uppercase mb-2 font-weight-bold text-light">Usuarios</h5>
                  </button>
                  <hr style="color:#ffffff" ; class="mb-4">
                </div>
        
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto nt-3 text-center">
                  <h5 class="text-uppercase mb-2 font-weight-bold text-light">Redes Sociales</h5>
                  <hr style="color:#ffffff" ; class="mb-4">
        
                  <div>
                    <a href="https://www.instagram.com/chiennesdog/" target="_blank">
                      <img src="https://www.svgrepo.com/show/364604/instagram-logo-fill.svg" width="50px" height="50px"
                        class="rounded" alt="...">
                    </a>
                    <a href="https://www.facebook.com/PedigreeCentroamerica/?locale=es_LA" target="_blank">
                      <img src="https://cdn-icons-png.flaticon.com/256/59/59439.png" width="50px" height="50px" class="rounded"
                        alt="...">
        
                    </a>
                    <a href="https://twitter.com/PedigreeLatam" target="_blank">
                      <img src="https://cdn.icon-icons.com/icons2/3261/PNG/512/twitter_logo_icon_206654.png" width="50px"
                        height="50px" class="rounded" alt="...">
        
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
            `);
}