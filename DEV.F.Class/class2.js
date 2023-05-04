// Clase 2 javascript 20230419

var a = 1;
var b = 4;
var c = 8;
var d = 13;
var e = 20;

var resultado = a + b;
var resultado1 = a + c;
var resultado2 = a + d;

console.log(resultado);
console.log(resultado1);
console.log(resultado2);

function suma(param1,param2){
    var total = param1 + param2;
    return "La suma es " + total;
}

console.log(suma (2, 3));

var resultado = suma(a,b);

function saludar(nombre){
    console.log("hola," + nombre)
}

saludar("Anal");
saludar("Pollezco");

// Funciones anidadas


//funciones impuras cambia el return

function sumaNumeroRandom(numero) {
    var a = 1
    var b = 2

    function suma (a,b) {
        return a + b;
    };

    function multiplica (a,b) {
        return a * b;
    };

    function modulo (a,b) {
        return a % b;
    };

    console.log("suma: ", suma (a, b));
    console.log("multiplica: ", multiplica (a, b));
    console.log("modulo: ", modulo (a, b));
    return numero + Math.random();
};

console.log("Random suma 3 + random = " + sumaNumeroRandom(3));