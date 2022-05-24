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
 
 INSERT INTO livros (autor_id, nome, editora, genero, data_publicacao) VALUES
 (1, 'A volta dos que nao foram', 'Atena', 'Suspense', '02-06-1996'),
 (2, 'A ida dos que nao vieram', 'Antena', 'Comedia', '06-02-1996');
