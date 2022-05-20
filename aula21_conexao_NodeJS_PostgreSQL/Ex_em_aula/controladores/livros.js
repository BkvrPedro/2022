const listarLivros = async (req, res) => {
    const livros = await Livro.findAll();

    return res.send(livros);
};

const obterLivro = async (req, res) => {
    const id = parseInt(req.params.id);

    const livro = await Livro.findByPk(id);

    if (!livro) {
        return res.status(404).send('Livro não encontrado');
    }

    return res.send(livro);
};

const cadastrarLivros = async (req, res) => {
    const { titulo, descricao, preco, foto } = req.body;

    const livro = await Livro.create({ titulo, descricao, preco, foto });

    return res.send(livro);
};

const editarLivro = async (req, res) => {
    const id = parseInt(req.params.id);

    const livro = await Livro.findByPk(id);

    if (!livro) {
        return res.status(404).send('Livro não encontrado');
    }

    const { titulo, descricao, preco, foto } = req.body;

    await livro.update({ titulo, descricao, preco, foto });

    return res.send(livro);
};

const excluirLivro = async (req, res) => {
    const id = parseInt(req.params.id);

    const livro = await Livro.findByPk(id);

    if (!livro) {
        return res.status(404).send('Livro não encontrado');
    }

    await livro.destroy();

    return res.send(livro);
};

module.exports = {
    listarLivros,
    obterLivro,
    cadastrarLivros,
    editarLivro,
    excluirLivro
};