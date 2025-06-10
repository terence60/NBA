const nodemailer = require('nodemailer');
const ENV = require('../config/env');

const transporter = nodemailer.createTransport({
  // Configuration du serveur SMTP de Gmail
  host: 'smtp.gmail.com',
  //Port standard pour TLS
  port: 587,
  // pour le TLS (port 587), true pour le SSL (port 465)
  secure: false,
  // Authentification avec les identifiants Gmail
  auth: {
    user: ENV.EMAIL_USER,
    pass: ENV.EMAIL_PASS
  }
});

const sendEmail = async (user, verifieToken) => {

  const verificationLink = `<a href='${ENV.PORT_APPLICATION_FRONT}/verification/${verifieToken}'>${verifieToken}</a>`


  await transporter.sendMail({
    // 
    from:  ENV.EMAIL_USER,
    to: user.email,
    subject: "Vrefiez votre email",
    text: `Hello ${user.username},\n\n, Merci de vous être inscrit \n\n Cordialement.`,
    html: `Cliquez sur ce lien pour vérifier votre email : ${verificationLink}`
  })
}

module.exports = sendEmail;