const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function atendimento(pacientes, operacao, nome) {

    if (operacao === "agendar") {
        pacientes.splice(pacientes.length, 0, nome)
    } else if (operacao === "atender") {
        pacientes.splice(0, 1)
    }

    console.log(pacientes.join(", "))
}


atendimento(pacientes, "agendar", "Antonio")
atendimento(pacientes, "atender")
atendimento(pacientes, "atender")
atendimento(pacientes, "agendar", "Tereza")
atendimento(pacientes, "agendar", "Marineide")
atendimento(pacientes, "atender")