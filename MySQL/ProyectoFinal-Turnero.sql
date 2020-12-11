create database proyecto_grupal_final;
use proyecto_grupal_final;

-- CREATE TABLE PACIENTES
create table if not exists Pacientes(
DNI int not null,
email varchar(45),
nombre varchar(45),
apellido varchar(45),
cobertura varchar(45),
telefono varchar(15),
contraseña varchar(45) not null,
primary key (DNI)
);

-- CREATE TABLE ESPECIALIDADES
create table if not exists Especialidades (
nombreEspecialidad varchar(45) not null,
primary key (nombreEspecialidad)
);

-- CREATE TABLE MEDICOS
create table if not exists Medicos(
idMedicos int not null,
nombre varchar(45),
apellido varchar(45),
Especialidades_nombreEspecialidad varchar(45),
primary key (idMedicos),
constraint medico_especialidad foreign key (Especialidades_nombreEspecialidad) references Especialidades (nombreEspecialidad)
);

-- CREATE TABLE HORARIO
create table if not exists Horario(
turno_id int not null,
fecha date,
turno varchar(50),
primary key (turno_id)
);

-- CREATE TABLE CONSULTA
create table if not exists Consulta(
idConsulta int not null auto_increment,
DNI int,
Medicos_idMedicos int,
Horario_turno_id int,
primary key (idConsulta),
constraint consulta_paciente foreign key (DNI) references Pacientes (DNI),
constraint consulta_medicos foreign key (Medicos_idMedicos) references Medicos (idMedicos),
constraint consulta_horarios foreign key (Horario_turno_id) references Horario (turno_id)
);

-- INSERT ESPECIALIDADES
insert into Especialidades (nombreEspecialidad) values ('Otorrinolaringologia');
insert into Especialidades (nombreEspecialidad) values ('Pediatria');
insert into Especialidades (nombreEspecialidad) values ('Cardiologia');
insert into Especialidades (nombreEspecialidad) values ('Traumatologia');
insert into Especialidades (nombreEspecialidad) values ('Ginecologia y Obstetricia');
insert into Especialidades (nombreEspecialidad) values ('Urologia');
insert into Especialidades (nombreEspecialidad) values ('Clinica Medica');
insert into Especialidades (nombreEspecialidad) values ('Hematologia');
insert into Especialidades (nombreEspecialidad) values ('Odontologia');
insert into Especialidades (nombreEspecialidad) values ('Oftalmologia');

-- INSERT MEDICOS
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (1, 'Ernesto', 'Pereyra', 'Traumatologia');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (2, 'Juan Pedro', 'Marsi', 'Odontologia');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (3, 'Joaquin', 'Parra', 'Clinica Medica');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (4, 'Lisa', 'Paez', 'Hematologia');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (5, 'Marcos', 'Tano', 'Traumatologia');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (6, 'Mercedes', 'Tapia', 'Urologia');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (7, 'Maria Emilia', 'Larsen', 'Ginecologia y Obstetricia');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (8, 'Emilce', 'Laser', 'Odontologia');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (9, 'Lucia', 'Osa', 'Oftalmologia');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (10, 'Ramiro', 'Perez', 'Ginecologia y Obstetricia');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (11, 'Valeria', 'Petersen', 'Pediatria');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (12, 'Viviana', 'Pereyra', 'Oftalmologia');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (13, 'Lisandro', 'Torres', 'Otorrinolaringologia');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (14, 'Marina', 'Marsico', 'Clinica Medica');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (15, 'Mina', 'Paela', 'Oftalmologia');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (16, 'Melina', 'Martinez', 'Otorrinolaringologia');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (17, 'Jose Luis', 'Pintos', 'Clinica Medica');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (18, 'Carlos', 'Basualdo', 'Urologia');
insert into Medicos (idMedicos, nombre, apellido, Especialidades_nombreEspecialidad) values (19, 'Horacio', 'Juarez', 'Hematologia');

-- INSERT PACIENTES
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (30998123, 'juanI89@mail.com', 'Juan', 'Inchaustegui', 'Swiss Medical', 2494567789, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (12887212, 'jose44@mail.com', 'Josefina', 'Mendoza', 'OSDE', 2494578998, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (16778255, 'mariaM@mail.com', 'Maria Mercedes', 'Gentile', 'OSDE', 2494557768, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (38990212, 'joaquina23@mail.com', 'Joaquina', 'Maritonena', 'OSDE', 2494559220, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (30120379, 'lulu_9@mail.com', 'Lucia', 'Ramil', 'Medife', 2494889576, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (14777829, 'mariana.juarez@mail.com', 'Mariana', 'Juarez', 'Swiss Medical', 2494889339, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (31099023, 'valeria90@mail.com', 'Valeria', 'Marquez', 'Particular', 2494123002, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (14092378, 'oscarGallego@mail.com', 'Oscar', 'Gallego', 'Sancor', 2494338291, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) value(11234992, 'susana_lara@mail.com', 'Susana', 'Lara', 'OSDE', 2494778339, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (40129932, 'mmm.90@mail.com', 'Maite', 'Hernandez', 'Medife', 2494388272, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (30772634, 'juana_34@mail.com', 'Juana', 'Guerrero', 'Swiss Medical', 22974234192, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (29918220, 'm.paz@mail.com', 'Maria Paz', 'Guzman', 'Sancor', 249475885, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (28002123, 'julia.m.80@mail.com', 'Julia', 'Taboada', 'IOMA', 249402339, "12345"); 
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (26900164, 'juanJL@mail.com', 'Juan Jose', 'Lucero', 'OSDE', 249483449, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (30928332, 'gaby83@mail.com', 'Gabriela', 'Gomez', 'OSDE', 22974567338, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (32067832, 'carla83@mail.com', 'Carla', 'Carrizo', 'Swiss Medical', 249478892, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (20930218, 'julian_lema@mail.com', 'Julian', 'Lema', 'IOMA', 22974893372, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (16287544, 'miriam64@mail.com', 'Miriam', 'Kraus', 'IOMA', 2494876693, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (10884932, 'nancyM@mail.com', 'Nancy', 'Machado', 'PAMI', 2494578857, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña)values (11983277, 'elsaP@mail,com', 'Elsa', 'Peralta', 'PAMI', 2494823792, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (28992830, 'juan.c@mail.com', 'Juan', 'Carrizo', 'Swiss Medical', 2494758230, "12345");
insert into Pacientes (DNI, email, nombre, apellido, cobertura, telefono, contraseña) values (33483923, 'macarena.n@mail.com', 'Macarena', 'Merino', 'Medife', 2494756483, "12345");

-- INSERT HORARIO
insert into Horario (turno_id, fecha, turno) values (1, '2020-12-26', '09:00');
insert into Horario (turno_id, fecha, turno) values (2, '2020-12-26', '09:30');
insert into Horario (turno_id, fecha, turno) values (3,'2020-12-26', '10:00');
insert into Horario (turno_id, fecha, turno) values (4, '2020-12-26', '10:30');
insert into Horario (turno_id, fecha, turno) values (5, '2020-12-26', '11:00');
insert into Horario (turno_id, fecha, turno) values (6, '2020-12-26', '11:30');
insert into Horario (turno_id, fecha, turno) values (7, '2020-12-26', '12:00');
insert into Horario (turno_id, fecha, turno) values (8, '2020-12-26', '12:30');
insert into Horario (turno_id, fecha, turno) values (9, '2020-12-26', '13:00');
insert into Horario (turno_id, fecha, turno) values (10, '2020-12-26', '13:30');
insert into Horario (turno_id, fecha, turno) values (11, '2020-12-26', '14:00');
insert into Horario (turno_id, fecha, turno) values (12, '2020-12-26', '14:30');
insert into Horario (turno_id, fecha, turno) values (13, '2020-12-26', '15:00');
insert into Horario (turno_id, fecha, turno) values (14, '2020-12-26', '15:30');
insert into Horario (turno_id, fecha, turno) values (15, '2020-12-26', '16:00');
insert into Horario (turno_id, fecha, turno) values (16, '2020-12-28', '16:30');
insert into Horario (turno_id, fecha, turno) values (17, '2020-12-28', '09:00');
insert into Horario (turno_id, fecha, turno) values (18, '2020-12-28', '09:30');
insert into Horario (turno_id, fecha, turno) values (19, '2020-12-28', '10:00');
insert into Horario (turno_id, fecha, turno) values (20, '2020-12-28', '10:30');
insert into Horario (turno_id, fecha, turno) values (21, '2020-12-28', '11:00');
insert into Horario (turno_id, fecha, turno) values (22, '2020-12-28', '11:30');
insert into Horario (turno_id, fecha, turno) values (23, '2020-12-28', '12:00');
insert into Horario (turno_id, fecha, turno) values (24, '2020-12-28', '12:30');
insert into Horario (turno_id, fecha, turno) values (25, '2020-12-28', '13:00');
insert into Horario (turno_id, fecha, turno) values (26, '2020-12-28', '13:30');
insert into Horario (turno_id, fecha, turno) values (27, '2020-12-28', '14:00');
insert into Horario (turno_id, fecha, turno) values (28, '2020-12-28', '14:30');
insert into Horario (turno_id, fecha, turno) values (29, '2020-12-28', '15:00');
insert into Horario (turno_id, fecha, turno) values (30, '2020-12-28', '15:30');
insert into Horario (turno_id, fecha, turno) values (31, '2020-12-28', '16:00');
insert into Horario (turno_id, fecha, turno) values (32, '2020-12-28', '16:30');
insert into Horario (turno_id, fecha, turno) values (33, '2020-12-29', '09:00');
insert into Horario (turno_id, fecha, turno) values (34, '2020-12-29', '09:30');
insert into Horario (turno_id, fecha, turno) values (35, '2020-12-29', '10:00');
insert into Horario (turno_id, fecha, turno) values (36, '2020-12-29', '10:30');
insert into Horario (turno_id, fecha, turno) values (37, '2020-12-29', '11:00');
insert into Horario (turno_id, fecha, turno) values (38, '2020-12-29', '11:30');
insert into Horario (turno_id, fecha, turno) values (39, '2020-12-29', '12:00');
insert into Horario (turno_id, fecha, turno) values (40, '2020-12-29', '12:30');
insert into Horario (turno_id, fecha, turno) values (41, '2020-12-29', '13:00');
insert into Horario (turno_id, fecha, turno) values (42, '2020-12-29', '13:30');
insert into Horario (turno_id, fecha, turno) values (43, '2020-12-29', '14:00');
insert into Horario (turno_id, fecha, turno) values (44, '2020-12-29', '14:30');
insert into Horario (turno_id, fecha, turno) values (45, '2020-12-29', '15:00');
insert into Horario (turno_id, fecha, turno) values (46, '2020-12-29', '15:30');
insert into Horario (turno_id, fecha, turno) values (47, '2020-12-29', '16:00');
insert into Horario (turno_id, fecha, turno) values (48, '2020-12-29', '16:30');
insert into Horario (turno_id, fecha, turno) values (49, '2020-12-30', '09:00');
insert into Horario (turno_id, fecha, turno) values (50, '2020-12-30', '09:30');
insert into Horario (turno_id, fecha, turno) values (51, '2020-12-30', '10:00');
insert into Horario (turno_id, fecha, turno) values (52, '2020-12-30', '10:30');
insert into Horario (turno_id, fecha, turno) values (53, '2020-12-30', '11:00');
insert into Horario (turno_id, fecha, turno) values (54, '2020-12-30', '11:30');
insert into Horario (turno_id, fecha, turno) values (55, '2020-12-30', '12:00');
insert into Horario (turno_id, fecha, turno) values (56, '2020-12-30', '12:30');
insert into Horario (turno_id, fecha, turno) values (57, '2020-12-30', '13:00');
insert into Horario (turno_id, fecha, turno) values (58, '2020-12-30', '13:30');
insert into Horario (turno_id, fecha, turno) values (59, '2020-12-30', '14:00');
insert into Horario (turno_id, fecha, turno) values (60, '2020-12-30', '14:30');
insert into Horario (turno_id, fecha, turno) values (61, '2020-12-30', '15:00');
insert into Horario (turno_id, fecha, turno) values (62, '2020-12-30', '15:30');
insert into Horario (turno_id, fecha, turno) values (63, '2020-12-30', '16:00');
insert into Horario (turno_id, fecha, turno) values (64, '2020-12-30', '16:30');
insert into Horario (turno_id, fecha, turno) values (65, '2020-12-31', '09:00');
insert into Horario (turno_id, fecha, turno) values (66, '2020-12-31', '09:30');
insert into Horario (turno_id, fecha, turno) values (67, '2020-12-31', '10:00');
insert into Horario (turno_id, fecha, turno) values (68, '2020-12-31', '10:30');
insert into Horario (turno_id, fecha, turno) values (69, '2020-12-31', '11:00');
insert into Horario (turno_id, fecha, turno) values (70, '2020-12-31', '11:30');
insert into Horario (turno_id, fecha, turno) values (71, '2020-12-31', '12:00');
insert into Horario (turno_id, fecha, turno) values (72, '2020-12-31', '12:30');
insert into Horario (turno_id, fecha, turno) values (73, '2020-12-31', '13:00');
insert into Horario (turno_id, fecha, turno) values (74, '2020-12-31', '13:30');
insert into Horario (turno_id, fecha, turno) values (75, '2020-12-31', '14:00');
insert into Horario (turno_id, fecha, turno) values (76, '2020-12-31', '14:30');
insert into Horario (turno_id, fecha, turno) values (77, '2020-12-31', '15:00');
insert into Horario (turno_id, fecha, turno) values (78, '2020-12-31', '15:30');
insert into Horario (turno_id, fecha, turno) values (79, '2020-12-31', '16:00');
insert into Horario (turno_id, fecha, turno) values (80, '2020-12-31', '16:30');
insert into Horario (turno_id, fecha, turno) values (81, '2021-01-04', '09:00');
insert into Horario (turno_id, fecha, turno) values (82, '2021-01-04', '09:30');
insert into Horario (turno_id, fecha, turno) values (83, '2021-01-04', '10:00');
insert into Horario (turno_id, fecha, turno) values (84, '2021-01-04', '10:30');
insert into Horario (turno_id, fecha, turno) values (85, '2021-01-04', '11:00');
insert into Horario (turno_id, fecha, turno) values (86, '2021-01-04', '11:30');
insert into Horario (turno_id, fecha, turno) values (87, '2021-01-04', '12:00');
insert into Horario (turno_id, fecha, turno) values (88, '2021-01-04', '12:30');
insert into Horario (turno_id, fecha, turno) values (89, '2021-01-04', '13:00');
insert into Horario (turno_id, fecha, turno) values (90, '2021-01-04', '13:30');
insert into Horario (turno_id, fecha, turno) values (91, '2021-01-04', '14:00');
insert into Horario (turno_id, fecha, turno) values (92, '2021-01-04', '14:30');
insert into Horario (turno_id, fecha, turno) values (93, '2021-01-04', '15:00');
insert into Horario (turno_id, fecha, turno) values (94, '2021-01-04', '15:30');
insert into Horario (turno_id, fecha, turno) values (95, '2021-01-04', '16:00');
insert into Horario (turno_id, fecha, turno) values (96, '2021-01-04', '16:30');
insert into Horario (turno_id, fecha, turno) values (97, '2021-01-05', '09:00');
insert into Horario (turno_id, fecha, turno) values (98, '2021-01-05', '09:30');
insert into Horario (turno_id, fecha, turno) values (99, '2021-01-05', '10:00');
insert into Horario (turno_id, fecha, turno) values (100, '2021-01-05', '10:30');
insert into Horario (turno_id, fecha, turno) values (101, '2021-01-05', '11:00');
insert into Horario (turno_id, fecha, turno) values (102, '2021-01-05', '11:30');
insert into Horario (turno_id, fecha, turno) values (103, '2021-01-05', '12:00');
insert into Horario (turno_id, fecha, turno) values (104, '2021-01-05', '12:30');
insert into Horario (turno_id, fecha, turno) values (105, '2021-01-05', '13:00');
insert into Horario (turno_id, fecha, turno) values (106, '2021-01-05', '13:30');
insert into Horario (turno_id, fecha, turno) values (107, '2021-01-05', '14:00');
insert into Horario (turno_id, fecha, turno) values (108, '2021-01-05', '14:30');
insert into Horario (turno_id, fecha, turno) values (109, '2021-01-05', '15:00');
insert into Horario (turno_id, fecha, turno) values (110, '2021-01-05', '15:30');
insert into Horario (turno_id, fecha, turno) values (111, '2021-01-05', '16:00');
insert into Horario (turno_id, fecha, turno) values (112, '2021-01-05', '16:30');
insert into Horario (turno_id, fecha, turno) values (113, '2021-01-06', '09:00');
insert into Horario (turno_id, fecha, turno) values (114, '2021-01-06', '09:30');
insert into Horario (turno_id, fecha, turno) values (115, '2021-01-06', '10:00');
insert into Horario (turno_id, fecha, turno) values (116, '2021-01-06', '10:30');
insert into Horario (turno_id, fecha, turno) values (117, '2021-01-06', '11:00');
insert into Horario (turno_id, fecha, turno) values (118, '2021-01-06', '11:30');
insert into Horario (turno_id, fecha, turno) values (119, '2021-01-06', '12:00');
insert into Horario (turno_id, fecha, turno) values (120, '2021-01-06', '12:30');
insert into Horario (turno_id, fecha, turno) values (121, '2021-01-06', '13:00');
insert into Horario (turno_id, fecha, turno) values (122, '2021-01-06', '13:30');
insert into Horario (turno_id, fecha, turno) values (123, '2021-01-06', '14:00');
insert into Horario (turno_id, fecha, turno) values (124, '2021-01-06', '14:30');
insert into Horario (turno_id, fecha, turno) values (125, '2021-01-06', '15:00');
insert into Horario (turno_id, fecha, turno) values (126, '2021-01-06', '15:30');
insert into Horario (turno_id, fecha, turno) values (127, '2021-01-06', '16:00');
insert into Horario (turno_id, fecha, turno) values (128, '2021-01-06', '16:30');
insert into Horario (turno_id, fecha, turno) values (129, '2021-01-07', '09:00');
insert into Horario (turno_id, fecha, turno) values (130, '2021-01-07', '09:30');
insert into Horario (turno_id, fecha, turno) values (131, '2021-01-07', '10:00');
insert into Horario (turno_id, fecha, turno) values (132, '2021-01-07', '10:30');
insert into Horario (turno_id, fecha, turno) values (133, '2021-01-07', '11:00');
insert into Horario (turno_id, fecha, turno) values (134, '2021-01-07', '11:30');
insert into Horario (turno_id, fecha, turno) values (135, '2021-01-07', '12:00');
insert into Horario (turno_id, fecha, turno) values (136, '2021-01-07', '12:30');
insert into Horario (turno_id, fecha, turno) values (137, '2021-01-07', '13:00');
insert into Horario (turno_id, fecha, turno) values (138, '2021-01-07', '13:30');
insert into Horario (turno_id, fecha, turno) values (139, '2021-01-07', '14:00');
insert into Horario (turno_id, fecha, turno) values (140, '2021-01-07', '14:30');
insert into Horario (turno_id, fecha, turno) values (141, '2021-01-07', '15:00');
insert into Horario (turno_id, fecha, turno) values (142, '2021-01-07', '15:30');
insert into Horario (turno_id, fecha, turno) values (143, '2021-01-07', '16:00');
insert into Horario (turno_id, fecha, turno) values (144, '2021-01-07', '16:30');
insert into Horario (turno_id, fecha, turno) values (145, '2021-01-08', '09:00');
insert into Horario (turno_id, fecha, turno) values (146, '2021-01-08', '09:30');
insert into Horario (turno_id, fecha, turno) values (147, '2021-01-08', '10:00');
insert into Horario (turno_id, fecha, turno) values (148, '2021-01-08', '10:30');
insert into Horario (turno_id, fecha, turno) values (149, '2021-01-08', '11:00');
insert into Horario (turno_id, fecha, turno) values (150, '2021-01-08', '11:30');
insert into Horario (turno_id, fecha, turno) values (151, '2021-01-08', '12:00');
insert into Horario (turno_id, fecha, turno) values (152, '2021-01-08', '12:30');
insert into Horario (turno_id, fecha, turno) values (153, '2021-01-08', '13:00');
insert into Horario (turno_id, fecha, turno) values (154, '2021-01-08', '13:30');
insert into Horario (turno_id, fecha, turno) values (155, '2021-01-08', '14:00');
insert into Horario (turno_id, fecha, turno) values (156, '2021-01-08', '14:30');
insert into Horario (turno_id, fecha, turno) values (157, '2021-01-08', '15:00');
insert into Horario (turno_id, fecha, turno) values (158, '2021-01-08', '15:30');
insert into Horario (turno_id, fecha, turno) values (159, '2021-01-08', '16:00');
insert into Horario (turno_id, fecha, turno) values (160, '2021-01-08', '16:30');
insert into Horario (turno_id, fecha, turno) values (161, '2021-01-11', '09:00');
insert into Horario (turno_id, fecha, turno) values (162, '2021-01-11', '09:30');
insert into Horario (turno_id, fecha, turno) values (163, '2021-01-11', '10:00');
insert into Horario (turno_id, fecha, turno) values (164, '2021-01-11', '10:30');
insert into Horario (turno_id, fecha, turno) values (165, '2021-01-11', '11:00');
insert into Horario (turno_id, fecha, turno) values (166, '2021-01-11', '11:30');
insert into Horario (turno_id, fecha, turno) values (167, '2021-01-11', '12:00');
insert into Horario (turno_id, fecha, turno) values (168, '2021-01-11', '12:30');
insert into Horario (turno_id, fecha, turno) values (169, '2021-01-11', '13:00');
insert into Horario (turno_id, fecha, turno) values (170, '2021-01-11', '13:30');
insert into Horario (turno_id, fecha, turno) values (171, '2021-01-11', '14:00');
insert into Horario (turno_id, fecha, turno) values (172, '2021-01-11', '14:30');
insert into Horario (turno_id, fecha, turno) values (173, '2021-01-11', '15:00');
insert into Horario (turno_id, fecha, turno) values (174, '2021-01-11', '15:30');
insert into Horario (turno_id, fecha, turno) values (175, '2021-01-11', '16:00');
insert into Horario (turno_id, fecha, turno) values (176, '2021-01-11', '16:30');
insert into Horario (turno_id, fecha, turno) values (177, '2021-01-12', '09:00');
insert into Horario (turno_id, fecha, turno) values (178, '2021-01-12', '09:30');
insert into Horario (turno_id, fecha, turno) values (179, '2021-01-12', '10:00');
insert into Horario (turno_id, fecha, turno) values (180, '2021-01-12', '10:30');
insert into Horario (turno_id, fecha, turno) values (181, '2021-01-12', '11:00');
insert into Horario (turno_id, fecha, turno) values (182, '2021-01-12', '11:30');
insert into Horario (turno_id, fecha, turno) values (183, '2021-01-12', '12:00');
insert into Horario (turno_id, fecha, turno) values (184, '2021-01-12', '12:30');
insert into Horario (turno_id, fecha, turno) values (185, '2021-01-12', '13:00');
insert into Horario (turno_id, fecha, turno) values (186, '2021-01-12', '13:30');
insert into Horario (turno_id, fecha, turno) values (187, '2021-01-12', '14:00');
insert into Horario (turno_id, fecha, turno) values (188, '2021-01-12', '14:30');
insert into Horario (turno_id, fecha, turno) values (189, '2021-01-12', '15:00');
insert into Horario (turno_id, fecha, turno) values (190, '2021-01-12', '15:30');
insert into Horario (turno_id, fecha, turno) values (191, '2021-01-12', '16:00');
insert into Horario (turno_id, fecha, turno) values (192, '2021-01-12', '16:30');
insert into Horario (turno_id, fecha, turno) values (193, '2021-01-13', '09:00');
insert into Horario (turno_id, fecha, turno) values (194, '2021-01-13', '09:30');
insert into Horario (turno_id, fecha, turno) values (195, '2021-01-13', '10:00');
insert into Horario (turno_id, fecha, turno) values (196, '2021-01-13', '10:30');
insert into Horario (turno_id, fecha, turno) values (197, '2021-01-13', '11:00');
insert into Horario (turno_id, fecha, turno) values (198, '2021-01-13', '11:30');
insert into Horario (turno_id, fecha, turno) values (199, '2021-01-13', '12:00');
insert into Horario (turno_id, fecha, turno) values (200, '2021-01-13', '12:30');
insert into Horario (turno_id, fecha, turno) values (201, '2021-01-13', '13:00');
insert into Horario (turno_id, fecha, turno) values (202, '2021-01-13', '13:30');
insert into Horario (turno_id, fecha, turno) values (203, '2021-01-13', '14:00');
insert into Horario (turno_id, fecha, turno) values (204, '2021-01-13', '14:30');
insert into Horario (turno_id, fecha, turno) values (205, '2021-01-13', '15:00');
insert into Horario (turno_id, fecha, turno) values (206, '2021-01-13', '15:30');
insert into Horario (turno_id, fecha, turno) values (207, '2021-01-13', '16:00');
insert into Horario (turno_id, fecha, turno) values (208, '2021-01-13', '16:30');
insert into Horario (turno_id, fecha, turno) values (209, '2021-01-14', '09:00');
insert into Horario (turno_id, fecha, turno) values (210, '2021-01-14', '09:30');
insert into Horario (turno_id, fecha, turno) values (211, '2021-01-14', '10:00');
insert into Horario (turno_id, fecha, turno) values (212, '2021-01-14', '10:30');
insert into Horario (turno_id, fecha, turno) values (213, '2021-01-14', '11:00');
insert into Horario (turno_id, fecha, turno) values (214, '2021-01-14', '11:30');
insert into Horario (turno_id, fecha, turno) values (215, '2021-01-14', '12:00');
insert into Horario (turno_id, fecha, turno) values (216, '2021-01-14', '12:30');
insert into Horario (turno_id, fecha, turno) values (217, '2021-01-14', '13:00');
insert into Horario (turno_id, fecha, turno) values (218, '2021-01-14', '13:30');
insert into Horario (turno_id, fecha, turno) values (219, '2021-01-14', '14:00');
insert into Horario (turno_id, fecha, turno) values (220, '2021-01-14', '14:30');
insert into Horario (turno_id, fecha, turno) values (221, '2021-01-14', '15:00');
insert into Horario (turno_id, fecha, turno) values (222, '2021-01-14', '15:30');
insert into Horario (turno_id, fecha, turno) values (223, '2021-01-14', '16:00');
insert into Horario (turno_id, fecha, turno) values (224, '2021-01-14', '16:30');
insert into Horario (turno_id, fecha, turno) values (225, '2021-01-15', '09:00');
insert into Horario (turno_id, fecha, turno) values (226, '2021-01-15', '09:30');
insert into Horario (turno_id, fecha, turno) values (227, '2021-01-15', '10:00');
insert into Horario (turno_id, fecha, turno) values (228, '2021-01-15', '10:30');
insert into Horario (turno_id, fecha, turno) values (229, '2021-01-15', '11:00');
insert into Horario (turno_id, fecha, turno) values (230, '2021-01-15', '11:30');
insert into Horario (turno_id, fecha, turno) values (231, '2021-01-15', '12:00');
insert into Horario (turno_id, fecha, turno) values (232, '2021-01-15', '12:30');
insert into Horario (turno_id, fecha, turno) values (233, '2021-01-15', '13:00');
insert into Horario (turno_id, fecha, turno) values (234, '2021-01-15', '13:30');
insert into Horario (turno_id, fecha, turno) values (235, '2021-01-15', '14:00');
insert into Horario (turno_id, fecha, turno) values (236, '2021-01-15', '14:30');
insert into Horario (turno_id, fecha, turno) values (237, '2021-01-15', '15:00');
insert into Horario (turno_id, fecha, turno) values (238, '2021-01-15', '15:30');
insert into Horario (turno_id, fecha, turno) values (239, '2021-01-15', '16:00');
insert into Horario (turno_id, fecha, turno) values (240, '2021-01-15', '16:30');

-- INSERT CONSULTA
insert into Consulta (idConsulta, DNI, Medicos_idMedicos, Horario_turno_id) values (1, 12887212, 5, 2);
insert into Consulta (idConsulta, DNI,  Medicos_idMedicos, Horario_turno_id) values (2, 30772634, 6, 3); 
insert into Consulta (idConsulta, DNI,  Medicos_idMedicos, Horario_turno_id) values (3, 28992830, 6, 4);
insert into Consulta (idConsulta, DNI,  Medicos_idMedicos, Horario_turno_id) values (4, 33483923, 10, 6);
insert into Consulta (idConsulta, DNI,  Medicos_idMedicos, Horario_turno_id) values (5, 29918220, 15, 2);
insert into Consulta (idConsulta, DNI,  Medicos_idMedicos, Horario_turno_id) values (6, 28002123, 8, 13);
insert into Consulta (idConsulta, DNI,  Medicos_idMedicos, Horario_turno_id) values (7, 14777829, 4, 16);
insert into Consulta (idConsulta, DNI,  Medicos_idMedicos, Horario_turno_id) values (8, 11234992, 4, 15);
insert into Consulta (idConsulta, DNI,  Medicos_idMedicos, Horario_turno_id) values (9, 31099023, 16, 16);
insert into Consulta (idConsulta, DNI,  Medicos_idMedicos, Horario_turno_id) values (10, 30120379, 2, 3);
insert into Consulta (idConsulta, DNI,  Medicos_idMedicos, Horario_turno_id) values (11, 40129932, 14, 14);
