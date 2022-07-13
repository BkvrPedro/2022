const extensoes = [".JPEG", ".BAT", ".GIF", ".MP3", ".WMV", ".WMA"]

const localizarExtensao = (array) => {

    const resultado = array.some((item => {

        return item === ".BAT"

    }))

    if (resultado) {
        console.log("Vírus Detectado!")
    } else {
        console.log("Nenhum vírus Encontrado")
    }
}

localizarExtensao(extensoes)