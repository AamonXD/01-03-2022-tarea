const API_CHARACTERS = 'https://rickandmortyapi.com/api/character';
const API_LOCATION = 'https://rickandmortyapi.com/api/location';
const API_EPISODES = 'https://rickandmortyapi.com/api/episode';
const container = document.getElementById('container-characters');
const template = document.querySelector('#template-card').content;
let fragment = document.createDocumentFragment();


const getCharacters =  async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    let character = data.results;

    showCharacters(character);
}

const getLocationss =  async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    let location = data.results;

    showCharacters(location);
}

getCharacters(API_CHARACTERS);
getCharacters(API_LOCATION);


const showCharacters = (personajes) => {
    personajes.forEach(actor => {
        console.log(actor);
        const {name, image, status, species, gender, location} = actor;
        template.querySelector('img').setAttribute('src', image);
        template.querySelector('h1').textContent = name;
        template.querySelector('h3').textContent = `${species} - ${status}`;
        template.querySelector('#divStatus').textContent = status;
        template.querySelector('h5').textContent = gender;
        template.querySelector('.lastLocation').textContent = location.name;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    container.appendChild(fragment);


}



































/*let template = document.getElementById('template-card').content;
let contenedorBody = document.querySelector('#container-characters');
let fragment = document.createDocumentFragment();


document.addEventListener('DOMContentLoaded', async () => {
    let res = await fetch('https://rickandmortyapi.com/api/character');
    let data = await res.json();
    let character = data.results;

    showData(character);
});

const showData = (data) => {
    data.forEach(personaje => {
        const {id, name, species, image, status, location} = personaje;
        template.querySelector('img').setAttribute('src', image);
        template.querySelector('h1').textContent = name;
        template.querySelector('#divStatus').setAttribute('class', status == 'Alive' ? 'Alive' : status =='Death' ? 'Death' : 'Otro');
        template.querySelector('h3').textContent = `${species} - ${status}`;
        template.querySelector('h5').textContent = location;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    contenedorBody.appendChild(fragment);
};*/