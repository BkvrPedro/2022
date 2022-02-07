const paises = ["Brasil", "USA", "China", "Alemanha", "Espanha"]

paises.push("Paraguai")
console.log(paises)  // ADICIONA PAIS AO FINAL

paises.pop()
console.log(paises)  // REMOVE PAIS DO FINAL

paises.unshift("Etiopia")
console.log(paises)       // ADICIONA PAIS NO COMEÇO

paises.shift()
console.log(paises)        // REMOVE PAIS DO COMEÇO

console.log(paises[4])     // IMPRIME O ULTIMO

console.log(paises[1])     // IMPRIME O SEGUNDO

console.log(paises[2])     // IMPRIME O DE INDICE 2 (TERCEIRO)