SELECT COUNT(*) AS MEDICAMENTOS FROM farmacia;

SELECT MIN(idade) FROM usuarios;

SELECT MAX(idade) FROM usuarios;

SELECT ROUND(AVG(idade)) FROM usuarios WHERE idade >= 18;

SELECT SUM(estoque) AS ESTOQUE FROM farmacia WHERE categoria = 'blue' OR categoria = 'black';

SELECT categoria, SUM(estoque) AS estoque FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

SELECT SUM(estoque) FROM farmacia WHERE categoria IS NULL;

SELECT concat (medicamento , ' ' ,  '(' , categoria , ')' ) FROM farmacia WHERE categoria IS NOT NULL;

SELECT concat (id , ' - ' , medicamento , ' ' ,  '(' , COALESCE (categoria, 'sem categoria') , ')' ) FROM farmacia;

SELECT nome, idade, cadastro::date FROM usuarios WHERE cadastro >= '2020' AND cadastro< '2021';

SELECT nome, idade, email, AGE(CAST(cadastro AS timestamp)) AS "tempo de cadastro" FROM usuarios WHERE idade <18;

SELECT nome, idade, email, AGE(CAST(cadastro AS date)) AS "tempo de cadastro" FROM usuarios WHERE idade >= 60;

SELECT categoria, count(*) AS produtos FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

SELECT idade, count(*) FROM usuarios WHERE idade >= 18 GROUP BY idade;

SELECT categoria ,SUM(estoque) AS ESTOQUE FROM farmacia GROUP BY categoria LIMIT 3;
