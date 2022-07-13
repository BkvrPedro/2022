const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
]

const buscarCep = (cep, arrayDeEnderecos) => {

    const resultado = arrayDeEnderecos.find((endereco) => {
        return endereco.cep === cep
    })

    const rua = resultado.rua

    console.log(rua)
};

buscarCep(00222444, endereços)