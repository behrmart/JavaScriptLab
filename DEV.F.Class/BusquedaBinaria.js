//Algoritmos de Busqueda Binaria

function busquedaBinaria (lista, t){
    let l = 0;
    let n = lista.length;
    let r = n - 1; // porque el Array empieza de 0

    console.log(` longitud del arreglo: ${n} Indice inicio: ${l} Indice fin: ${r} elemento buscado ${t}`);

    while(l <= r) { 
            console.log(`Indice Inferior l: ${l} Indice Superior r: ${r}`);
        let m = Math.floor((l + r) / 2); // Redondear elementos porque no se puede tener decimales
            console.log(`Medio m: ${m}`);
            console.log(`elemento: ${lista[m]}`);
        if (lista[m] < t) {
            l = m + 1;
        } else if (lista[m] > t) {
            r = m - 1;
        } else {
            return lista[m];
        }
    } 
    return -1;
}

const lista = [1, 3, 4, 7, 8, 9, 23, 56, 78, 90, 105, 408, 654];
const elementoBuscado = 78;

console.log(busquedaBinaria(lista, elementoBuscado));