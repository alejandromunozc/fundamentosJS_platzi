const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(url, opts, function(data) {
                resolve(data);
            })
            .fail(() => reject(id));
    })
}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`);
        return obtenerPersonaje(2);
    })
    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`);
        return obtenerPersonaje(3);
    })
    .then(personaje => {
        console.log(`El personaje 3 es ${personaje.name}`);
        return obtenerPersonaje(4);
    })
    .then(personaje => {
        console.log(`El personaje 4 es ${personaje.name}`);
        return obtenerPersonaje(5);
    })
    .then(personaje => {
        console.log(`El personaje 5 es ${personaje.name}`);
        return obtenerPersonaje(6);
    })
    .then(personaje => {
        console.log(`El personaje 6 es ${personaje.name}`);
        return obtenerPersonaje(7);
    })
    .then(personaje => {
        console.log(`El personaje 7 es ${personaje.name}`);
        return obtenerPersonaje(8);
    })
    .then(personaje => {
        console.log(`El personaje 8 es ${personaje.name}`);
        return obtenerPersonaje(9);
    })
    .then(personaje => {
        console.log(`El personaje 9 es ${personaje.name}`);
        return obtenerPersonaje(10);
    })
    .then(personaje => {
        console.log(`El personaje 10 es ${personaje.name}`);
    })
    .catch(onError);