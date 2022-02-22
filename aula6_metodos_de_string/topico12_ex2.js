let numero = "1,350,000"

for (casa of numero) {
    numero = numero.replace(",", ".")
}

console.log(numero)