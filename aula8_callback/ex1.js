const entrada = (callBack) => {
    const nome = "Pedro Bukvar"
    const idade = 25
    callBack(nome, idade)
}

const resultado = (nome, idade) => {
    console.log(`Olá, ${nome}`)

    if (idade) {
        const anoAtual = new Date().getFullYear();
        console.log(`Você nasceu em ${anoAtual - idade}`)
    }

}

entrada(resultado);