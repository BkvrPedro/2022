const filaDeDentro = ["Jose", "Maria", "Joao"];  // max 5
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

filaDeDentro.push(filaDeFora[0], filaDeFora[1])
console.log(filaDeDentro)

filaDeFora.splice(0, 2)
console.log(filaDeFora)