const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(pacientes, nome) {

    pacientes.splice(pacientes.length, 0, nome)

    console.log(pacientes.join(", "))
}

function atenderPaciente(pacientes) {

    pacientes.splice(0, 1)

    console.log(pacientes.join(", "))
}

function cancelarAtendimento(pacientes, nome) {

    nome = pacientes.indexOf(nome)

    pacientes.splice(nome, 1)

    console.log(pacientes.join(", "))
}

agendarPaciente(pacientes, "Cleuza")
atenderPaciente(pacientes)
cancelarAtendimento(pacientes, "Pedro")