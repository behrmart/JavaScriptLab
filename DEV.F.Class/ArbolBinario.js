// Arbol Binario

// Definicion de la clase Nodo
// que sirve para crear nuevos nodos en la app

class Nodo {
    constructor(valor){
        this.valor  = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

// Definicion de la clase ArbolBinario

class ArbolBinario {
    
    constructor(){
        this.raiz = null;
        // raiz de nuestro arbol binario
    }

    //Metodo para insertar un valor en arbol

    insertar(valor){
        const nuevoNodo = new Nodo(valor);
        //Valida si la raiz es null
        if(this.raiz === null){
            // si la raiz es null se crea un nuevo nodo con valor especifico
            this.raiz = nuevoNodo;
        } else { // Si ya existe el nodo raiz crea un nuevo nodo abajo
            this.insertarNodo(this.raiz, nuevoNodo)
        }
    }

    // Metodo auxiliar para insertar un nodo en el arbol del lado izquierdo o derecho

    insertarNodo(nodo, nuevoNodo){
        if(nuevoNodo.valor < nodo.valor){ // valor menor a la izquierda
           if (nodo.izquierda === null){
            nodo.izquierda = nuevoNodo
           } else {
            this.insertarNodo(nodo.izquierda, nuevoNodo) // Recursivo hasta que el nodo de la izq sea null (hoja)
           }
        } else {  // Valor mayor a la derecha
            if (nodo.derecha === null){
                nodo.derecha = nuevoNodo
            } else {
                this.insertarNodo(nodo.derecha, nuevoNodo) // Recursivo a la derecha
            }
        }
    }

    // Metodo para ordenar la informacion y mostrarla en pantalla 
    enOrdenTrasversal() {
        this.recursiveEnOrdenTransversal(this.raiz);
    }

    recursiveEnOrdenTransversal(nodo) {
        if (nodo !== null) {
            this.recursiveEnOrdenTransversal(nodo.izquierda);
            console.log(nodo.valor);
            this.recursiveEnOrdenTransversal(nodo.derecha);
        }
    }

    // Ejercicio: Eliminar un nodo especifico y verificar si el nodo tiene hijos. 
    // En caso de que el nodo tenga hijos reestructurar la parte del arbol donde elimina en nodo
    // y poner a los hijos en la manera correcta

   /*  eliminarNodo(nodo, valor){ //Mio - CGPT
        if (nodo === null) { // Valida si el nodo no existe (null)
            return null;
        }

        if (valor < nodo.valor){ //Busca en el lado izquierdo
            nodo.izquierda = this.eliminarNodo(nodo.izquierda, valor);
        } else if (valor > nodo.valor) { // Busca en el lado derecho
            nodo.derecha = this.eliminarNodo(nodo.derecha,valor);
        } else {
            if (nodo.izquierda === null && nodo.derecha === null) { // Si el nodo es una hoja
                return null; // Elimina el nodo
            } else if (nodo.izquierda === null){
                return nodo.derecha;
            } else if (nodo.derecha === null){
                return nodo.izquierda;
            }
        }
    } */

borrarDato(valor){
    this.raiz = this.eliminarNodo(this.raiz, valor);
}


   // Metodo Auxiliar para eliminar datos DevF
   
   eliminarNodo(nodo, valor){ //Valida si existe el nodo, si no regresa null
        if (nodo === null) {
            return null;
        }

        //Busqueda del nodo que queremos eliminar
        if (valor < nodo.valor) { //Comprobar si el valor a eliminar es menor que el valor actual del nodo (izquierda)
            nodo.izquierda = this.eliminarNodo(nodo.izquierda, valor); // el valor a eliminar esta en el subarbol izquierda, llamada recursiva para seguir buscando en arbol
        } else if (valor > nodo.valor) {
            nodo.derecha = this.eliminarNodo(nodo.derecha, valor); // valor a eliminar subarbol derecha, recursivo
        } else {  // el valor a eliminar es igual al nodo actual
            // Caso: nodo a eliminar tiene 0 o 1 hijo
            if (nodo.izquierda === null){
                return nodo.derecha; //retornar el hijo derecho como remplazo del nodo actual
            } else if (nodo.derecha === null){ // ahora al revez
                return nodo.izquierda;
            }
            // Caso: el nodo a eliminar tiene 2 hijos
            //Buscar el nodo minimo en el subarbol derecho
            const nodoMinimo = this.encontrarNodoMinimo(nodo.derecha);
            // reemplazar el valro del nodo actual con el valor del nodo minimo encontrado
            nodo.valor = nodoMinimo.valor;
            // Eliminar el nodo minimo enontrado en el subarbol derecho
            nodo.derecha = this.eliminarNodo(nodo.derecha, nodoMinimo.valor); // Asegurar que la raiz sea el nodo minimo del subarbol derecha y borra el nodo minimo anterior
        }

        return nodo;
        
   }


   encontrarNodoMinimo(nodo){ //Encontrar el valor del nodo mas chico de arbol
        // Iniciar un nodo actual con el nodo proporcionado
        let actual = nodo;

        // Recorrer hacia la izquierda hasta encontrar el nodo minimo con while
        while (actual.izquierda !== null){
            actual = actual.izquierda;
        }
        // retornar el nodo minimo encontrado
        return actual;
   }

}

const arbol = new ArbolBinario;
arbol.insertar(50);
arbol.insertar(20);
arbol.insertar(30);
arbol.insertar(70);
arbol.insertar(40);
arbol.insertar(60);

arbol.enOrdenTrasversal();

console.log('Eliminando el nodo 30');
arbol.borrarDato(30);

arbol.enOrdenTrasversal();

// crear un metodo que muestre la informacion del bybnary search tree de manera ordenada


// funcion para buscar si un valor existe en el arbol binario

function buscarDato(nodo, valor){
    // Validar que el arbol no se nulo
    if(nodo === null){
        return false; // No encontró el valor
    }

    //Validar si el valor es igual a la raiz del arbol
    if(nodo.valor === valor){
        return true; // Encontro el valor
    }

    // Verificar los nodos de la izquierda y derecha para encontrar el valor
    if(valor < nodo.valor){
        return buscarDato(nodo.izquierda, valor);
    } else {
        return buscarDato(nodo.derecha, valor);
    }
}

const valorBuscado = 20;
console.log(`Valor buscado ${valorBuscado} existe: ${buscarDato(arbol.raiz, valorBuscado) ? '- si esta': '- No esta'}` ); //Operadores ternarios -> ? ***


// Operadores ternarios ejemplo
const personaDato = false;

function miembro (persona){     // Normalito, sin operadores ternarios
    if (persona === true){
        console.log('Paga 5 dolares por el periodico');
    } else {
        console.log('Paga 10 dolares por el periodico');
    }

    console.log(persona ? 'Paga 5 por el periodico ternary' : 'Paga 10 por el periodico ternary'); // con operadores ternarios
}
miembro(personaDato)