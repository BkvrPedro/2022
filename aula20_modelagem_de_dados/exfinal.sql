

DROP TABLE categorias;


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
  id serial NOT NULL,
  pedido_id int NOT NULL references pedidos (id),
  quantidade int NOT NULL,
  produto_id int NOT NULL references produtos(id)
);

CREATE TABLE pedidos(
  id SERIAL NOT NULL PRIMARY KEY,
  valor int NOT NULL,
  cliente_cpf char(11) NOT NULL,
  vendedor_cpf char(11) NOT NULL,
  CONSTRAINT FK_CLIENTES FOREIGN KEY(cliente_cpf) REFERENCES clientes(cpf),
  CONSTRAINT FK_VENDEDORES FOREIGN KEY(vendedor_cpf) REFERENCES vendedores(cpf)
 );
  
 CREATE TABLE clientes(
  cpf char(11) NOT NULL PRIMARY KEY UNIQUE,
  nome varchar(150) NOT NULL
 );
 
 CREATE TABLE vendedores(
  cpf char(11) NOT NULL PRIMARY KEY UNIQUE,
  nome varchar(150) NOT NULL
 );
 
 INSERT INTO categorias (nome) VALUES
 ('frutas'),
 ('verduras'),
 ('massas'),
 ('bebidas'),
 ('utilidades');
 
 INSERT INTO produtos (nome, descricao, preco, quantidade_em_estoque, categoria_id) VALUES
 ('Mamão', 'Rico em vitamina A, potássio e vitamina C', '300', '123', '1'),
 ('Maça', 'Fonte de potássio e fibras.', '90', '34', '1'),
 ('Cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C.', '50', '76', '2'),
 ('Abacate', 'NÃO CONTÉM GLÚTEN.', '150', '64', '1'),
 ('Tomate', 'Rico em vitaminas A, B e C.', '125', '88', '2'),
 ('Acelga', 'NÃO CONTÉM GLUTEM', '235', '13', '2'),
 ('Macarrão parafuso', 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais', '690', '5', '3'),
 ('Massa para lasanha', 'Uma reunião de família precisa ter comida boa e muita alegria.', '875', '19', '3'),
 ('Refrigerante coca cola lata', 'Sabor original', '350', '189', '4'),
 ('Refrigerante Pepsi 2l', 'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.', '700', '12', '4'),
 ('Cerveja Heineken 600ml', 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado', '1200', '500', '4'),
 ('Agua mineral sem gás', 'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.', '130', '478', '4'),
 ('Vassoura', 'Pigmento, matéria sintética e metal.', '2350', '30', '5'),
 ('Saco para lixo', 'Reforçado para garantir mais segurança', '1340', '90', '5'),
 ('Escova dental', 'Faça uma limpeza profunda com a tecnologia inovadora', '1000', '44', '5'),
 ('Balde para lixo 50l', 'Possui tampa e fabricado com material reciclado', '2290', '55', '5'),
 ('Manga', 'Rico em Vitamina A, potássio e vitamina C', '198', '176', '1'),
 ('Uva', 'NÃO CONTÉM GLÚTEN.', '420', '90', '1');
 
 
 INSERT INTO clientes (cpf, nome) VALUES
 ('80371350042', 'José Augusto Silva'),
 ('67642869061', 'Antonio Oliveira'),
 ('63193310034', 'Ana Rodrigues'),
 ('75670505018', 'Maria da Conceição');
 
 INSERT INTO vendedores (cpf, nome) VALUES
 ('82539841031', 'Rodrigo Sampaio'),
 ('23262546003', 'Beatriz Souza Santos'),
 ('28007155023', 'Carlos Eduardo');
 
-- 5) VENDAS

-- A)
INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf) VALUES
(9650, '80371350042', '28007155023');

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id) VALUES
(1, 1, 1),
(1, 1, 10),	
(1, 6, 11),
(1, 1, 15),
(1, 5, 2);

UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 1 WHERE id = 1;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 1 WHERE id = 10;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 6 WHERE id = 11;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 1 WHERE id = 15;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 5 WHERE id = 2;

-- B)
INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf) VALUES
(6460, '63193310034', '23262546003');

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id) VALUES
(2, 10, 17),
(2, 3, 18),	
(2, 5, 1),
(2, 10, 5),
(2, 2, 6);

UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 10 WHERE id = 17;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 3 WHERE id = 18;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 5 WHERE id = 1;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 10 WHERE id = 5;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 2 WHERE id = 6;

-- C)
INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf) VALUES
(4120, '75670505018', '23262546003');

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id) VALUES
(3, 1, 13),
(3, 6, 12),	
(3, 5, 17);

UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 1 WHERE id = 13;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 6 WHERE id = 12;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 5 WHERE id = 17;

-- D)
INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf) VALUES
(9370, '75670505018', '82539841031');

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id) VALUES
(4, 1, 16),
(4, 6, 18),
(4, 1, 7),
(4, 3, 1),
(4, 20, 5),	
(4, 2, 6);

UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 1 WHERE id = 16;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 6 WHERE id = 18;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 1 WHERE id = 7;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 3 WHERE id = 1;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 20 WHERE id = 5;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 2 WHERE id = 6;

-- E)
INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf) VALUES
(8229, '67642869061', '82539841031');

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id) VALUES
(5, 8, 18),
(5, 1, 8),
(5, 3, 17),
(5, 8, 5),	
(5, 2, 11);

UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 8 WHERE id = 18;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 1 WHERE id = 8;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 3 WHERE id = 17;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 8 WHERE id = 5;
UPDATE produtos SET quantidade_em_estoque = quantidade_em_estoque - 2 WHERE id = 11;

-- 6) Consultas

-- A) 
SELECT produtos.nome AS "Nome do produto", categorias.nome AS "Categoria"
FROM produtos
JOIN categorias ON produtos.categoria_id = categorias.id;

-- B)
SELECT id, valor, clientes.nome AS "Nome do cliente",cliente_cpf, vendedores.nome AS "Nome do vendedor", vendedor_cpf
FROM pedidos
JOIN clientes ON pedidos.cliente_cpf = clientes.cpf
JOIN vendedores ON pedidos.vendedor_cpf = vendedores.cpf;

-- C)
SELECT categorias.nome AS "Categoria", SUM(produtos.quantidade_em_estoque) AS "Quantidade em estoque"
FROM categorias
JOIN produtos ON categorias.id = produtos.categoria_id
GROUP BY categorias.nome;

-- D)
SELECT produtos.nome AS "Produto", SUM(itens_do_pedido.quantidade) AS "Quantidade vendida" 
FROM produtos
JOIN itens_do_pedido ON produtos.id = itens_do_pedido.produto_id
GROUP BY produtos.nome;
