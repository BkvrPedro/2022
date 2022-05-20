CREATE DATABASE "Conexao VSCODE";

DROP TABLE if exists autores;

CREATE TABLE autores (
  id serial primary key,
  nome text not null,
  idade smallint
  );
  
 DROP TABLE IF EXISTS livros;
 
 CREATE TABLE livros (
   id serial primary key,
   autor_id int not null,
   nome text not null,
   editora varchar (100),
   genero varchar (50) not null,
   data_publicacao date,
   foreign key (autor_id) references autores (id)
 );
 
 INSERT INTO autores (nome, idade) VALUES
 ('Ambrosio Duarte', 79),
 ('Chico da Silva', 57);
