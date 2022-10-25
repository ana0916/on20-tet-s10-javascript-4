// todo: criar funcao que retorne o HTML
// todo: criar uma funcao async que realize a requisicao
// todo: criar uma funcao que gerencia toda a funcionalidade da aplicacao

const createSection = (film) => {
    return `
    <div class="film">
        <img src=${film.image} class="image">
        <h2 class="title">${film.title}</h2>
        </div>
     `
}

const container = document.getElementById('demo')

const getFilmes = async () => {
    try{
        const response = await fetch('https://ghibliapi.herokuapp.com/films')
        const films = await response.json() 
        const ourFilms = films.slice(10,15)
        return ourFilms
        
    }
    catch(err) {
        console.error("Capturei um erro: ", err)
    }
}

getFilmes().then((films) => films.map((film) => container.innerHTML += createSection(film)))