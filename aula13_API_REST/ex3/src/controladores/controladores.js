const livros = require('../dados/basededados');

const consultarColecao = (req, res) => {
    return res.json(livros);
}

const consultarId = (req, res) => {

    const id = req.params.id;

    const livro = livros.find(livro => livro.id == id);

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'O ID deve ser um numero valido' })
    }

    if (!livro) {
        return res.status(404).json({ mensagem: 'Não existe livro para o ID informado.' });
    }

    return res.status(200).json(livro);

}

const adicionarLivro = (req, res) => {

    const { titulo, autor, ano, numPaginas } = req.body;

    const livro = {
        id: livros.length + 1,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(livro);

    return res.status(201).send();

}

const substituirLivro = (req, res) => {

    const { id } = req.params;

    const livro = livros.find(livro => livro.id == id);

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'O ID deve ser um numero valido' })
    }

    if (!livro) {
        return res.status(404).json({ mensagem: 'Não existe livro a ser substituido para o ID informado.' });
    }

    const { titulo, autor, ano, numPaginas } = req.body;

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    livro.numPaginas = numPaginas;

    res.status(200).json({ mensagem: 'Livro substituido.' });


}

const alterarLivro = (req, res) => {

    const { id } = req.params;

    const livro = livros.find(livro => livro.id == id);

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'O ID deve ser um numero valido' })
    }

    if (!livro) {
        return res.status(404).json({ mensagem: 'Não existe livro para o ID informado.' });
    }

    const { titulo, autor, ano, numPaginas } = req.body;


    if (titulo) {
        livro.titulo = titulo;
    }

    if (autor) {
        livro.autor = autor;
    }

    if (ano) {
        livro.ano = ano;
    }

    if (numPaginas) {
        livro.numPaginas = numPaginas;
    }


    return res.status(200).json({ mensagem: 'Livro alterado.' });
}

const removerLivro = (req, res) => {

    const { id } = req.params;

    const livro = livros.find(livro => livro.id == id);

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'O ID deve ser um numero valido' })
    }

    if (!livro) {
        return res.status(404).json({ mensagem: 'Não existe livro para o ID informado.' });
    }

    livros.splice(livros.indexOf(livro), 1);

    return res.status(200).json({ mensagem: 'Livro removido.' });

}


module.exports = {
    consultarColecao,
    consultarId,
    adicionarLivro,
    substituirLivro,
    alterarLivro,
    removerLivro
}