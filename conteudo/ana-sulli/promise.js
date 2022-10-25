function criarVariavel() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject(new Error('BUGOU TUDO, SEM ACESSO'))
      // return resolve('Andréa')
    }, 3000)
  })
}

criarVariavel()
  .then((resposta) => {
    nome = resposta
    console.log(nome)
  })
  .catch((erro) => console.error(erro))
