class Persona {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.altura = altura;
    }

    presentacion = function() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años y mido ${this.altura} metros`);
    }

    cumpleannios = function() {
        this.edad++;
        console.log(`He cumplido años, ahora tengo ${this.edad} años.`);
    }
}

var cristian = new Persona('Cristian', 'Muñoz', 34, 1.35);
var magolo = new Persona('Magolo', 'Bautizta', 28, 1.60);
var petunio = new Persona('Petunio', 'Florez', 14, 1.55);
var florencio = new Persona('Florencio', 'Caparazon', 51, 1.80);