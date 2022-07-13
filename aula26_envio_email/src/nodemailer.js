const nodemailer = require('nodemailer');

const transportador = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "da110bd54b77f5",
        pass: "1ab34327960e6b"
    }
});

module.exports = transportador;