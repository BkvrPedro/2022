const celular = 71999918888;

let celularString = String(celular)

if (celularString.length === 8) {

    let cel1 = " "
    let cel2 = " "

    cel1 = celularString.slice(0, 4)
    cel2 = celularString.slice(-4)

    celularString = "9" + " " + cel1 + "-" + cel2

} else if (celularString.length === 9) {

    let cel1 = " "
    let cel2 = " "
    let cel3 = " "

    cel1 = celularString.slice(0, 1)
    cel2 = celularString.slice(1, 4)
    cel3 = celularString.slice(-4)

    celularString = cel1 + " " + cel2 + "-" + cel3

} else if (celularString.length === 10) {

    let cel1 = " "
    let cel2 = " "
    let cel3 = " "

    cel1 = celularString.slice(0, 2)
    cel2 = celularString.slice(2, 6)
    cel3 = celularString.slice(-4)

    celularString = "(" + cel1 + ")" + " " + "9" + " " + cel2 + "-" + cel3

} else if (celularString.length === 11) {

    let cel1 = " "
    let cel2 = " "
    let cel3 = " "
    let cel4 = " "


    cel1 = celularString.slice(0, 2)
    cel2 = celularString.slice(2, 3)
    cel3 = celularString.slice(3, 7)
    cel4 = celularString.slice(-4)

    celularString = "(" + cel1 + ")" + " " + cel2 + " " + cel3 + "-" + cel4
}

console.log(celularString)