
// Arrow Functions 

// ES 5  JavaScript vanilla ¿Como escribimos una funcion?

function suma (a,b){
    return a + b;
}

console.log('Vanilla JS - Suma: ', suma(3,4));

// Funciones Anónimas: A veces las guuardamos en una constante para que no sea anonima

const SumaDos = function (a,b){
    return a + b;
}

console.log('Funcion Anonima JS - Suma: ', SumaDos(3,4));

// Ejemplo de Hoisting... mueve en tiempo de ejecucion, las var deberian ir arriba de la funcion
// El const NO HACE hoisting... var SI HACE hoisting

function sumaTres (a,b){
    return a + b;
}

var num1 = 3;
var num2 = 4;

console.log('Hoisting Suma:', sumaTres(num1,num2));

// Arrow Function
// Azúcar Sintactico (Sugar Sintax)
// No necesito escribir "function" , en su lugar usamos => despues de los parametros/args

const SumaCuatro = (a,b) => {
    return a + b;
}

console.log('Funcion Arrow JS - Suma: ', SumaCuatro(3,4));


// Se puede simplificar aun mas la Arrow si solo tiene o retorna un solo comando, se quitan las llaves y se omite el return (return implicito, no se escribe, pero esta ahi)

const SumaCinco = (a,b) => a + b;

console.log('Funcion Arrow simplificada JS - Suma: ', SumaCinco(3,4));


// Uso de funciona anonima que ademas es arrow function. No tiene nombre timejorene un solo comando (console)

const miArreglo = ['Perros', 'Gatos', 'Patos', 'Ratones']

miArreglo.forEach((elemento)=>console.log(elemento))