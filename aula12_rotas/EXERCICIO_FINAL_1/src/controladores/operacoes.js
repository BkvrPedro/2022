const somar = (req, res) => {

    const { num1, num2 } = req.query

    let numero1 = Number(num1)
    let numero2 = Number(num2)

    const resultado = (numero1 + numero2);

    res.send(String(resultado))
}


const subtrair = (req, res) => {


    const { num1, num2 } = req.query

    let numero1 = Number(num1)
    let numero2 = Number(num2)

    const resultado = (numero1 - numero2);

    res.send(String(resultado))

}

const multiplicar = (req, res) => {


    const { num1, num2 } = req.query

    let numero1 = Number(num1)
    let numero2 = Number(num2)

    const resultado = (numero1 * numero2);

    res.send(String(resultado))

}
const dividir = (req, res) => {


    const { num1, num2 } = req.query

    let numero1 = Number(num1)
    let numero2 = Number(num2)

    const resultado = (numero1 / numero2);

    res.send(String(resultado))
}


module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}

