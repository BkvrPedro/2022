DROP DATABASE ecommerce;

CREATE DATABASE ecommerce;

CREATE TABLE categorias(
  id serial NOT NULL primary key,
  nome varchar NOT NULL
);

CREATE TABLE produtos(
  id serial NOT NULL primary key,
  nome varchar(100) NOT NULL,
  descricao text NOT NULL,
  preco int NOT NULL,
  quantidade_em_estoque int NOT NULL,
  categoria_id int NOT NULL references categorias(id)
);

CREATE TABLE itens_do_pedido(
  id serial NOT NULL ,
  pedido_id int NOT NULL primary key,
  quantidade int NOT NULL,
  produto_id int NOT NULL references produtos(id)
);

CREATE TABLE pedidos(
  id SERIAL NOT NULL references itens_do_pedido(pedido_id),
  valor int NOT NULL,
  cliente_cpf char(11) NOT NULL primary key,
  vendedor_cpf char(11) NOT NULL 
 );
 
 CREATE TABLE clientes(
  cpf char(11) NOT NULL references pedidos(cliente_cpf),
  nome varchar(150) NOT NULL
 );
 
 CREATE TABLE vendedores(
  cpf char(11) NOT NULL references pedidos(vendedor_cpf),
  nome varchar(150) NOT NULL
 );
 
 

