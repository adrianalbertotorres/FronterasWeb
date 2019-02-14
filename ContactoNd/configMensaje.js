const nodemailer = require('nodemailer');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // para enviar correo sin certificaccion 

module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: 'fronteraswebs@gmail.com', // Cambialo por tu email
 pass: 'fronteras22' // Cambialo por tu password
 }
 });
const mailOptions = {
 from: `"${formulario.nombre} 👻" <${formulario.email}>`,
 to: 'fronteraswebs@gmail.com', // Cambia esta parte por el destinatario
 subject: formulario.asunto,
 html: `
 <strong>Nombre:</strong> ${formulario.nombre} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.mensaje}
 `
 };
transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}