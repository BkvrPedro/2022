const email = "pedro.bukvar@gmail.com"

let arroba


if (email.includes("@")) {
    arroba = email.indexOf("@")
}


if (email.includes(".", arroba) && email.includes("@") && email.indexOf(".") !== 0 && email.lastIndexOf(".") !== email.length - 1) {
    console.log("E-mail verdadeiro")
} else {
    console.log("E-mail falso")
}