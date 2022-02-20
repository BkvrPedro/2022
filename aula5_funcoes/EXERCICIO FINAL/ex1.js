const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ],

    corrigirProva: function () {
        let pontoPorQuestao = this.valor / this.questoes.length
        let nota = 0
        let acertos = 0

        for (itens of this.questoes) {
            if (itens.resposta === itens.correta) {
                nota += pontoPorQuestao;
                acertos++
            }
        }
        console.log(`O(A) Aluno(a) ${this.aluno} acertou ${acertos} questoes e obteve nota ${nota}`)
    }
}

prova.corrigirProva()