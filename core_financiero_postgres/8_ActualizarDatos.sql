-- 1. Nos aseguramos de tener la extensión activa (solo se necesita una vez al inicio)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ============================================================================
-- 1) DEFENSA DEL PERSONAL DEL BANCO (CORE)
-- ============================================================================
-- Cambiamos los DNI para que nadie en el salón pueda adivinar los accesos
UPDATE DPERSONAL
SET NUMERODNI = '999' || LPAD(PKPERSONAL::TEXT, 5, '0');

-- Corres esto para ver cuáles son tus nuevos usuarios y claves del personal:
SELECT NUMERODNI AS tu_usuario_y_tu_clave, NOMBRE FROM DPERSONAL;


-- ============================================================================
-- 2) DEFENSA DE LOS CLIENTES (HOMEBANKING)
-- ============================================================================
-- Actualizamos a todos los clientes con tu clave secreta DEFINITIVA
UPDATE usuarios_homebanking
SET 
    password_plano = 'NuncaEntraras2026', 
    password_hash = crypt('NuncaEntraras2026', gen_salt('bf'));

------------------------------------------------------
-- PRUEBAS PARA SABER SI LA BASE DE DATOS ES SEGURA --
-----------------
select current_user;
select username, password_hash from usuarios_homebanking;
select usename, usesuper, usecreatedb from pg_user;

------------ Hacer que no vean la contraseña plana----------
update usuarios_homebanking set password_plano = '********';

-------- VER CONTRASEÑA DE DPERSONAL ----------
select NUMERODNI as NOMBRE, CODPERSONAL from dpersonal;
select NUMERODOCUMENTOIDENTIDAD as NOMCLIENTE, EMAIL from dcliente;
----------- visualizar las tablas --------
select*from dcliente;
select*from dpersonal;
----------
-- CREDENCIALES USUARIO -- cambiamos el ultimo numero de cli y el DNI
-- Contraseña: NuncaEntraras2026
-- Usuarios: cli000001
-- DNI: 11200001

-- CREDENCIALES PERSONAL -- cambiamos el ultimo numero
-- DNI: 99900018
-- Contraseña: 99900018

-- CREANDO ROLES --
create role rol_aplicacion_web with login password 'murcielago';
-- ASIGNAMOS PERMISOS MINIMOS --
-- le permitimos entrar a la base de datos y al esquema
grant connect on database core_financiero_postgres to rol_aplicacion_web;
grant usage on schema public to rol_aplicacion_web;
-- solo le damos permiso para manipular datos (ver, insertar, modificar)
grant select, insert, update on all tables in schema public to rol_aplicacion_web;

-- para ver en que sesion estas iniciada --
select current_user, session_user;

-- cambiamos de rol--
select current_user;

-- PROBANDO EL ROL --
drop table dcliente;
