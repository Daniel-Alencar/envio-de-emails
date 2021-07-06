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
 
 O email que é utilizado neste arquivo é o que será utilizado para fazer o envio para outras pessoas. E, precisamos tanto do email (campo 'user'), como a senha (campo 'pass').

 Como as configurações feitas foram muito simples, o gmail por exemplo "acha" que a tecnologia de login é menos segura.

 De acordo com o Google:

 "Alguns apps e dispositivos usam tecnologias de login menos seguras, o que deixa sua conta vulnerável. Você pode desativar o acesso desses apps, o que recomendamos, ou ativá-lo se optar por usá-los apesar dos riscos."
 Para fazer esta configuração, acesse <https://myaccount.google.com/lesssecureapps>
 
 */