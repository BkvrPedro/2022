let dados = require('../dados/bancodedados');
const { format } = require('date-fns')
// const { v4: uuidv4 } = require('uuid');

const listarContas = (req, res) => {
    try {
        const { senha_banco } = req.query

        if (!senha_banco) {
            return res.status(401).json({ mensagem: 'A senha não foi informada' })
        }
        if (senha_banco !== 'Cubos123Bank') {
            return res.status(401).json({ mensagem: 'A senha esta incorreta' })
        }

        res.status(200).json(dados.contas);
    } catch (erro) {
        res.status(500).json({ mensagem: erro.message });
    }
}

const criarConta = (req, res) => {
    try {
        // let id = uuidv4()
        const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
        const dadosConta = { id: dados.contas.length + 1, nome, cpf, data_nascimento, telefone, email, senha, saldo: 0 };

        if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
            return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' })
        }

        if (dados.contas.find(conta => conta.cpf === cpf) || dados.contas.find(conta => conta.email === email)) {
            return res.status(400).json({ mensagem: 'Já existe uma conta com esse CPF ou e-mail informado' })
        }

        dados.contas.push(dadosConta)
        return res.status(201).json();

    } catch (erro) {
        res.status(400).json({ mensagem: erro.message });
    }
}

const atualizarConta = (req, res) => {
    try {
        const numeroConta = req.params.numeroConta;

        const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

        const conta = dados.contas.find(conta => conta.id == numeroConta);

        if (isNaN(numeroConta)) {
            return res.status(400).json({ mensagem: 'O número da conta deve ser um numero valido' })
        }

        if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
            return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' })
        }

        if (dados.contas.find(conta => conta.cpf === cpf) || dados.contas.find(conta => conta.email === email)) {
            return res.status(400).json({ mensagem: 'Já existe uma conta com esse CPF ou e-mail informado' })
        }

        conta.nome = nome;
        conta.cpf = cpf;
        conta.data_nascimento = data_nascimento;
        conta.telefone = telefone;
        conta.email = email;
        conta.senha = senha;

        return res.status(200).json();

    } catch (erro) {
        res.status(400).json({ mensagem: erro.message });
    }
}

const deletarConta = (req, res) => {
    try {
        const numeroConta = req.params.numeroConta;
        const conta = dados.contas.find(conta => conta.id == numeroConta);

        if (!conta) {
            return res.status(400).json({ mensagem: 'Conta não encontrada' })
        }


        if (isNaN(numeroConta)) {
            return res.status(400).json({ mensagem: 'O número da conta deve ser um numero valido' })
        }

        if (conta.saldo > 0) {
            return res.status(400).json({ mensagem: 'A conta possui saldo, não é possível deletar' })
        }

        dados.contas = dados.contas.filter(conta => conta.id != numeroConta);

        return res.status(200).json();


    } catch (erro) {
        res.status(400).json({ mensagem: erro.message });
    }
}

const depositar = (req, res) => {
    try {
        const { numero_conta, valor } = req.body;
        const conta = dados.contas.find(conta => conta.id == numero_conta);

        if (!numero_conta || !valor) {
            return res.status(400).json({ mensagem: 'Dados incompletos, insira o numero da conta e o valor' })
        }

        if (valor < 1) {
            return res.status(400).json({ mensagem: 'Valor inválido, favor inserir valores maiores que 0' })
        }

        if (!conta) {
            return res.status(400).json({ mensagem: 'Conta não encontrada, verifique os dados e tente novamente' })
        } else {
            conta.saldo += valor;

            dados.depositos.push({
                data: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
                numero_conta,
                valor
            })

            return res.status(200).json(dados);
        }





    } catch (erro) {
        res.status(400).json({ mensagem: erro.message });
    }
}

module.exports = {
    listarContas,
    criarConta,
    atualizarConta,
    deletarConta,
    depositar
};