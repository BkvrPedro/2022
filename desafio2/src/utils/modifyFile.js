let dados = require('../dados/bancodedados');

const verificarContaExistente = (req, res) => {
    const nrConta = req.params.numeroConta || req.body.numero_conta || req.query.numero_conta;
    const conta = dados.contas.find(conta => conta.id == nrConta);

    if (!conta) {
        return res.status(400).json({ mensagem: 'Conta não encontrada' })
    }
}

const verificarSenha = (req, res) => {
    const nrConta = req.params.numeroConta || req.body.numero_conta || req.query.numero_conta || req.body.numero_conta_origem
    const conta = dados.contas.find(conta => conta.id == nrConta);
    const senha = req.body.senha || req.query.senha || req.params.senha;
    const { senha_banco } = req.query

    if (!senha) {
        if (!senha_banco) {
            return res.status(401).json({ mensagem: 'A senha não foi informada' })
        }
        if (senha_banco !== 'Cubos123Bank') {
            return res.status(401).json({ mensagem: 'A senha esta incorreta' })
        }
    }

    if (!senha_banco) {
        if (!senha) {
            return res.status(401).json({ mensagem: 'A senha não foi informada' })
        }
        if (senha !== conta.senha) {
            return res.status(401).json({ mensagem: 'A senha esta incorreta' })
        }
    }
}


module.exports = {
    verificarContaExistente,
    verificarSenha
}