/*
*   Controlador es de uso general en las páginas web del sitio público.
*   Sirve para manejar las plantillas del encabezado y pie del documento.
*/

// Constante para completar la ruta de la API.
const USER_API = 'services/public/cliente.php';
const MAIN = document.querySelector('main');
/*  Función asíncrona para cargar el encabezado y pie del documento.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/
const loadTemplate = async () => {
    // Petición para obtener en nombre del usuario que ha iniciado sesión.
    const DATA = await fetchData(USER_API, 'getUser');
    // Se comprueba si el usuario está autenticado para establecer el encabezado respectivo.
    if (DATA.session) {
        // Se verifica si la página web no es el inicio de sesión, de lo contrario se direcciona a la página web principal.
        if (!location.pathname.endsWith('login.html')) {
            // Se agrega el encabezado de la página web antes del contenido principal.
            MAIN.insertAdjacentHTML('beforebegin', `
                <header>
                    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                        <div class="container">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav ms-auto">
                                    <a class="nav-link" href="index.html"><i class="bi bi-shop"></i> Catálogo</a>
                                    <a class="nav-link" href="cart.html"><i class="bi bi-cart"></i> Carrito</a>
                                    <a class="nav-link" href="#" onclick="logOut()"><i class="bi bi-box-arrow-left"></i> Cerrar sesión</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            `);
        } else {
            location.href = 'index.html';
        }
    } else {
        // Se agrega el encabezado de la página web antes del contenido principal.
        MAIN.insertAdjacentHTML('beforebegin', `
            <header>
            <nav class="fixed-top navbar navbar-expand-lg nav-bg">
            <div class="container-fluid ms-5">
                <a class="navbar-brand" href="#">
                    <img src="../../recursos/img/logoChiennes.svg" alt="Logo" width="60vm"
                        class="d-inline-block align-text-top me-5 white-text">Chiennes Dog
    
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
                    <ul class="navbar-nav me-5">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img src="../../recursos/img/user.svg" alt="Logo" width="30vm">
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Iniciar sesión</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Registrarse</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">
                                <img src="../../recursos/img/carrito.svg" alt="Logo" width="30vm">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            </header>
        `);
    }
    // Se agrega el pie de la página web después del contenido principal.
    MAIN.insertAdjacentHTML('afterend', `
    <footer class="text-dark pt-5 pb-4 fixed-bottom" style="background-color: #a78768;">
    <div class="container text-center text-md-start">
      <div class="row text-center text-md-start">
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto nt-5">
          <img src="../../recursos/img/logo1.svg"
            class="img-fluid" alt="...">
        </div>      
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto nt-3 text-center">
          <h5 class="text-uppercase mb-2 font-weight-bold text-light">Redes Sociales</h5>
          <hr style="color:#ffffff" ; class="mb-4">
          <div>
            <a href="https://www.instagram.com/chiennesdog/" target="_blank">
              <img src="https://www.svgrepo.com/show/364604/instagram-logo-fill.svg" width="50px" height="50px"
                class="rounded" alt="">
            </a>
            <a href="https://www.facebook.com/PedigreeCentroamerica/?locale=es_LA" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/256/59/59439.png" width="50px" height="50px" class="rounded"
                alt="">
            </a>
            <a href="https://twitter.com/PedigreeLatam" target="_blank">
              <img src="https://cdn.icon-icons.com/icons2/3261/PNG/512/twitter_logo_icon_206654.png" width="50px"
                height="50px" class="rounded" alt="">
            </a>
          </div>
          </div>
        </div>  
      </div>
    </div>
  </footer>
    `);
}





