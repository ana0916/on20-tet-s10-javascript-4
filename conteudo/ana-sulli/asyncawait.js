function criarVariavel() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject(new Error('BUGOU TUDO, SEM ACESSO'))
      // return resolve('Andréa')
    }, 3000)
  })
}

async function resolverPromise() {
  try {
    const nome = await criarVariavel()
    console.log(nome)
  }
  catch(err) {
    console.error(err)
  }
}

resolverPromise()
