let { alunos } = require('../dados/dados');

const listarTodosAlunos = (req, res) => {
    res.status(200).json(alunos);
};

const listarAluno = (req, res) => {
    const { id } = req.params;

    const aluno = alunos.find(aluno => aluno.id === Number(id));


    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'O ID deve ser um numero valido' })
    }

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    res.status(200).json(aluno);
};

const cadastrarAluno = (req, res) => {

    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos, verifique todos eles' });
    }

    if (nome == " " || sobrenome == " " || idade == " " || curso == " ") {
        return res.status(400).json({ mensagem: 'Existem campos com espaços em branco, verifique todos eles' });
    }

    if (Number(idade) < 18) {
        return res.status(400).json({ mensagem: 'O aluno deve ter mais de 18 anos' });
    }


    const aluno = {
        id: alunos.length + 1,
        nome,
        sobrenome,
        idade,
        curso
    };

    alunos.push(aluno);

    res.status(201).send();
}

const deletarAluno = (req, res) => {

    const { id } = req.params;

    alunos = alunos.filter(aluno => aluno.id !== Number(req.params.id));

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'O ID deve ser um numero valido' })
    }

    if (!alunos) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    return res.status(200).json({ mensagem: 'Aluno deletado com sucesso' });

}

module.exports = {
    listarTodosAlunos,
    listarAluno,
    cadastrarAluno,
    deletarAluno
};
