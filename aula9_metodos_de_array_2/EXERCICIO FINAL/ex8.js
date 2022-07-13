const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const alteracoes = frutas.map((fruta) => {

    return `${frutas.indexOf(fruta)} - ${fruta[0].toUpperCase() + fruta.slice(1).toLocaleLowerCase()}`

})

console.log(alteracoes)