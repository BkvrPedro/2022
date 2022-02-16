const usuarios = [
    {
        nome: "João",
        pets: [],
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


for (let usuario of usuarios) {
    let { nome, pets } = usuarios;
    if (usuario.pets.length > 0) {
        console.log(`Sou ${nome} e tenho ${pets.length} ${pets.length > 1 ? "pets" : "pet"}`)
    } else {
        console.log(`Sou ${nome} e não tenho pets`)
    }
}