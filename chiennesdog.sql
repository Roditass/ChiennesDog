DROP DATABASE IF EXISTS db_chiennes_dog;
CREATE DATABASE db_chiennes_dog;
USE db_chiennes_dog;

DROP USER IF EXISTS 'admin_chiennes'@'localhost';
CREATE USER 'admin_chiennes'@'localhost' IDENTIFIED BY 'password1$';
GRANT ALL PRIVILEGES ON db_chiennes_dog.* TO 'admin_chiennes'@'localhost';
FLUSH PRIVILEGES;

#CREACION DE LA TABLA PARA LOS CARGOS
CREATE TABLE tb_cargos(
	id_cargo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre_cargo VARCHAR(50) NOT NULL
);

#CREACION DE LA TABLA PARA LOS ADMINISTRADORES DEL SITIO
CREATE TABLE tb_administradores(
	id_administrador INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre_administrador VARCHAR(50) NOT NULL,
	apellido_administrador VARCHAR(50) NOT NULL,
	id_cargo INT NOT NULL,
	correo_administrador VARCHAR(100) NOT NULL UNIQUE,
	clave_administrador VARCHAR(100) NOT NULL,
	fecha_registro DATE NOT NULL DEFAULT NOW()
);

#CREACION DE LA TABLA PARA LOS CLIENTES
CREATE TABLE tb_clientes(
	id_cliente INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre_cliente VARCHAR(50) NOT NULL,
	apellido_cliente VARCHAR(50) NOT NULL,
	dui_cliente VARCHAR(10) NOT NULL UNIQUE,
	correo_cliente VARCHAR(100) NOT NULL UNIQUE,
	telefono_cliente VARCHAR(9) NOT NULL UNIQUE,
	nacimiento_cliente DATE NOT NULL,
	direccion_cliente VARCHAR(250) NOT NULL,
	clave_cliente VARCHAR(100) NOT NULL,
	fecha_registro DATE NOT NULL DEFAULT NOW(),
	estado_cliente TINYINT(1) NOT NULL DEFAULT 1
);

#CREACION DE LA TABLA PARA LAS MARCAS DE LOS PRODUCTOS
CREATE TABLE tb_marcas(
	id_marca INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre_marca VARCHAR(50) NOT NULL,
	imagen_marca VARCHAR(255) NOT NULL
);

#CREACION DE LA TABLA PARA LAS CATEGORIAS
CREATE TABLE tb_categorias(
	id_categoria INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre_categoria VARCHAR(50) NOT NULL
);

#CREACION DE LA TABLA PARA LOS PRODUCTOS
CREATE TABLE tb_productos(
	id_producto INT AUTO_INCREMENT PRIMARY KEY,
	id_categoria INT NOT NULL,
	nombre_producto VARCHAR(50) NOT NULL,
	id_marca INT NOT NULL,
	descripcion_producto VARCHAR(250),
	precio_producto NUMERIC(5,2) NOT NULL,
	imagen_producto VARCHAR(255) NOT NULL,
	estado_producto BOOLEAN NOT NULL,
	existencias_producto INT NOT NULL,
	fecha_registro DATE NOT NULL DEFAULT NOW(),
	id_administrador INT NOT NULL
);

#CREACION DE LA TABLA PARA LOS PEDIDOS
CREATE TABLE tb_pedidos(
	id_pedido INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_cliente INT NOT NULL,   
	estado_pedido ENUM('Entregado','Pendiente') NOT NULL,
	fecha_registro DATE NOT NULL DEFAULT NOW(),
	direccion_pedido VARCHAR(250) NOT NULL
);

#CREACION DE LA TABLA PARA LOS DETALLES DEL PEDIDO
CREATE TABLE tb_detalles_pedidos(
	id_detalle INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_pedido INT NOT NULL,
	id_producto INT NOT NULL,
	cantidad_producto INT NOT NULL CHECK(cantidad_producto >=1),
	precio_producto NUMERIC(5,2) NOT NULL
);

#CREACION DE LA TABLA PARA LAS VALORACIONES
CREATE TABLE tb_valoraciones(
	id_valoracion INT PRIMARY KEY AUTO_INCREMENT,
	id_detalle INT NOT NULL,
	calificacion_producto INT NOT NULL,
	comentario VARCHAR(250),
	fecha_valoracion DATE NOT NULL DEFAULT NOW()
);

#CREACION DE LA TABLA PARA LAS VALORACIONES DE LOS PRODUCTOS
#CREATE TABLE tb_valoracion_productos(
#	id_vp INT AUTO_INCREMENT PRIMARY KEY,
#	id_detalle INT NOT NULL,	
#	id_valoracion INT NOT NULL
#);

#CREACION DE RELACIONES
ALTER TABLE tb_administradores
ADD CONSTRAINT fk_admin_cargo
FOREIGN KEY (id_cargo) REFERENCES tb_cargos(id_cargo);

ALTER TABLE tb_pedidos
ADD CONSTRAINT fk_pedido_cliente
FOREIGN KEY (id_cliente) REFERENCES tb_clientes(id_cliente);

ALTER TABLE tb_productos
ADD CONSTRAINT fk_producto_categoria
FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria),
ADD CONSTRAINT fk_producto_marca
FOREIGN KEY (id_marca) REFERENCES tb_marcas(id_marca),
ADD CONSTRAINT fk_producto_admin
FOREIGN KEY (id_administrador) REFERENCES tb_administradores(id_administrador);

ALTER TABLE tb_valoraciones
ADD CONSTRAINT fk_valo_detalle
FOREIGN KEY (id_detalle) REFERENCES tb_detalles_pedidos(id_detalle);

ALTER TABLE tb_detalles_pedidos
ADD CONSTRAINT fk_detalle_pedido
FOREIGN KEY (id_pedido) REFERENCES tb_pedidos(id_pedido),
ADD CONSTRAINT fk_detalle_producto
FOREIGN KEY (id_producto) REFERENCES tb_productos(id_producto);

SELECT* FROM tb_clientes;
SELECT* FROM tb_pedidos;
SELECT* FROM tb_detalles_pedidos;
SELECT * FROM tb_valoraciones;
SELECT * FROM tb_valoracion_productos;

INSERT INTO tb_cargos (nombre_cargo)values ('jefe');

INSERT INTO tb_administradores(nombre_administrador, apellido_administrador, id_cargo, correo_administrador, clave_administrador) 
VALUES ('Eduts', 'Guerra', 1, 'eduts@gmail.com','$2y$10$mgITCka8G.nd7u84zBEKZ.fpqpRiJDotyePB8WoxZA3..7DgBji7e' );

INSERT INTO tb_clientes (
    nombre_cliente, 
    apellido_cliente, 
    dui_cliente, 
    correo_cliente, 
    telefono_cliente, 
    nacimiento_cliente, 
    direccion_cliente, 
    clave_cliente
) VALUES (
    'Juan', 
    'Pérez', 
    '72345678-9', 
    '20220106@example.com', 
    '723456789', 
    '1985-01-01', 
    '1234 Elm Street', 
    '$2y$10$mgITCka8G.nd7u84zBEKZ.fpqpRiJDotyePB8WoxZA3..7DgBji7e'
);
