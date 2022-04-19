
const express = require('express');
const fs = require('fs/promises')

const app = express();

const produtos = require('./basededados/produtos');

app.use(express.json())

try {
    app.get('/produtos', async (req, res) => {
        return await res.json(produtos);
    })

    app.post('/produtos', async (req, res) => {
        const { produto_id, quantidade } = req.body;
        const produto = produtos.find(p => p.id === produto_id);
        const vendas = await fs.readFile('./src/vendas.json');

        const vendas_json = JSON.parse(vendas);

        vendas_json.vendas.push({ produto: produto, quantidade: quantidade });

        const adicionarEnderecoJson = JSON.stringify(vendas_json);

        await fs.writeFile('./src/vendas.json', adicionarEnderecoJson, { mensagem: 'Venda adicionada com sucesso' });
    })

} catch (error) {
    res.json(error);
}

app.listen(8000)