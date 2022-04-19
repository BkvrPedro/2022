const express = require('express');

const funcoes = express();

const produtos = require('../bancodedados/produtos');

const { getStateFromZipcode } = require('utils-playground');


const listarProdutos = async (req, res) => {
    try {
        return await res.send(produtos);
    } catch (erro) {
        return await res.status(500).send(erro);
    }
}

const listarIdProduto = async (req, res) => {
    try {
        const id = req.params.id;
        const produto = produtos.find(produto => produto.produto.id == id);
        return await res.send(produto);
    } catch (erro) {
        return await res.status(500).send(erro);
    }
}

const calculoFretePorCep = async (req, res) => {
    const idProduto = req.params.id;
    const cep = req.params.cep;
    const estado = await getStateFromZipcode(cep)

    try {
        // FRETE 10%
        if (estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB') {
            const produto = produtos.find(produto => produto.produto.id == idProduto);
            const valor = (produto.produto.valor)
            const frete = valor * 0.1;

            const frete10 = {
                produto: produto.produto,
                estado: estado,
                frete: frete
            }
            return await res.send(frete10)
        }

        // FRETE 15%
        if (estado === 'SP' || estado === 'RJ') {
            const produto = produtos.find(produto => produto.produto.id == idProduto);
            const valor = (produto.produto.valor)
            const frete = valor * 0.15;

            const frete15 = {
                produto: produto.produto,
                estado: estado,
                frete: frete
            }
            return await res.send(frete15)

        }

        if (estado) {
            const produto = produtos.find(produto => produto.produto.id == idProduto);
            const valor = (produto.produto.valor)
            const frete = valor * 0.12;

            const frete12 = {
                produto: produto.produto,
                estado: estado,
                frete: frete
            }
            return await res.send(frete12)
        }
    } catch (erro) {
        return await res.status(500).send(erro);
    }
}


module.exports = {
    listarProdutos,
    listarIdProduto,
    calculoFretePorCep,
}

