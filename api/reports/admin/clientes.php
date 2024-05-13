<?php
// Se incluye la clase con las plantillas para generar reportes.
require_once('../../helpers/report.php');
// Se incluyen las clases para la transferencia y acceso a datos.
require_once('../../models/data/clientes_data.php');
// Se instancia la clase para crear el reporte.
$pdf = new Report;
// Se inicia el reporte con el encabezado del documento.
$pdf->startReport('Pedidos de clientes');
// Se instancia el módelo Categoría para obtener los datos.
$cliente = new ClienteData;
// Se verifica si existen registros para mostrar, de lo contrario se imprime un mensaje.
if ($dataClientes = $cliente->readAll()) {
    // Se establece un color de relleno para los encabezados.
    $pdf->setFillColor(200);
    // Se establece la fuente para los encabezados.
    $pdf->setFont('Arial', 'B', 11);
    // Se imprimen las celdas con los encabezados.
    $pdf->cell(126, 10, 'Apellido', 1, 0, 'C', 1);
    $pdf->cell(126, 10, 'Nombre', 1, 0, 'C', 1);
    $pdf->cell(126, 10, 'Correo', 1, 0, 'C', 1);
    $pdf->cell(126, 10, 'Telefono', 1, 0, 'C', 1);
    $pdf->cell(30, 10, 'Total', 1, 0, 'C', 1);

    // Se establece un color de relleno para mostrar el nombre de la categoría.
    $pdf->setFillColor(240);
    // Se establece la fuente para los datos de los productos.
    $pdf->setFont('Arial', '', 11);

    // Se recorren los registros fila por fila.
    foreach ($dataClientes as $rowCliente) {
            // Se verifica si existen registros para mostrar, de lo contrario se imprime un mensaje.
            if ($dataClientes = $cliente->clientePedidos()) {
                // Se recorren los registros fila por fila.
                foreach ($dataClientes as $rowCliente) {
                    // Se imprimen las celdas con los datos de los productos.
                    $pdf->cell(126, 10, $pdf->encodeString($rowCliente['apellido_cliente']), 1, 0);
                    $pdf->cell(126, 10, $pdf->encodeString($rowCliente['nombre_cliente']), 1, 0);
                    $pdf->cell(126, 10, $pdf->encodeString($rowCliente['correo_cliente']), 1, 0);
                    $pdf->cell(126, 10, $pdf->encodeString($rowCliente['telefono_cliente']), 1, 0);
                    $pdf->cell(30, 10, $rowCliente['total_pedidos'], 1, 0);
                }
            } else {
                $pdf->cell(0, 10, $pdf->encodeString('No hay clientes'), 1, 1);
            }
    }
} else {
    $pdf->cell(0, 10, $pdf->encodeString('No hay clientes para mostrar'), 1, 1);
}
// Se llama implícitamente al método footer() y se envía el documento al navegador web.
$pdf->output('I', 'clientes.pdf');
