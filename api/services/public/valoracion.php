<?php
// Se incluye la clase del modelo.
require_once('../../models/data/valoracion_data.php');

// Se comprueba si existe una acción a realizar, de lo contrario se finaliza el script con un mensaje de error.
if (isset($_GET['action'])) {
    // Se crea una sesión o se reanuda la actual para poder utilizar variables de sesión en el script.
    session_start();
    // Se instancia la clase correspondiente.
    $comentario = new ValoracionData;
    // Se declara e inicializa un arreglo para guardar el resultado que retorna la API.
    $result = array('status' => 0, 'session' => 0, 'message' => null, 'error' => null, 'exception' => null, 'dataset' => null);
    // Se verifica si existe una sesión iniciada como cliente para realizar las acciones correspondientes.
    if (isset($_SESSION['idCliente'])) {
        $result['session'] = 1;
        // Se compara la acción a realizar cuando un cliente ha iniciado sesión.
        switch ($_GET['action']) {
            // Acción para agregar un producto al carrito de compras.
            // case 'createOpinion':

            //     // echo "Inicio createOpinion\n";
            //     $_POST = Validator::validateForm($_POST);
            //     // echo "Después de validar el formulario\n"; // Depuración
            //     if (
            //         !$comentario->setComentario($_POST['comentarioPedido']) or
            //         !$comentario->setCalificacionProducto($_POST['valoracionPedido'])
            //     ){
            //         $result['error'] = $comentario->getDataError();
            //     }elseif($comentario->createOpinion()){
            //         $result['status'] = 1;
            //         $result['message'] = 'Comentario agregado correctamente';
            //     }elseif($comentario->associateOpinionWithDetail()){
            //         $result['message'] = 'Comentario detalle agregado correctamente';
            //     }
            //     else{
            //         $result['error'] = 'Ocurrió un problema al agregar el comentario';
            //     }
            //     break;
                    

                case 'createOpinion':
                    // Validar el formulario
                    $_POST = Validator::validateForm($_POST);
                
                    // Establecer los datos en el objeto $comentario
                    if (
                        !$comentario->setComentario($_POST['comentarioPedido']) or
                        !$comentario->setCalificacionProducto($_POST['valoracionPedido'])
                    ) { 
                        $result['error'] = $comentario->getDataError();
                    } else {
                        // Intentar crear la opinión
                        if ($comentario->createOpinion()) {
                            // Si la creación de la opinión fue exitosa, intentar asociarla con el detalle
                            if ($comentario->associateOpinionWithDetail()) {
                                $result['status'] = 1;
                                $result['message'] = 'Comentario y detalle agregados correctamente';
                            } else {
                                // Si no se pudo asociar el detalle, pero se creó la opinión
                                $result['status'] = 1;
                                $result['message'] = 'Comentario agregado, pero ocurrió un problema al asociar el detalle';
                            }
                        } else {
                            // Si no se pudo crear la opinión
                            $result['error'] = 'Ocurrió un problema al agregar el comentario';
                        }
                    }
                    break;

                // if (!$comentario->createOpinion()) {
                //     $result['error'] = 'Ocurrió un problema al iniciar el comentario';
                // } elseif (
                //     !$comentario->setComentario($_POST['comentarioPedido']) or
                //     !$comentario->setCalificacionProducto($_POST['valoracionPedido'])
                // ) {
                //     $result['error'] = $comentario->getDataError();
                //     echo "<pre>";
                //         print_r($comentario);
                //         echo "</pre>";
                // } elseif ($comentario->associateOpinionWithDetail()) {
                //     $result['status'] = 1;
                //     $result['message'] = 'Comentario agregado correctamente';
                // } else {
                //     $result['error'] = 'Ocurrió un problema al agregar el comentario';
                // }
                // break;
            } 
        }else {
                // Se compara la acción a realizar cuando un cliente no ha iniciado sesión.
                switch ($_GET['action']) {
                    case 'createOpinion':
                        $result['error'] = 'Debe iniciar sesión para agregar el comentario';
                        break;
                    default:
                        $result['error'] = 'Acción no disponible fuera de la sesión';
                }
            }
    
    // Se obtiene la excepción del servidor de base de datos por si ocurrió un problema.
    $result['exception'] = Database::getException();
    // Se indica el tipo de contenido a mostrar y su respectivo conjunto de caracteres.
    header('Content-type: application/json; charset=utf-8');
    // Se imprime el resultado en formato JSON y se retorna al controlador.
    print(json_encode($result));
} else {
    print(json_encode('Recurso no disponible'));
}
?>
