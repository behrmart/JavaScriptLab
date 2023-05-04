
//Demostracion de JS con DOM Clase 5


function cambiaTitulo(){
    let titulo = document.getElementById("titulo");
    titulo.textContent = "Titulo Cambiado";
}

function pantallaAzul(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor="blue";
}

function pantallaRosa(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor="pink";
}

function pantallaMorada(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor="purple";
}

function pantallaTeal(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor="teal";
}

function pantallaBrown(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor="brown";
}

function calculaSuma(){

    let num1 = document.getElementById("a").value;
    let num2 = document.getElementById("b").value;
    let resultado = parseInt(num1) + parseInt(num2);

    document.getElementById("c").value = resultado;

}