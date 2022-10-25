const container = document.getElementById('demo')

async function getDoguinho(raca) {
  try {
    const resposta = await fetch(`https://dog.ceo/api/breed/${raca}/images/random`)
    console.log(resposta)
    const dados = await resposta.json()
    console.log(dados)
    const imagem = document.createElement('img')
    imagem.setAttribute('src', dados.message)
    container.appendChild(imagem)
  }
  catch(err) {
    console.error('Capturei um erro:', err)
  }
}

getDoguinho('doberman')

// async function doguinhoAleatorio() {
//   try {
//     const resposta = await fetch('https://dog.ceo/api/breeds/image/random')
//     console.log(resposta)
//     const dados = await resposta.json()
//     console.log(dados)
//     const imagem = document.createElement('img')
//     imagem.setAttribute('src', dados.message)
//     container.appendChild(imagem)
//   }
//   catch(err) {
//     console.error('Capturei um erro:', err)
//   }
// }   

// doguinhoAleatorio()
