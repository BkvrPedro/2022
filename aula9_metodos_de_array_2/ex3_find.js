const carros = [
    { nome: "corola", marca: "toyota", ano: "2022", cor: "branco" },
    { nome: "civic", marca: "honda", ano: "2018", cor: "preto" },
    { nome: "kicks", marca: "nissan", ano: "2021", cor: "prata" },
]

const buscarCarro = (marca, arrayDeCarros) => {

    const resultado = arrayDeCarros.find((carro) => {
        return carro.marca === marca
    })

    console.log(resultado)
};

buscarCarro("toyota", carros)
