/*
*   Controlador es de uso general en las páginas web del sitio público.
*   Sirve para manejar las plantillas del encabezado y pie del documento.
*/

// Constante para completar la ruta de la API.
const USER_API = 'services/public/cliente.php';
const MAIN = document.querySelector('main');
// Constante para establecer el elemento del título principal.

MAIN.style.paddingTop = '75px';
MAIN.style.paddingBottom = '100px';
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
                    <nav class="navbar fixed-top navbar-expand-lg nav-bg">
                        <div class="container">
                            <a class="navbar-brand white-text" href="#">
                                <img src="../../recursos/img/logoChiennes.svg" alt="Logo" width="60vm"
                                    class="d-inline-block align-text-top me-5 ">Chiennes Dog
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav ms-auto">
                                    <a class="nav-link" href="index.html"> <img src="../../recursos/img/shop.svg" alt="Catálogo" width="30vm"></a>
                                    <a class="nav-link" href="perfil.html" >
                                            <img src="../../recursos/img/profile.svg" alt="Perfil" width="30vm">
                                    </a>
                                    <a class="nav-link" href="carrito.html">
                                            <img src="../../recursos/img/carrito.svg" alt="Carrito" width="30vm">
                                    </a>
                                    
                                    <a class="nav-link" href="#" onclick="logOut()"><img src="../../recursos/img/logout.svg" alt="Cerrar Sesión" width="30vm"></a>
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
        <nav class="fixed-top navbar navbar-expand-lg nav-bg">
        <div class="container-fluid ms-5">
            <a class="navbar-brand white-text" href="#">
                <img src="../../recursos/img/logoChiennes.svg" alt="Logo" width="60vm"
                    class="d-inline-block align-text-top me-5 ">Chiennes Dog

            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
                <ul class="navbar-nav me-5">
                    <li class="nav-item">
                        <a class="nav-link" href="">
                            <img src="../../recursos/img/shop.svg" alt="Logo" width="30vm">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login.html">
                            <img src="../../recursos/img/login.svg" alt="Iniciar sesion" width="30vm">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="registro.html">
                            <img src="../../recursos/img/register.svg" alt="Registrarse" width="30vm">
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
        `);
    }
    // Se agrega el pie de la página web después del contenido principal.
    MAIN.insertAdjacentHTML('afterend', `
    <nav class="navbar fixed-bottom nav-bg" >
        <div class="container-fluid ms-5 me-5">
            <a class="navbar-brand white-text" href="#">Chiennes Dog</a>
            <div class="navbar justify-content-end" id="navbarNav">
                <div class="me-3">
                    <a class="nav-link" href="">
                        <img src="../../recursos/img/facebook.svg" alt="Logo" width="30vm">
                    </a>
                </div>
                <div class="">
                    <a class="nav-link" href="">
                        <img src="../../recursos/img/insta.svg" alt="Logo" width="30vm">
                    </a>
                </div>
            </div>
        </div>
    </nav>
    `);
}





