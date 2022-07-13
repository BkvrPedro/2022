const carros = {
    marca: "Ford",
    modelo: "Fusion",
    ano: "2015",
    cor: "Preto",
    quantidade_portas: "4",
    automatico: true
}

let automatico = (carros.automatico ? "cambio automatico" : "cambio manual")

console.log(`Vende-se ${carros.marca} ${carros.modelo}, ano ${carros.ano}, ${carros.cor}, ${carros.quantidade_portas} portas, ${automatico}`)