const formulario = document.querySelector('#formulario'); //Selecciona elemento por query sin especificar el tipo id, clase, etc.

// console.log(formulario);

const dbUSER = 'berns';
const dbPASSWORD = '1234';

function mostrarError(tipo){
    
    let error = document.getElementById(`error${tipo}`); //check estas comillas back ` concatena error con tipo
    
    //console.error("mostrarError:" + error);

    error.classList.remove('hidden');
    error.classList.add('error');
    console.log(error);

    setTimeout(()=>{  //timer de 5 segundos para desaparecer el error
        error.classList.remove('error');
        error.classList.add('hidden');
    },5000)
};

function validar(nombre,password){
    if (nombre === dbUSER && password === dbPASSWORD){
        let despliega = document.getElementById("welcome");
        console.log('Bienvenido');
        despliega.classList.remove('hidden');
    } else if (nombre === "" && password === "") {
        console.log('Datos Incorrectos');
    } else if (nombre != dbUSER){
        console.log('User malo');
        mostrarError('Usuario');
    } else if (password != dbPASSWORD){
        console.log('Password malo');
        mostrarError('Password');
    } else {
        console.log('Error datos Incorrectos');
    }
};

//funcion anonima ()=> arrow function 

formulario.addEventListener('submit', (evento)=> {   //Recarga la pagina***
    evento.preventDefault(); //preventDefault evita que vuelva a cargar la pagina***
    console.log('Me diste click')

    let usuario = document.querySelector('#usuario').value; //asigna el valor del elemento
    let password = document.querySelector('#password').value;
    console.log(usuario,password);
    
    validar(usuario,password);
});  

