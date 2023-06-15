//Algoritmos de Busqueda Lineal

function busquedaLineal(arreglo, elemento){
    
    for (let i = 0 ; i < arreglo.length ; i++){
        if (arreglo[i] === elemento){
            console.log('Se encontro elemento en posicion ');
            return i+1;
        }
    }
    console.log('no se encontro elemento');
    return -1; // Elemento no se encontro en lista
}

const arreglo = [1, 3, 4, 7, 8, 9, 23, 56, 78, 90, 105];
const elementoBuscado = 24;

console.log(busquedaLineal(arreglo, elementoBuscado));


