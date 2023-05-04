// Operadores de Control JavaScript Clase 3 20230424

var nombre = "Pollesquieu"

function Saludar (nombre) {
    console.log("Hello world! " + nombre);
};

function sumar (x, y, z){
    console.log(x + y + z);
};

Saludar(nombre);

sumar(2,2,"huevos");


function validadEdad (boolean) {
    if (boolean === true){
        console.log("Eres mayor de edad");
    }
    else {
        console.log("Eres menor de edad");
    }
}

validadEdad(false);

// typeOf
var n = "hola";
var m = true;
var z = [];
var y = {};

console.log(typeof y);

// AND y OR & ||


var edad = 17;

if (edad >= 18) console.log("Mayor de edad")
else console.log ("Eres Meco");

var semaforo ="morado";

if (semaforo == "verde"){
    console.log("avanza")
}
else if (semaforo == "amarillo") {
    console.log ("Frena")
}
else if (semaforo == "rojo"){
    console.log("Alto")
}
else {
    console.log("nomames ese color no existe en un semaforo")
}