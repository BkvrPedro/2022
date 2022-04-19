const { listarPokemons, detalharPokemon } = require('utils-playground');

const listarColecao = async (req, res) => {
    try {
        const listaDePokemons = await listarPokemons();

        return res.status(200).json(listaDePokemons);
    } catch (erro) {
        return res.status(500).json(erro);
    }
}

const listarPorId = async (req, res) => {
    const { nomeOuId } = req.params;
    try {
        return await detalharPokemon(nomeOuId).then(caracteristicasPokemon => {
            const { id, name, height, weight, base_experience, forms, abilities, species } = caracteristicasPokemon;

            return res.status(200).json({ id, name, height, weight, base_experience, forms, abilities, species });
        })
    } catch (erro) {
        return res.status(500).json(erro);
    }
}


module.exports = {
    listarColecao,
    listarPorId
}