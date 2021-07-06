const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('./config/smtp');

const tranporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false
  },

});

async function run() {
  try {
    const mailSend = await tranporter.sendMail({
      text: "Olá mundo!",
      subject: "Envio de emails",
      from: 'No Reply <noreply@gmail.com>',
      to: ['joaoguilherme010301@gmail.com', 'danielalencar746@gmail.com'],
    });
  } catch(error) {
    console.error(error);
  }
};

run();
