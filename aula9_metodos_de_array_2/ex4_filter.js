const professores = [
    { nome: "guido", stack: "backend" },
    { nome: "vidal", stack: "backend" },
    { nome: "dani", stack: "frontend" },
    { nome: "diego", stack: "backend" },
    { nome: "leo", stack: "frontend" },
]

const professoresBackend = professores.filter((professor) => {
    return professor.stack === "backend"
})

console.log(professoresBackend)

const professoresFrontend = professores.filter((professor) => {
    return professor.stack === "frontend"
})

console.log(professoresFrontend)