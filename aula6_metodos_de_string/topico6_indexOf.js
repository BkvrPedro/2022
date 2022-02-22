const email = "pedro.bukvar@gmail.com"

let arroba = 0
let verdadeiro = false

if (email.includes("@")) {
    arroba = email.indexOf("@")
}

if (email.includes(".", arroba)) {
    console.log("E-mail verdadeiro")
} else {
    console.log("E-mail falso")
}