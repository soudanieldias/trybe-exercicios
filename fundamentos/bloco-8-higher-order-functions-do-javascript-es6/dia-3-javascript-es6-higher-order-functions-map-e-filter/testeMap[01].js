const arrayEmail = [
    'ada.lovelace@example.com',
    'alan.turing@example.com',
    'margaret.hamilton@example.com',
    'marie.curie@example.com',
    'albert.einstein@example.com',
    'pierre.curie@example.com',
    'stephen.hawking@example.com'
]

const enviarEmail = (callback) => {
    console.log(`E-mail enviado com sucesso para: ${callback.email} Com o conteúdo: ${callback.msg}`);
}

let listaEmails = arrayEmail.map( (email) => {
  const mensagem = "Obrigado por sua contribuição!";
    return {email: email, mensagem: mensagem};
});

// console.log(listaEmails);