let dados = require('../dados/bancodedados');
const { format } = require('date-fns')

const verificarContaExistente = (req, res) => {
    const nrConta = req.params.nrConta;
    const conta = dados.contas.find(conta => conta.id == nrConta);

    if (!conta) {
        return res.status(400).json({ mensagem: 'Conta não encontrada' })
    }
}


module.exports = {
    verificarContaExistente
}