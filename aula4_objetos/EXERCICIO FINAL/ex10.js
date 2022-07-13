// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

//
const clientes = [jose, carlos, patricia, renato, roberto];

const itens = [[tv, caboUsb, webcam], [notebook],
[teclado, caboUsb, carregador, mouse, monitor], [webcam],
[webcam, caboUsb, monitor]];

const quant = [[1, 2, 1], [2], [1, 2, 1, 1, 1], [5], [1, 2, 1]];

for (let i = 0; i < itens.length; i++) {
    for (let j = 0; j < itens[i].length; j++) {
        let obj = { item: itens[i][j], quantidade: quant[i][j] };
        clientes[i].carrinho[j] = obj;
    }
};
for (cliente of clientes) {
    console.log(cliente.nome + ": ");
    console.log(cliente.carrinho);
}