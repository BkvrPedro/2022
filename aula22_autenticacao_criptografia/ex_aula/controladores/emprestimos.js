const conexao = require('../conexao');

// Exercício resolvido: para cada autor na listagem,
// faça a listagem de seus respectivos livros.

const listarEmprestimos = async (req, res) => {
    try {
        const { rows: emprestimos } = await conexao.query(`select 
        e.id, 
        u.nome AS usuario, 
        u.telefone,
        u. email,
        l.nome AS livro,
        e.status_emprestimo AS status
        from emprestimos e
        LEFT JOIN usuarios u ON e.id_usuario = u.id
        LEFT JOIN livros l ON e.id_livro = l.id    
        `);

        if (emprestimos.length === 0) {
            return res.status(404).json('Nenhum usuário encontrado');
        }

        return res.status(200).json(emprestimos);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterEmprestimo = async (req, res) => {
    const { id } = req.params;
    try {
        const emprestimo = await conexao.query(`select 
        e.id, 
        u.nome AS usuario, 
        u.telefone,
        u. email,
        l.nome AS livro,
        e.status_emprestimo AS status
        FROM emprestimos e
        JOIN usuarios u on e.id_usuario = u.id
        JOIN livros l on e.id_livro = l.id
        where e.id = $1`, [id]);

        if (emprestimo.rowCount === 0) {
            return res.status(404).json('emprestimo não encontrado');
        }

        return res.status(200).json(emprestimo.rows[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const cadastrarEmprestimo = async (req, res) => {
    const { id_usuario, id_livro, status_emprestimo } = req.body;

    if (!id_livro && !id_usuario) {
        return res.status(400).json("Por favor, infome o ID do livro e o ID do usuário.");
    }

    try {
        const query = 'insert into emprestimos (id_usuario, id_livro, status_emprestimo) values ($1, $2, $3)';
        const emprestimo = await conexao.query(query, [id_usuario, id_livro, status_emprestimo]);

        if (emprestimo.rowCount === 0) {
            return res.status(400).json('Não foi possivel cadastrar o emprestimo');
        }

        return res.status(200).json('Emprestimo cadastrado com sucesso.')
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const atualizarEmprestimo = async (req, res) => {
    const { id } = req.params;
    const { status_emprestimo } = req.body;

    try {
        const emprestimo = await conexao.query('select * from emprestimos where id = $1', [id]);

        if (emprestimo.rowCount === 0) {
            return res.status(404).json('Emprestimo não encontrado');
        }

        const query = `update emprestimos set 
        status_emprestimo = $1
        where id = $2`;

        const emprestimoAtualizado = await conexao.query(query, [status_emprestimo, id]);

        if (emprestimoAtualizado.rowCount === 0) {
            return res.status(404).json('Não foi possível atualizar o emprestimo');
        }

        return res.status(200).json('Emprestimo foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirEmprestimo = async (req, res) => {
    const { id } = req.params;

    try {
        const emprestimo = await conexao.query('select * from emprestimos where id = $1', [id]);

        if (emprestimo.rowCount === 0) {
            return res.status(404).json('Emprestimo não encontrado');
        }

        const query = 'delete from emprestimos where id = $1';
        const emprestimoExcluido = await conexao.query(query, [id]);

        if (emprestimoExcluido.rowCount === 0) {
            return res.status(404).json('Não foi possível excluir o emprestimo');
        }

        return res.status(200).json('Emprestimo foi excluido com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarEmprestimos,
    obterEmprestimo,
    cadastrarEmprestimo,
    atualizarEmprestimo,
    excluirEmprestimo
}