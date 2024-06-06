<?php
// Se incluye la clase para trabajar con la base de datos.
require_once('../../helpers/validator.php');

require_once('../../models/handler/valoracion_handler.php');
/*
 * Clase para manejar el encapsulamiento de los datos de la tabla VALORACIONES.
 */
class ValoracionData extends ValoracionHandler
{
    /*
     * Atributos adicionales.
     */
    private $data_error = null;
    private $filename = null;

    /*
     * Métodos para validar y establecer los datos.
     */
    public function setComentario($value, $min = 2, $max = 250)
    {
        // echo "SetComentario: $value\n";
        if (!Validator::validateString($value)) {
            $this->data_error = 'La descripción contiene caracteres prohibidos';
            return false;
        } elseif (Validator::validateLength($value, $min, $max)) {
            $this->comentario = $value;
            return true;
        } else {
            $this->data_error = 'La descripción debe tener una longitud entre ' . $min . ' y ' . $max;
            return false;
        }
    }

    public function setCalificacionProducto($value)
    {
        // echo "SetValoracion: $value\n";
        if (Validator::validateNaturalNumber($value)) {
            $this->calificacion_producto = $value;
            return true;
        } else {
            $this->data_error = 'El rating debe ser un número entero';
            return false;
        }
    }

    public function setIdDetalle($value)
    {
        if (Validator::validateNaturalNumber($value)) {
            $this->id_detalle = $value;
            return true;
        } else {
            $this->data_error = 'El identificador del detalle pedido es incorrecto';
            return false;
        }
    }

    public function setIdValoracion($value)
    {
        if (Validator::validateNaturalNumber($value)) {
            $this->id_valoracion = $value;
            return true;
        } else {
            $this->data_error = 'El identificador de la valoracion es incorrecto';
            return false;
        }
    }

    public function setIdValoracionPedido($value)
    {
        if (Validator::validateNaturalNumber($value)) {
            $this->id_vp = $value;
            return true;
        } else {
            $this->data_error = 'El identificador de la valoracion del pedido es incorrecto';
            return false;
        }
    }
    /*
     * Métodos para obtener los atributos adicionales.
     */
    public function getDataError()
    {
        return $this->data_error;
    }

    public function getFilename()
    {
        return $this->filename;
    }

}

