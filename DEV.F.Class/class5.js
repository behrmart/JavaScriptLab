// Class 5 JS 20230503

//Event Handlers

/* function Saludar() {
    alert ("Hola Mundo")
};
 */
//event hace referencia a un evento que esta sucediendo

/* function mostrarCoordenada(event){
    alert ("Coordenada x del click: " +  event.clientX + "y " + event.clientY)
}; */

// DOM Document Object Model
// Representacion de la pagina web en HTLM
// CCSOM Model de CSS DOM Model de HTML

// DOM estandar para obtener, modificar cambiar o borrar elementos de HTML

//DOMContentLoaded... ya cargo todo



function login(event){
    
    //obtener valores de los campos de usuario y contraseña por getElementById
    let username = document.getElementById("username");
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");

    if (username.value == "ana@gmail.com" && password === "1234"){
        window.location.href="login.html";
        let btnLogin = document.getElementById("btn_login");
        // por seguridad nada mas si coinciden nos redireciona deshabilita cmapos
        btnLogin.disable = true;
        username.readOnly = true;
    } else {
        mensaje.style.color = "red";
        mensaje.innerText = "Error en usuario o contraseña";
    }
     

}