const cpf = "12309";
const cpf2 = "12345678900";

let cpfparte1 = " "
let cpfparte2 = " "
let cpfparte3 = " "
let cpfparte4 = " "

function imprimirCpf(cpf) {

    if (cpf.length < 11) {
        console.log("CPF invalido")
    } else {
        cpfparte1 = cpf.slice(0, 3)
        cpfparte2 = cpf.slice(3, 6)
        cpfparte3 = cpf.slice(6, 9)
        cpfparte4 = cpf.slice(-2)

        console.log(`${cpfparte1}.${cpfparte2}.${cpfparte3}-${cpfparte4}`)
    }
}

imprimirCpf(cpf2)



const cnpj = "12345678900";
const cnpj2 = "12345678000199";

let cnpjParte1 = " "
let cnpjParte2 = " "
let cnpjParte3 = " "
let cnpjParte4 = " "
let cnpjParte5 = " "

//12.345.678/0001-99

function imprimirCnpj(cnpj) {

    if (cnpj.length < 14) {
        console.log("CNPJ invalido")
    } else {
        cnpjParte1 = cnpj.slice(0, 2)
        cnpjParte2 = cnpj.slice(2, 5)
        cnpjParte3 = cnpj.slice(5, 8)
        cnpjParte4 = cnpj.slice(8, 12)
        cnpjParte5 = cnpj.slice(-2)

        console.log(`${cnpjParte1}.${cnpjParte2}.${cnpjParte3}/${cnpjParte4}-${cnpjParte5}`)
    }
}

imprimirCnpj(cnpj2)

