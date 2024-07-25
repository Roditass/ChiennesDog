<?php
// Se incluye la clase con las plantillas para generar reportes.
require_once('../../helpers/reports.php');
// Se incluyen las clases para la transferencia y acceso a datos.
require_once('../../models/data/pedidos_data.php');

// Se instancia la clase para crear el reporte.
$pdf = new Report;
// Se inicia el reporte con el encabezado del documento.
$pdf->startReport('Productos en pedidos pendientes');
// Se instancia el módelo Pedido para obtener los datos.
$pedido = new PedidosData;
// Se verifica si existen registros para mostrar, de lo contrario se imprime un mensaje.
if ($dataPedidos = $pedido->productosPedidos()) {
    // Se establece un color de relleno para los encabezados.
    // Formato RGB
    $pdf->setFillColor(255, 102, 7);
    // Se establece la fuente para los encabezados.
    $pdf->setFont('Arial', 'B', 11);
    // Se imprimen las celdas con los encabezados.
    $pdf->cell(40, 10, 'Cliente', 1, 0, 'C', 1);
    $pdf->cell(30, 10, 'Estado', 1, 0, 'C', 1);
    $pdf->cell(30, 10, 'Fecha', 1, 0, 'C', 1);
    //$pdf->cell(50, 10, 'Direccion', 1, 0, 'C', 1);
    $pdf->cell(50, 10, 'Producto', 1, 0, 'C', 1);
    $pdf->cell(20, 10, 'Cantidad', 1, 0, 'C', 1);
    $pdf->cell(20, 10, 'Precio', 1, 1, 'C', 1);

    // Se establece la fuente para los datos de los pedidos.
    $pdf->setFont('Arial', '', 11);

    // Se recorren los registros fila por fila.
    foreach ($dataPedidos as $rowPedido) {
        // Se imprimen las celdas con los datos de los pedidos.
        $pdf->cell(40, 10, $pdf->encodeString($rowPedido['nombre_cliente']), 1, 0);
        $pdf->cell(30, 10, $pdf->encodeString($rowPedido['estado_pedido']), 1, 0);
        $pdf->cell(30, 10, $rowPedido['fecha_registro'], 1, 0);
        //$pdf->cell(50, 10, $pdf->encodeString($rowPedido['direccion_pedido']), 1, 0);
        $pdf->cell(50, 10, $pdf->encodeString($rowPedido['nombre_producto']), 1, 0);
        $pdf->cell(20, 10, $rowPedido['cantidad_producto'], 1, 0);
        $pdf->cell(20, 10, $rowPedido['precio_producto'], 1, 1);
    }
} else {
    $pdf->cell(0, 10, $pdf->encodeString('No hay pedidos pendientes para mostrar'), 1, 1);
}
// Se llama implícitamente al método footer() y se envía el documento al navegador web.
$pdf->output('I', 'productos_pedidos.pdf');
?>
