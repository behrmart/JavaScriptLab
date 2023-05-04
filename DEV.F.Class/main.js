
// Console log to print messages in browser console, debugging mainly.
console.log("Hey dude!");
console.log("This is hidden shit for the user");
console.log(4>3);
console.log(4<3);

// document.write
document.write("Hello fucking world in JS");
document.write("Writes one or more HTML expressions to a document in the specified window.");

//Alert usage emergent windows, warnings or errors
// alert("Alert Window Dude!");

// prompt

// Shows message prompt in window and console
// console.log("Hey,", prompt ("Tell me your name dude"));

// No prompt message in console
// prompt("How old are you?");

var nombreDude = prompt("Whats your name?");
var ageDude = prompt("How old are you?");
var petDude = prompt("What is your pet?");

// console.log("Your name is: " + nombreDude);
// console.log("your age is: " + ageDude);

// console.log(nombreDude + " is " + ageDude + " old and has a " + petDude );

/* you can also do multiline comments like 
this */

// Variables camelCase convention


var perrito; //Undefined type
var perrote = null; // null type

var nombre ="Ana";
var edad = 21;
var muerta = false;
var estudio = true;
var cel;
var casa = null;
var operacion = 10/"hola";
var operacion2 = (parseInt("hola")) //parseInt converts to number

// use typeof to know the type of variable 
console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(muerta));
console.log(typeof(estudio));
console.log(typeof(cel));
console.log(typeof(casa));
console.log(typeof(operacion));


var suma = 2 + 2;
var resta = 2 - 2;
var modulo = 5 % 2;
var division = 5 / 2;

console.log(modulo);
console.log(division);

