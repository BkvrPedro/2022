const convidados = require('../dados/basededados')

const consultaListaConvidados = (req, res) => {

    if (req.query.nome) {

        const nome = req.query.nome;

        const convidado = convidados.find(convidado => convidado == nome);

        if (convidado) {
            return res.json({ mensagem: 'Convidado presente' });
        } else {
            return res.status(404).json({
                mensagem: 'O convidado buscado não está presente na lista.'
            });
        }
    }
    return res.json(convidados);
};

const adicionarConvidado = (req, res) => {

    const novoConvidado = req.body.nome;


    for (convidado of convidados) {

        if (novoConvidado === convidado) {

            return res.status(400).json({ mensagem: 'O convidado já está na lista.' });
        }
    }

    if (novoConvidado) {
        convidados.push(novoConvidado);
        return res.json({ mensagem: 'Convidado adicionado com sucesso.' });
    }
    return res.status(400).json({ mensagem: 'Nome do convidado não informado.' });
}

const removerConvidado = (req, res) => {

    const nome = req.body.nome;

    const convidado = convidados.find(convidado => convidado == nome);

    if (convidado) {
        convidados.splice(convidados.indexOf(convidado), 1);
        return res.json({ mensagem: 'Convidado removido com sucesso.' });
    }
    return res.status(404).json({ mensagem: 'O convidado buscado não está presente na lista.' });
}


module.exports = {
    consultaListaConvidados,
    adicionarConvidado,
    removerConvidado
}