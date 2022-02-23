const nomeArquivo = 'Foto da Familia.pdf';

let permitidos = ["jpg", "jpeg", "gif", "png"]

let arrayArquivo = nomeArquivo.split(".")

let arquivoPermitido = false

for (item of permitidos) {
    if (arrayArquivo[1] === item) {
        arquivoPermitido = true
    }
}

if (arquivoPermitido === true) {
    console.log("Arquivo válido")
} else {
    console.log("Arquivo inválido")
}