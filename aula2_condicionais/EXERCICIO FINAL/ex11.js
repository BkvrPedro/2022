const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

if (rendaMensalEmCentavos > 200000 && mesesDecorridos < 60 && totalJaPagoPeloAluno < 1800000) {
    console.log(`O valor da parcela desse mês é R$${rendaMensalEmCentavos * (18 / 100) / 100} reais`)
} else {
    console.log("Voce não tem nada a pagar")
}