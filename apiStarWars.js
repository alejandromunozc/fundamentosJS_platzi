const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

// $.get() recibe tres parametros, 
// el primero es la URL a la cual se quiera acceder
// el segundo es indicar que el request se hace a otra pagina, con el objeto { crossDomain: true }
// el tercero es el Callback, es la funcion que se ejecuta cuando termine el request, es posible que nunca se ejecute.
const peopleUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`; // .replace('string que queremos cambiar', 'nuevo string')
const opts = { crossDomain: true };
const onPeopleResponse = function(people) { //Esta funcion se ejecurta si el request es exitoso.
    //console.log(arguments); // Nos muestra los argumentos que trae la funcion.
    console.log(`Hola yo soy, ${people.name}`);
}

$.get(peopleUrl, opts, onPeopleResponse);