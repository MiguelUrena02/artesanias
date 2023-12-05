#create database plataforma_artesanias;
use plataforma_artesanias;

create table usuarios(
    id_usuario integer not null auto_increment,
    nombre varchar(128) not null,
    apellidos varchar(255) not null,
    calle varchar (100) not null,
    colonia varchar (100) not null,
    ciudad varchar (100) not null,
    estado varchar (100) not null,
    primary key (id_usuario)
);

create table oficios(
    id_oficio integer not null auto_increment,
    nombre varchar (100) not null,
    primary key (id_oficio)
);

create table artesanos(
    id_artesano integer not null auto_increment,
    nombre varchar(255) not null,
    apellidos varchar(255) not null,
    calle varchar (100) not null,
    colonia varchar (100) not null,
    ciudad varchar (100) not null,
    estado varchar (100) not null,
    fk_oficio varchar (30) not null,
    descripcion varchar (255) not null,
    primary key (id_artesano),
    foreign key (fk_id_autor) references oficios(id_oficio)
);

create table tipo_de_artesanias(
    id_tipo integer not null auto_increment,
    nombre varchar(50) not null,
    primary key (id_tipo)
);

create table artesanias(
    id_artesania integer not null auto_increment,
    nombre varchar(255) not null,
    descripcion varchar (255) not null,
    imagen LONGBLOB not null,
    precio float not null,
    fk_artesano varchar (1000) not null,
    fk_tipo_de_artesania integer not null,
    primary key (id_artesania),
    foreign key (fk_tipo_de_artesania) references tipo_de_artesania(id_tipo),
    foreign key (fk_artesano) references artesanos(id_artesano)
);

create table carritos(
    id_carrito integer auto_increment not null,
    fk_artesania integer not null,
    fk_usuario integer not null,
    cantidad integer not null,
    foreign key (fk_artesania) references artesanias(id_artesania),
    foreign key (fk_usuario) references usuarios(id_usuario)
);
