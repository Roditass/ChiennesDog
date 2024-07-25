<?php
// Se incluye la clase con las plantillas para generar reportes.
require_once('../../helpers/reports.php');
// Se incluyen las clases para la transferencia y acceso a datos.
require_once('../../models/data/clientes_data.php');

// Se instancia la clase para crear el reporte.
$pdf = new Report;
// Se inicia el reporte con el encabezado del documento.
$pdf->startReport('Pedidos de clientes');

// Se instancia el módelo ClienteData para obtener los datos.
$cliente = new ClienteData;

// Se verifica si existen registros para mostrar, de lo contrario se imprime un mensaje.
if ($dataClientes = $cliente->readAll()) {
    // Se establece un color de relleno para los encabezados.
    // Formato RGB
    $pdf->setFillColor(255, 102, 7);
    // Se establece la fuente para los encabezados.
    $pdf->setFont('Arial', 'B', 11);
    // Se imprimen las celdas con los encabezados.
    $pdf->cell(37, 10, 'Apellido', 1, 0, 'C', 1);
    $pdf->cell(37, 10, 'Nombre', 1, 0, 'C', 1);
    $pdf->cell(66, 10, 'Correo', 1, 0, 'C', 1);
    $pdf->cell(40, 10, 'Telefono', 1, 1, 'C', 1);
    //$pdf->cell(36, 10, 'Total Pedidos', 1, 1, 'C', 1);

    // Se establece la fuente para los datos de los productos.
    $pdf->setFont('Arial', '', 11);

    // Se recorren los registros fila por fila.
    foreach ($dataClientes as $rowCliente) {
        // Se obtiene el total de pedidos por cliente.
        
        // Se imprime la fila con los datos del cliente y el total de pedidos.
        $pdf->cell(37, 10, $pdf->encodeString($rowCliente['apellido_cliente']), 1, 0);
        $pdf->cell(37, 10, $pdf->encodeString($rowCliente['nombre_cliente']), 1, 0);
        $pdf->cell(66, 10, $pdf->encodeString($rowCliente['correo_cliente']), 1, 0);
        $pdf->cell(40, 10, $pdf->encodeString($rowCliente['telefono_cliente']), 1, 1);
        //$pdf->cell(36, 10, $rowCliente['total_pedidos'], 1, 1);
    }
} else {
    $pdf->cell(0, 10, $pdf->encodeString('No hay clientes para mostrar'), 1, 1);
}

// Se llama implícitamente al método footer() y se envía el documento al navegador web.
$pdf->output('I', 'clientes.pdf');
?>
