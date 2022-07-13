const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]


function busca(nomePet) {

    for (nome of usuarios) {
        if (nome.pets.includes(nomePet)) {
            console.log(`O dono(a) do(a) ${nomePet} é o(a) ${nome.nome}`)
            return
        }
    }
    console.log(`Que pena ${nomePet}, não encontramos seu dono(a)`)
}

busca("Naninha")