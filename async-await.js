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

async function obtenerPersonajes() { // para poder usar await la funcion se debe marcar como async
    var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Se crea un array con los ids que queremos obtener
    var promesas = ids.map(id => obtenerPersonaje(id)) // luego creamos un array con map donde lo llenemos de promesas, una por id
    try {
        var personajes = await Promise.all(promesas) // La tarea asincrona lleva la palabra clave await y debe estar dentro de un bloque try catch
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()