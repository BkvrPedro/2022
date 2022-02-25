const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;


function divisaoDeGrupos(tamanho) {

    let grupo1 = ""
    let grupo2 = ""

    grupo1 = nomes.splice(0, tamanho)
    console.log(grupo1)

    grupo2 = nomes
    console.log(grupo2)
}

divisaoDeGrupos(tamanhoDoGrupo)