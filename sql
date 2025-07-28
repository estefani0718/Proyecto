DROP USER IF EXISTS'Zaray'@'localhost';
CREATE USER 'Zaray'@'localhost' IDENTIFIED BY '12345678';
CREATE DATABASE ProyectoDomiexpro;
GRANT ALL PRIVILEGES ON ProyectoDomiexpro.* TO 'Zaray'@'localhost';
FLUSH PRIVILEGES;
DROP DATABASE ProyectoDomiexpro;

create database ProyectoDomiexpro;
show tables;
use ProyectoDomiexpro;


/*Tablas fuertes o las que no depende de ninguna otra */

 create table TipoDocumento(
 codigo_Tdocumento int auto_increment primary key ,
 tipo_Documento varchar (20)
);
drop table  TipoDocumento;
----------------------------------------------------
	 create table TipoTransporte (
	 placa char(8) primary key ,
	 nombre_transporte char(8) ,
	 modelo_vehiculo varchar(20) 
	 );

-------------------------------------------------
 create table Residencia(
 codigo_residencia int auto_increment primary key,
 nombre_municipio varchar (20)
 );

------------------------------------------------
create table CategoriaPaquete (
codigo_paquete int auto_increment primary key,
nombre_categoria varchar (15)
);

------------------------------------------------
drop table TipoCliente;
---------------------------------------------
create table Roles (
codigo_rol int auto_increment primary key,
rol varchar (20)
);

----------------------------------------------
create table Estados(
 id_estado INT AUTO_INCREMENT PRIMARY KEY,
nombre_estado VARCHAR(50) NOT NULL,
nombre_entidad VARCHAR(50) NOT NULL
);

-----------------------------------------------
create table Usuarios(
id int auto_increment  primary key,
nombre_usuario varchar (30),
documento_usuario bigint not null unique,
codigo_Tdocumento int,
foreign key (codigo_Tdocumento) references TipoDocumento (codigo_Tdocumento),
genero_usuario varchar(10),
direccion_usuario varchar (40),
telefono_usuario varchar(10) not null,
correo varchar(30),
id_estado int,
foreign key (id_estado) references Estados(id_estado),
codigo_rol int ,
foreign key (codigo_rol) references Roles(codigo_rol),
codigo_residencia int ,
foreign key (codigo_residencia ) references Residencia(codigo_residencia ),
usuario varchar(30) not null,
contrasena varchar(30) not null
);
drop table Usuarios;

-----------------------------------------------------
	create table TransporteUsuario(
	codigo_TransporteUsuario int auto_increment primary key,
	placa char(8),
	foreign key (placa) references  TipoTransporte (placa),
	documento_usuario bigint,
	foreign key (documento_usuario) references Usuarios(documento_usuario),
	anios_experiencia int ,
    id_estado int,
	foreign key (id_estado) references Estados(id_estado)
	);

---------------------------------------------
create table Factura(
codigo_factura int auto_increment primary key,
fecha_entrega date ,
documento_usuario bigint ,
foreign key (documento_usuario ) references Usuarios(documento_usuario),
codigo_TransporteUsuario int ,
foreign key (codigo_TransporteUsuario ) references TransporteUsuario(codigo_TransporteUsuario),
observaciones varchar(40),
precio_total decimal,
id_estado int,
foreign key (id_estado) references Estados(id_estado)
);

---------------------------------------------------------
create table TipoPaquete (
codigo_Tpaquete int auto_increment primary key,
nombre_paquete varchar(30),
detalles_adicionales varchar(40),
codigo_paquete int ,
foreign key (codigo_paquete ) references CategoriaPaquete(codigo_paquete ),
codigo_factura int ,
foreign key (codigo_factura ) references Factura(codigo_factura),
id_estado int,
foreign key (id_estado) references Estados(id_estado),
origen varchar (30),
metodo_pago varchar(20),
destino varchar(30),
valor_paquete decimal
);

------------------------------------------------------
 /* tabla permisos */
 
create table Permisos (
id_permiso int(4) zerofill auto_increment primary key ,
nombre_permiso varchar (50),
codigo_rol int ,
documento_usuario bigint,
foreign key (codigo_rol) references Roles (codigo_rol),
foreign key (documento_usuario)references Usuarios (documento_usuario) 
); 

------------------------------------------------------
INSERT INTO TipoDocumento (tipo_Documento) VALUES
('Cedula ciudadania'),
('Cedula extranjeria'),
('NIT');

INSERT INTO TipoTransporte (placa, nombre_transporte, modelo_vehiculo) VALUES
('ABC123', 'moto', 'Logan 2022'),
('XYZ789', 'carro', 'Sprinter 2020'),
('DEF456', 'Moto', 'Bajaj 2021');
INSERT INTO TipoTransporte (placa, nombre_transporte, modelo_vehiculo)
VALUES ('ABC1234', 'Camión', 'Renault Master');

INSERT INTO Residencia (nombre_municipio) VALUES
('Bucaramanga'),
('Giron'),
('Florida'),
('Pidecuesta');
INSERT INTO CategoriaPaquete (nombre_categoria) VALUES ('fragil'), ('pesado'), ('Especial');

INSERT INTO Roles (rol) VALUES
('Domiciliario'),
('Cliente'),
('Admin');

INSERT INTO Estados (nombre_estado, nombre_entidad)
VALUES 
-- Estados para Usuarios
('Activo', 'Usuarios'),
('Inactivo', 'Usuarios'),
('Eliminado', 'Usuarios'),

-- Estados para Paquetes
('En camino', 'Paquetes'),
('Entregado', 'Paquetes'),
('Cancelado', 'Paquetes'),
('Eliminado', 'Paquetes');


INSERT INTO Usuarios (
    nombre_usuario,
    documento_usuario,
    codigo_Tdocumento,
    genero_usuario,
    direccion_usuario,
    telefono_usuario,
    correo,
    id_estado,
    codigo_rol,
    codigo_residencia,
    usuario,
    contrasena
) VALUES (
    'Laura Gómez',
    1098765432,
    1,                  -- Por ejemplo: 1 = Cédula
    'Femenino',
    'Calle 45 #12-34',
    '3001234567',
    'laura@example.com',
    1,                  -- Por ejemplo: 1 = Activo
    2,                  -- Por ejemplo: 2 = Cliente
    3,                  -- Por ejemplo: 3 = Bogotá
    'laurag',
    'clave123'
);

INSERT INTO TipoTransporte (placa, nombre_transporte, modelo_vehiculo) VALUES
('ABC123', 'Taxi', 'Logan 2022'),
('XYZ789', 'Buseta', 'Sprinter 2020'),
('DEF456', 'Moto', 'Bajaj 2021');
INSERT INTO TransporteUsuario (placa, documento_usuario, anios_experiencia)
VALUES ('ABC123', 27740964, 3);


INSERT INTO Factura (fecha_entrega, documento_usuario, observaciones, precio_total)
VALUES ('2025-07-21', 1234567890, 'Entrega sin novedades', 45000.00);

INSERT INTO TipoPaquete (
    nombre_paquete, detalles_adicionales, codigo_TransporteUsuario, codigo_paquete,
    codigo_factura, id_estado, origen, destino, valor_paquete
) VALUES (
    'Caja de libros', 'Paquete frágil, no mojar', 3, 1, 1, 3, 'Bogotá', 'Medellín', 45000.00
);
SELECT * FROM Roles WHERE codigo_rol = 3;
SELECT * FROM Roles;

ALTER TABLE Usuarios MODIFY telefono_usuario VARCHAR(15) NOT NULL;
ALTER TABLE Usuarios MODIFY tipo_cliente VARCHAR(15) NOT NULL;
SELECT * FROM TransporteUsuario WHERE codigo_TransporteUsuario = 3;

SELECT * FROM TipoTransporte;
SELECT * FROM Usuarios WHERE documento_usuario = 1234567890;
SELECT * FROM TransporteUsuario;
select*from CategoriaPaquete;
SELECT * FROM TipoCliente;
select * from Usuarios;
SELECT * FROM Estados;
SELECT * FROM TipoTransporte;
select *from Residencia;

drop table Permisos;
drop table  Factura;
drop table TipoPaquete;
drop table TransporteUsuario;
drop table Usuarios;
drop table Estados;
drop table TipoCliente;
drop table Roles;
drop table CategoriaPaquete;
 drop table Residencia;
 drop table  TipoTransporte;
drop table  TipoDocumento;




