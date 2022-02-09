const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesComA = []

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].charAt(0) === "A" || nomes[i].charAt(0) === "a") {
        nomesComA.push(nomes[i])
    }

}

console.log(nomesComA)