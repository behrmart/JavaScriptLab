//Class 4 20230427

document.writeln("Arrays in Javascript");

var drugs = ["Cocaine", "Heroin", "Acid", "Weed", "Speed", "Ludes"];

console.log(drugs.length);
console.log(drugs);
console.log(drugs[4]);

drugs[4] = "Krokodil";
console.log(drugs[4]);


//array methods Push, pop

drugs.push("shrooms");
console.log(drugs);

drugs.pop();
console.log(drugs);

// Shift unshift
drugs.unshift("mariguana");
console.log(drugs);

drugs.shift();
console.log(drugs);


// Estructuras de contro

// While La condicion se valida antes del código a ejecutar
var index = 0;

console.log("ingresa al bucle While");
while (index < 5) {
    console.log("Index = " + index);
    index ++;
}
console.log("sale del bucle");

// Do While La condicion se evalua despues del código (al reves del While)

console.log("Bucle Do while");


var index = 0;

do {
    console.log("Index = " + index);
    index ++;
}
while (index < 5);
console.log("sale del bucle Do");

/* do {
    
    var password = prompt("Password: ");
}
while (password != "Avaya123"); */


// Ciclo For
console.log("Ciclo For");

for (var index = 0; index < 5; index++) {
    console.log("For Index = " + index);
}
console.log("Ciclo For Ends");

// contadores

var contador = 0;
var acumulador = 0;

for (let index = 1; index <= 10; index ++){
    contador = contador + 1;
    acumulador = acumulador + index;
    console.log  ("Index: " + index + " Contador: " + contador + " Acumulador: " + acumulador);
}


var arreglo = ['🀄', '🖕']


// Escribe un programa que imprima los numeros del 1 al 100; pero aplicando las siguientes normas:

// Devuelve Fizz si el numero es divisible por 3
// Devuelve Buzz si el numero es divisible por 5
// Devuelve FizzBuzz si el numero es divisible por 3 y por 5.

console.log ("El famoso FizzBuzz");

function FizzBuzz (number){ 
    if ((number % 3 == 0)&&(number % 5 == 0)){
        return " FizzBuzz";
    }
    if (number % 3 == 0){
        return " Fizz";
    }
    if (number % 5 == 0){
        return " Buzz";
    }
    else {
        return " ";
    }
}

for (var index = 1; index <= 100; index ++) {
   console.log(index  + FizzBuzz(index));
}




if (index % 3 == 0) {
    console.log ('{$index} es multiplo de 3')
}