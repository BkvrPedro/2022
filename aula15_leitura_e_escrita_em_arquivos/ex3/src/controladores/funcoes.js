const { buscarEndereco } = require("utils-playground");
const fs = require("fs/promises");

const enderecos = async (req, res) => {
    const cep = req.params.cep;

    try {
        const enderecosJson = await fs.readFile("./src/enderecos.json");
        const enderecosJavaScript = JSON.parse(enderecosJson);

        const enderecoEncontrado = enderecosJavaScript.find((endereco) => {
            const cepEditado = endereco.cep.replace("-", "");
            return cep === cepEditado;
        });

        if (enderecoEncontrado) {
            res.json(enderecoEncontrado);
        } else {
            const enderecoApi = await buscarEndereco(cep);

            enderecosJavaScript.push(enderecoApi);

            const enderecosJson = JSON.stringify(enderecosJavaScript);
            await fs.writeFile("./src/enderecos.json", enderecosJson);
            return res.json(enderecoApi);
        }
    } catch (erro) {
        res.status(400).json({ error: erro.message });
    }
};

module.exports = {
    enderecos,
};