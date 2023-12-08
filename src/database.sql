-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS plataforma_artesanias;

-- Usar la base de datos
USE plataforma_artesanias;

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(128) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    calle VARCHAR(100) NOT NULL,
    colonia VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_usuario)
);

-- Tabla de oficios
CREATE TABLE IF NOT EXISTS oficios (
    id_oficio INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_oficio)
);

-- Tabla de artesanos
CREATE TABLE IF NOT EXISTS artesanos (
    id_artesano INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    calle VARCHAR(100) NOT NULL,
    colonia VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    fk_oficio INT NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_artesano),
    FOREIGN KEY (fk_oficio) REFERENCES oficios(id_oficio)
);

-- Tabla de tipos de artesanías
CREATE TABLE IF NOT EXISTS tipo_de_artesanias (
    id_tipo INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_tipo)
);

-- Tabla de artesanías
CREATE TABLE IF NOT EXISTS artesanias (
    id_artesania INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    imagen LONGBLOB,
    precio FLOAT NOT NULL,
    fk_artesano INT NOT NULL,
    fk_tipo_de_artesania INT NOT NULL,
    PRIMARY KEY (id_artesania),
    FOREIGN KEY (fk_tipo_de_artesania) REFERENCES tipo_de_artesanias(id_tipo),
    FOREIGN KEY (fk_artesano) REFERENCES artesanos(id_artesano)
);

-- Tabla de carritos
CREATE TABLE IF NOT EXISTS carritos (
    id_carrito INT AUTO_INCREMENT NOT NULL,
    fk_artesania INT NOT NULL,
    fk_usuario INT NOT NULL,
    cantidad INT NOT NULL,
    PRIMARY KEY (id_carrito),
    FOREIGN KEY (fk_artesania) REFERENCES artesanias(id_artesania),
    FOREIGN KEY (fk_usuario) REFERENCES usuarios(id_usuario)
);

