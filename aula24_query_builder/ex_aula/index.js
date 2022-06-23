// BIBLIOTECA KNEX

const express = require('express');
const knex = require('./conexao.js');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {

    // .debug() - para debugar o que está sendo executado

    // const agenda = await knex('agenda').debug() // SELECT * FROM agenda
    // const agenda = await knex('agenda').where('id', 1) // SELECT * FROM agenda WHERE id = 1
    // const agenda = await knex('agenda').where('id', 1).select('nome', 'telefone') // SELECT nome, telefone FROM agenda WHERE id = 1
    // const agenda = await knex('agenda').where({ id: 5 }).select('id', 'nome', 'telefone') // SELECT id,   nome, telefone FROM agenda WHERE id = 5
    // const agenda = await knex('agenda').where('id', '!=', 1,).select('id', 'nome', 'telefone') // SELECT nome, telefone FROM agenda WHERE id != 1

    // const agenda = await knex('agenda').where('id', 1).first() // SELECT all FROM agenda WHERE id = 1 LIMIT 1
    // const agenda = await knex('agenda').whereNull('nome') // SELECT * FROM agenda WHERE nome IS NULL
    // const agenda = await knex('agenda').whereNotNull('nome') // SELECT * FROM agenda WHERE nome IS NOT NULL
    // const agenda = await knex('agenda').whereBetween('id', [1, 5]) // SELECT * FROM agenda WHERE id BETWEEN 1 AND 5
    // const agenda = await knex('agenda').whereBetween('id', [1, 5]).orderBy('id', 'desc') // SELECT * FROM agenda WHERE id BETWEEN 1 AND 5 ORDER BY id DESC
    // const agenda = await knex('agenda').distinct('email').whereNotNull('email') // SELECT DISTINCT email FROM agenda - TRAZ EMAILS DISTINTOS E NAO NULOS

    // const agenda = await knex('agenda').select('email').groupBy('email').count() // SELECT email FROM agenda GROUP BY email COUNT email
    // const agenda = await knex('agenda').count() // SELECT COUNT(*) FROM agenda

    // const agenda = await knex('agenda').limit(10).offset(10) // SELECT * FROM agenda LIMIT 10 OFFSET 10

    // const agenda = await knex('agenda').whereNull('email').count().first() // SELECT COUNT(*) FROM agenda WHERE email IS NULL LIMIT 1
    // const agenda = await knex('agenda').whereNull('email').sum('id').avg('id').min('id').max('id').first() // SELECT SUM(id) FROM agenda WHERE email IS NULL LIMIT 1 - SUM(id), AVG(id), MIN(id), MAX(id)


    return res.json(agenda);
})

app.listen(3000);