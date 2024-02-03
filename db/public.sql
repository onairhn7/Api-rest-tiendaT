-- Active: 1705370176782@@localhost@5432@api_attacktitans@public


create table tbl_zona_titanes
(
    id serial primary key,
    nombre varchar (200),
    creado TIMESTAMP DEFAULT current_timestamp
)

create table tbl_titan
(
    id serial primary key,
    nombre varchar (1000),
    especialidad varchar (1000),
    id_zona int REFERENCES tbl_zona_titanes (id),
    creado TIMESTAMP DEFAULT current_timestamp
);

create table tbl_elegidos
(
    id serial primary key,
    nombre_elegido varchar (300),
    precio numeric,
    fecha_compra TIMESTAMP DEFAULT current_timestamp
)

select a.*, b.nombre as nombre_zona from tbl_titan a inner join tbl_zona_titanes b on a.id_zona =b.id

select * from tbl_titan