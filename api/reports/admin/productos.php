<?php
// Se incluye la clase con las plantillas para generar reportes.
require_once('../../helpers/reports.php');
// Se incluyen las clases para la transferencia y acceso a datos.
require_once('../../models/data/productos_data.php');

// Se instancia la clase para crear el reporte.
$pdf = new Report;
// Se inicia el reporte con el encabezado del documento.
$pdf->startReport('Reporte de productos');

// Se instancia el modelo Producto para obtener los datos.
$producto = new ProductoData;
// Se verifica si existen registros para mostrar, de lo contrario se imprime un mensaje.
if ($dataProductos = $producto->productosReport()) {
    // Se establece un color de relleno para los encabezados.
    // Formato RGB
    $pdf->setFillColor(255, 102, 7);
    // Se establece la fuente para los encabezados.
    $pdf->setFont('Arial', 'B', 11);
    // Se imprimen las celdas con los encabezados.
    $pdf->cell(40, 10, 'Nombre Producto', 1, 0, 'C', 1);
    $pdf->cell(40, 10, 'Categoría', 1, 0, 'C', 1);
    $pdf->cell(40, 10, 'Marca', 1, 0, 'C', 1);
    $pdf->cell(30, 10, 'Precio', 1, 0, 'C', 1);
    $pdf->cell(20, 10, 'Estado', 1, 0, 'C', 1);
    $pdf->cell(20, 10, 'Existencia', 1, 1, 'C', 1);

    // Se establece la fuente para los datos de los productos.
    $pdf->setFont('Arial', '', 11);

    // Se recorren los registros fila por fila.
    foreach ($dataProductos as $rowProducto) {
        $estado = $rowProducto['estado_producto'] ? 'Activo' : 'Inactivo';
        // Se imprimen las celdas con los datos de los productos.
        $pdf->cell(40, 10, $pdf->encodeString($rowProducto['nombre_producto']), 1, 0);
        $pdf->cell(40, 10, $pdf->encodeString($rowProducto['nombre_categoria']), 1, 0);
        $pdf->cell(40, 10, $pdf->encodeString($rowProducto['nombre_marca']), 1, 0);
        $pdf->cell(30, 10, $rowProducto['precio_producto'], 1, 0);
        $pdf->cell(20, 10, $estado, 1, 0);
        $pdf->cell(20, 10, $rowProducto['existencias_producto'], 1, 1);
    }
} else {
    $pdf->cell(0, 10, $pdf->encodeString('No hay productos para mostrar'), 1, 1);
}
// Se llama implícitamente al método footer() y se envía el documento al navegador web.
$pdf->output('I', 'productos_report.pdf');
?>
