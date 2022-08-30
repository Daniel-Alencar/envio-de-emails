require('dotenv').config({
  path: '.env'
});

module.exports = {
  host: 'smtp.gmail.com',
  port: 587,
  user: process.env.EMAIL,
  pass: process.env.PASSWORD,
}

/**
 * REMINDER:
 
 O email que é utilizado neste arquivo é o que será utilizado para fazer o envio para outras pessoas.
 Precisamos tanto do email (campo 'user') como a senha (campo 'pass').

 Como as configurações feitas foram muito simples, o gmail por exemplo "acha" que a tecnologia de login é menos segura.
 Para mudar esta configuração, acesse <https://myaccount.google.com/lesssecureapps>
 
 */