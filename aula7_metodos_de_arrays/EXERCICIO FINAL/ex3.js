const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function busca(posicao) {

    let novo = nomes.slice(posicao, posicao + 3)

    console.log(novo)
}

busca(posicao)