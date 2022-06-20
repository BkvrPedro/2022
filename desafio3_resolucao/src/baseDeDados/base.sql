CREATE DATABASE dindin;

CREATE TABLE usuarios(
  id SERIAL PRIMARY KEY,
  nome VARCHAR,
  email VARCHAR UNIQUE,
  senha VARCHAR 
  );
  
 CREATE TABLE categorias(
    id SERIAL PRIMARY KEY,
    descricao VARCHAR
    );

CREATE TABLE transacoes(
    id SERIAL,
    descricao VARCHAR,
    valor NUMERIC,
    data DATE,
    categoria_id SERIAL,	
    usuario_id SERIAL,
    tipo VARCHAR,
  	FOREIGN KEY (categoria_id) REFERENCES categorias (id),
  	FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
  );
  
INSERT INTO categorias (descricao) VALUES  
('Alimentação'),
('Assinaturas e Serviços'),
('Casa'),
('Mercado'),
('Cuidados Pessoais'),
('Educação'),
('Família'),
('Lazer'),
('Pets'),
('Presentes'),
('Roupas'),
('Saúde'),
('Transporte'),
('Salário'),
('Vendas'),
('Outras receitas'),
('Outras despesas');
