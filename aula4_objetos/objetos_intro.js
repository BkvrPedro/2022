const pessoa = {
    nome: "Pedro Bukvar",
    altura: 1.90,
    peso: 84,
};

// PARA CRIAR VARIAÇÕES DENTRO DE UM OBJETO, ABRIMOS A CONST COM {} USAMOS VIRGULA APOS O OBJETO

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura} M de altura e peso ${pessoa.peso} KG`);

// PARA USAR APENAS 1 ITEM DO OBJETO, USAMOS O NOME DA CONST . O NOME DO OBJETO INTERNO

// TAMBEM PODEMOS MODIFICAR O OBJETO 

// FORMA 1

pessoa.nome = "Leonardo";
console.log(pessoa) // IMPRIME LEONARDO NO NOME DA PESSOA

// FORMA 2

pessoa['altura'] = 1.78;
console.log(pessoa);