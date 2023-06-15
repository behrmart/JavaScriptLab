//Ejercicios de Búsqueda (Secuencial y Binaria)

function numeroMasRepetido (arrayIn1) {

    for (let i = 0 ; i < arrayIn1.length ; i++){
        //let elemento1 = arrayIn[i];
    }

}

let arrayIn1 = [3,6,1,8,2,3,6,3,2,5,6];
//console.log(`Numero Mas repetido en Array ${numeroMasRepetido(arrayIn1)}`);

function encuentraLetras (arrayIn2){
    let arrayOut2 = [];
    for (let i = 0 ; i < arrayIn2.length ; i++){
        if (typeof(arrayIn2[i])==="string"){
            arrayOut2.push(arrayIn2[i]);
        }
    }
    return arrayOut2;
}
let arrayIn2 = [8,'e',7,2,'a','d','f',2,3,1,4,3];
console.log(`Letras en el array en Array ${encuentraLetras(arrayIn2)}`);


function numeroMasGrande (arrayIn3){
    let paso = arrayIn3[0];
    for (let i = 0 ; i < arrayIn2.length ; i++){
        if (paso >= arrayIn3[i]){
            let paso = arrayIn3[i];
        }
    }
    return paso;
}
let arrayIn3 = [1,4,7,2,4,1,9,4,0,2,4,5,12];
console.log(`Numero mas grande en el array ${numeroMasGrande(arrayIn3)}`);

/* Ejercicios de Búsqueda (Secuencial y Binaria)
1 .- Crear una función que encuentre el número más repetido en un array
Ejemplo Input - [3,6,1,8,2,3,6,3,2,5,6]
Salida -> 6
2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras
Ejemplo input -> [8,‘e’,7,2,‘a’,‘d’,‘f’,2,3,1,4,3]
Salida → [‘e’,‘a’,‘d’,‘f’]
3.- Crear una función que busque el número más grande en un arreglo
Ejemplo input - > [1,4,7,2,4,1,9,4,0,2,4,5,12]
Salida -> 12
4.- Crear una función que busque el número más pequeño en el arreglo
Ej. [1,4,5,-1,-7,2,3,9]
Salida -->  -7
5.- Crear una clase llamada  Contacto con los siguientes datos
Nombre
Apellidos
Telefono */


// Hechos por Ana

function encontraRepetido(lista) {
    // Creamos un objeto para almacenar la cantidad de repeticiones de cada número
    let conteo = {};

    // Iteramos sobre el array y contamos las repeticiones de cada número
    for (let i = 0; i < lista.length; i++) {
        let numero = lista[i];

        // Si el número ya existe en el objeto de conteo, incrementamos su contador en 1
        if (conteo[numero]) {
            conteo[numero]++;
        } else {
            // Si el número no existe en el objeto de conteo, lo inicializamos con 1
            conteo[numero] = 1;
        }
    }

    // Variables para almacenar el número más repetido y su cantidad de repeticiones
    var numeroMasRepetido;
    var repeticiones = 0;

    // Iteramos sobre el objeto de conteo para encontrar el número más repetido
    for (let numero in conteo) {
        if (conteo[numero] > repeticiones) {
            numeroMasRepetido = numero;
            repeticiones = conteo[numero];
        }
    }

    // Devolvemos el número más repetido
    return numeroMasRepetido;
}

// Ejemplo de uso
var lista = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];
var numeroMasRepetido = encontraRepetido(lista);
console.log(numeroMasRepetido); // Salida: 6


function numMax(lista) {
    let maximo = lista[0]; // Asigna el primer elemento como máximo inicial
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maximo) { // Verifica si el valor de la izquierda es mayor 
            maximo = lista[i]; // Actualiza el máximo si se encuentra un número mayor
        }
    }
    return maximo;
}

const listaNum = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
console.log(numMax(listaNum)); // Output: 12

class Contacto { // Clase contacto
    constructor(nombre, apellidos, telefono) { 
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }
}

class ListaContactos { 
    constructor() {
        this.contactos = [];
    }

    agregarContacto(contacto) {
        this.contactos.push(contacto); // Agrega un contacto a la lista de contactos
    }

    buscarContactoPorNombre(nombre) {
        const resultado = this.contactos.filter(
            (contacto) => contacto.nombre.toLowerCase() === nombre.toLowerCase()
        ); // Filtra los contactos cuyo nombre coincide (sin importar mayúsculas/minúsculas)
        return resultado;
    }
}

// Ejemplo de uso:
const lista = new ListaContactos();

const contacto1 = new Contacto('Juan', 'Pérez', '123456789');
const contacto2 = new Contacto('María', 'Gómez', '987654321');
const contacto3 = new Contacto('Monserrat', 'López', '456789123');

lista.agregarContacto(contacto1);
lista.agregarContacto(contacto2);
lista.agregarContacto(contacto3);

console.log(lista.buscarContactoPorNombre('Juan'));
  // Output: [ { nombre: 'Juan', apellidos: 'Pérez', telefono: '123456789' },
  //           { nombre: 'Juan', apellidos: 'López', telefono: '456789123'