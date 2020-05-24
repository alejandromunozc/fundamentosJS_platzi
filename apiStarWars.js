const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

// $.get() recibe tres parametros, 
// el primero es la URL a la cual se quiera acceder
// el segundo es indicar que el request se hace a otra pagina, con el objeto { crossDomain: true }
// el tercero es el Callback, es la funcion que se ejecuta cuando termine el request, es posible que nunca se ejecute.
//const peopleUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`; // .replace('string que queremos cambiar', 'nuevo string')
const opts = { crossDomain: true };
// const onPeopleResponse = function(people) { //Esta funcion se ejecurta si el request es exitoso.
//     //console.log(arguments); // Nos muestra los argumentos que trae la funcion.
//     console.log(`Hola, yo soy ${people.name}`);
// }

//$.get(peopleUrl, opts, onPeopleResponse);


// function obtenerPersonaje(id) {
//     const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
//     $.get(url, opts, onPeopleResponse);
// }

// Las respuestas no llegarán en el mismo orden que se listan debido al asincronismo de JavaScript
// obtenerPersonaje(2);
// obtenerPersonaje(3);
// obtenerPersonaje(4);
// obtenerPersonaje(5);


//Haciendo callbacks en serie (provocando el callback hell)

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, opts, function(people) {
        console.log(`Hola, yo soy ${people.name}`);
        if (callback) {
            callback();
        }
    });

}

obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function() {
        obtenerPersonaje(3, function() {
            obtenerPersonaje(4, function() {
                obtenerPersonaje(5, function() {
                    obtenerPersonaje(6, function() {
                        obtenerPersonaje(7, function() {
                            obtenerPersonaje(8);
                        });
                    });
                });
            });
        });
    });
});