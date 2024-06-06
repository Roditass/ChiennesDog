// Constante para completar la ruta de la API.
const CLIENTE_API = 'services/public/cliente.php';

const NOMBRE_CLIENTE = document.getElementById('nombreCliente'),
    APELLIDO_CLIENTE = document.getElementById('apellidoCliente'),
    CORREO_CLIENTE = document.getElementById('correoCliente')
    TELEFONO_CLIENTE = document.getElementById('telefonoCliente')
    DUI_CLIENTE = document.getElementById('duiCliente')
    DIRECCION_CLIENTE = document.getElementById('direccionCliente');

    // Constantes para establecer los elementos del componente Modal.
const SAVE_MODAL = new bootstrap.Modal('#modalCliente'),
MODAL_TITLE = document.getElementById('modalTitle');

const PASSWORD_MODAL = new bootstrap.Modal('#passwordModal');
// Constante para establecer el formulario de cambiar contraseña.
const PASSWORD_FORM = document.getElementById('passwordForm');


vanillaTextMask.maskInput({
    inputElement: document.getElementById('telefonoClienteModal'),
    mask: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
});

const SAVE_FORM = document.getElementById('saveForm'),
    ID_CLIENTE_MODAL = document.getElementById('idClienteModal'),
    NOMBRE_CLIENTE_MODAL = document.getElementById('nombreClienteModal'),
    APELLIDO_CLIENTE_MODAL = document.getElementById('apellidoClienteModal'),
    CORREO_CLIENTE_MODAL = document.getElementById('correoClienteModal')
    TELEFONO_CLIENTE_MODAL = document.getElementById('telefonoClienteModal')
    DUI_CLIENTE_MODAL = document.getElementById('duiClienteModal')
    DIRECCION_CLIENTE_MODAL = document.getElementById('direccionClienteModal');
document.addEventListener('DOMContentLoaded', async () => {
    loadTemplate();
    cargarDatos();
    
});

const cargarDatos = async () => {
    const DATA = await fetchData(CLIENTE_API, 'readOne');
     // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
     if (DATA.status) {
        // Se asigna como título principal la categoría de los productos.
        console.log(DATA.status);
        NOMBRE_CLIENTE.innerText = `${DATA.dataset.nombre_cliente}`;
        APELLIDO_CLIENTE.innerText = `${DATA.dataset.apellido_cliente}`;
        CORREO_CLIENTE.innerText = `${DATA.dataset.correo_cliente}`;
        TELEFONO_CLIENTE.innerText = `${DATA.dataset.telefono_cliente}`;
        DUI_CLIENTE.innerText = `${DATA.dataset.dui_cliente}`;
        DIRECCION_CLIENTE.innerText = `${DATA.dataset.direccion_cliente}`;
    } else {
        // Se presenta un mensaje de error cuando no existen datos para mostrar.
       console.log(DATA_ERROR)
    }
}


SAVE_FORM.addEventListener('submit', async (event) => {
    // Se evita recargar la página web después de enviar el formulario.
    event.preventDefault();
    // Se verifica la acción a realizar.
    (ID_CLIENTE_MODAL.value) ? action = 'updateRow' : action = 'createRow';
    // Constante tipo objeto con los datos del formulario.
    const FORM = new FormData(SAVE_FORM);
    // Petición para guardar los datos del formulario.
    const DATA = await fetchData(CLIENTE_API, action, FORM);
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        // Se cierra la caja de diálogo.
        SAVE_MODAL.hide();
        // Se muestra un mensaje de éxito.
        sweetAlert(1, DATA.message, true);
        cargarDatos();
    } else {
        sweetAlert(2, DATA.error, false);
    }
});


const openUpdate = async (id) => {
    // Se define un objeto con los datos del registro seleccionado.
    const FORM = new FormData();
    FORM.append('idClienteModal', id);
    // Petición para obtener los datos del registro solicitado.
    const DATA = await fetchData(CLIENTE_API, 'readOne', FORM);
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        // Se muestra la caja de diálogo con su título.
        SAVE_MODAL.show();
        MODAL_TITLE.textContent = 'Actualizar Datos';
        // Se prepara el formulario.
        SAVE_FORM.reset();
        const ROW = DATA.dataset;

        // Se inicializan los campos con los datos.
        ID_CLIENTE_MODAL.value = ROW.id_cliente;
        NOMBRE_CLIENTE_MODAL.value = ROW.nombre_cliente;
        APELLIDO_CLIENTE_MODAL.value = ROW.apellido_cliente;
        CORREO_CLIENTE_MODAL.value = ROW.correo_cliente;
        TELEFONO_CLIENTE_MODAL.value = ROW.telefono_cliente;
        DIRECCION_CLIENTE_MODAL.value = ROW.direccion_cliente;
    } else {
        sweetAlert(2, DATA.error, false);
    }
}



// Mètodo del evento para cuando se envía el formulario de cambiar contraseña.
PASSWORD_FORM.addEventListener('submit', async (event) => {
    // Se evita recargar la página web después de enviar el formulario.
    event.preventDefault();
    // Constante tipo objeto con los datos del formulario.
    const FORM = new FormData(PASSWORD_FORM);
    // Petición para actualizar la constraseña.
    const DATA = await fetchData(CLIENTE_API, 'changePassword', FORM);
    // Se comprueba si la respuesta es satisfactoria, de lo contrario se muestra un mensaje con la excepción.
    if (DATA.status) {
        // Se cierra la caja de diálogo.
        PASSWORD_MODAL.hide();
        // Se muestra un mensaje de éxito.
        sweetAlert(1, DATA.message, true);
    } else {
        sweetAlert(2, DATA.error, false);
    }
});

/*
*   Función para preparar el formulario al momento de cambiar la constraseña.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/
const openPassword = () => {
    // Se abre la caja de diálogo que contiene el formulario.
    PASSWORD_MODAL.show();
    // Se restauran los elementos del formulario.
    PASSWORD_FORM.reset();
}