--  EXCLUIR TABELA
 DROP TABLE IF EXISTS produtos;
 
--  CRIAR TABELA
 CREATE TABLE produtos (
   id serial,
   nome varchar(60) NOT NULL,
   descricao text,
   preco integer NOT NULL,
   categoria varchar(20)NOT NULL,
   estoque integer NOT NULL,
   ativo boolean DEFAULT TRUE,
   data_cadastro timestamptz NOT NULL
   );

-- ALTERAR COLUNA DATA CADASTRO PARA VALOR INICIAL COM NOW
ALTER TABLE produtos ALTER COLUMN data_cadastro SET DEFAULT NOW(); 

-- EXCLUIR COLUNA DESCRIÇÃO
ALTER TABLE produtos DROP COLUMN descricao;

-- INSERIR COLUNA DESCRIÇÃO SETADO COMO TEXTO
ALTER TABLE produtos ADD COLUMN descricao text;

-- RENOMEAR COLUNA
ALTER TABLE produtos RENAME COLUMN preco TO valor;

-- INSERIR RESTRIÇÃO DE COLUNA PARA NOMES UNICOS
ALTER TABLE produtos ADD CONSTRAINT restricaonome UNIQUE(nome);

-- REMOVER RESTRICAO DE NOMES UNICOS COM O NOME PASSADO PELO BEEKEEPER (PRODUTOS_NOME_KEY)
ALTER TABLE produtos DROP CONSTRAINT produtos_nome_key;
 
-- INSERIR PRODUTOS NA TABELA E SEUS RESPECTIVOS VALORES
INSERT INTO produtos (nome, descricao, valor, categoria, estoque) 
VALUES ('Camisa new era', 'Camisa linda na cor azul', 5990, 'Camisa', 7 );

-- ATUALIZAR PRODUTOS
UPDATE produtos SET nome = 'Camisa azul' WHERE id = 1;

-- ATUALIZAR PRODUTOS EM VARIAS COLUNAS
UPDATE produtos SET ativo = false, categoria = 'Camiseta', estoque = 14 WHERE id = 2;

-- DELETAR PRODUTO
DELETE FROM produtos WHERE id = 1;


-- NUNCA FAZER:
-- UPDATE produtos SET nome = 'Camisa azul'; (SEM INFORMAR WHERE ID = X)
-- dessa forma todos os produtos serão alterados

-- DELETE FROM produtos; (SEM INFORMAR WHERE ID = X)
-- dessa forma todos os produtos serão excluídos