const cpf = "011.022.033-44";

let novoCpf = cpf;

while (novoCpf.includes(".") || novoCpf.includes("-")) {
    novoCpf = novoCpf.replace(".", "");
    novoCpf = novoCpf.replace("-", "");
}

console.log(novoCpf);