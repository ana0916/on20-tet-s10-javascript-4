// sequencial
// 1s = 1000ms  
// síncrona -> ao mesmo tempo
// executado ao mesmo tempo que era lido - pq? 
// pq podemos depender de informações que não estão no nosso código e não temos controle do tempo em que essas informações serão retornadas, ex.: request para o backend   

// console.log('oi')
// console.log('tudo bem?')
// setTimeout(() => console.log('tudo bem?'), 5 * 1000)
// console.log('eu sou a Lilit')


// setTimeout(primeira = () => {
//   console.log('retorno primeira callback')
// }, 5000) 

// setTimeout(segunda = () => {
// console.log('retorno segunda callback')
// })

// console.log('console direto 1')

// setTimeout(terceira = () => {
// console.log('retorno terceira callback')
// }, 3000)

// console.log('console direto 2')

// problema da assincronicidade

function devolverNome() {
  return 'Mirella'
}

const aluna = devolverNome()
console.log(aluna)



