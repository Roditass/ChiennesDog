<?php
require_once('../../helpers/database.php');
class ValoracionHandler
{
    protected $id_detalle = null;
    protected $id_valoracion = null;
    protected $comentario = null;
    protected $calificacion_producto = null;
    protected $id_producto = null;
    /*
     * Método para crear una nueva valoración.
     */
    public function createOpinion()
    {
        $sql = 'INSERT INTO tb_valoraciones(calificacion_producto, comentario) VALUES (?, ?)';
        $params = array($this->calificacion_producto, $this->comentario);
        //  $sqlWithValues = vsprintf(str_replace('?', '%s', $sql), array_map(function($param) {
        //      return is_string($param) ? "'$param'" : $param;
        //  }, $params));
    
        // // Imprimir la sentencia SQL

        //  echo "SQL: $sqlWithValues\n";
        // echo "Calificacion Producto: $this->calificacion_producto\n";
        // echo "Comentario: $this->comentario\n";
        // return Database::executeRow($sql, $params);
        if ($_SESSION['idValoracion'] = Database::getLastRow($sql, $params)) {
            return true;
        } else {
            return false;
        }
    }

    /*  
     * Método para asociar una valoración con un detalle de producto.
     */
    public function associateOpinionWithDetail()
    {
        // $last_insert_id = Database::getLastInsertId();
        $sql = 'INSERT INTO tb_valoracion_productos(id_detalle, id_valoracion)
                VALUES (
                    (SELECT id_detalle FROM tb_detalles_pedidos ORDER BY id_detalle DESC LIMIT 1),
                    (SELECT id_valoracion FROM tb_valoraciones ORDER BY id_valoracion DESC LIMIT 1))';
        // $params = array($this->id_detalle, $_SESSION['idValoracion']);
        
            // Crear una versión de la consulta SQL con los parámetros sustituidos para imprimirla
    // $sql_with_params = 'INSERT INTO tb_valoracion_productos(id_detalle, id_valoracion) VALUES (' . $this->id_detalle . ', ' . $_SESSION['idValoracion'] . ')';
    
    // Imprimir la consulta SQL en la consola
    // echo $sql_with_params;

         return Database::executeRow($sql, array());
        
    }

    public function readComent()
    {
        $sql = 'SELECT c.nombre_cliente, v.comentario, v.calificacion_producto
        FROM tb_valoracion_productos vp
        JOIN tb_valoraciones v ON vp.id_valoracion = v.id_valoracion
        JOIN tb_detalles_pedidos dp ON vp.id_detalle = dp.id_detalle
        JOIN tb_pedidos pd ON dp.id_pedido = pd.id_pedido
        JOIN tb_clientes c ON pd.id_cliente = c.id_cliente
        JOIN tb_productos p ON dp.id_producto = p.id_producto
        WHERE p.id_producto = ?';
        $params = array($this->id_producto);
        return Database::getRows($sql, $params);
    }
}