
var nombreUsuario = prompt("Nombre: ");
var apellidoPaterno = prompt("Apellido Paterno: ");
var apellidoMaterno = prompt("Apellido Materno: ");
var nacionalidad = prompt("Nacionalidad: ");
var numeroGatos = prompt("Cuantos gatos: "); // Use Number(prompt("gatos")); as altenate to parseInt later
var numeroPerros = prompt("Cuantos perros: ");
var mascotas = parseInt (numeroGatos) + parseInt (numeroPerros);

console.log ("Nombre: " + nombreUsuario + " " + apellidoPaterno + " " + apellidoMaterno + " Nacionalidad: " + nacionalidad);
console.log ("Tiene " + numeroGatos + " Gatos y " + numeroPerros + " Perros");
console.log ("En Total tiene " + mascotas + " mascotas.")

document.write("Nombre: " + nombreUsuario + " " + apellidoPaterno + " " + apellidoMaterno + " Nacionalidad: " + nacionalidad + "\n");
document.write("Tiene " + numeroGatos + " Gatos y " + numeroPerros + " Perros \n");
document.write("En Total tiene " + mascotas + " mascotas.");