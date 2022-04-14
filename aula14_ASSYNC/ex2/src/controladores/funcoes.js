const { listarPokemons, detalharPokemon } = require('utils-playground');

const listarColecao = async (req, res) => {

    const listaDePokemons = await listarPokemons();

    return res.status(200).json(listaDePokemons);
}

const listarPorId = async (req, res) => {
    const { nomeOuId } = req.params;

    return await detalharPokemon(nomeOuId).then(caracteristicasPokemon => {
        const { id, name, height, weight, base_experience, forms, abilities, species } = caracteristicasPokemon;

        return res.status(200).json({ id, name, height, weight, base_experience, forms, abilities, species });
    })
}


module.exports = {
    listarColecao,
    listarPorId
}