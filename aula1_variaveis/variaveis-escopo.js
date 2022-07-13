
//A CHAVE É O ESCOPO, ESSE CONST EXISTE APENAS DENTRO DAS CHAVES
{
    const idade = 25;
    console.log(idade);
}

// ESSE FORMATO FUNCIONA -VARIAVEIS CRIADAS FORA ACESSAM O CONTEUDO DE DENTRO
const nome = "Pedro"
{
    console.log(nome);
}

// ESSE FORMATO NAO FUNCIONA - VARIAVEIS CRIADAS DENTRO SE ENCERRAM NO FINAL DO ESCOPO
{
    const nome2 = "Pedro"
}
console.log(nome2);