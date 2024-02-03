-- Active: 1705370176782@@localhost@5432@api_attacktitans@public
create table tbl_titan
(
    id serial primary key,
    nombre varchar (1000),
    especialidad varchar (1000),
    creado TIMESTAMP DEFAULT current_timestamp
);

insert into tbl_titan
(nombre, especialidad)
values
('T-Mujer', 'Fuerza'),
('T-Acorazado', 'Coraza'),
('T-Colosal', 'Altura');



select * from tbl_titan