class Animal { // Nombre de mi clase
    constructor(nombre, especie){ // metodo para inicializar objeto y validar datos

        //Atributos
        this._nombre = nombre;
        this._especie = especie;
    }

    get nombre(){ // Leer
        return this._nombre;
    }

    set nombre(nuevaNombre){ // Modificar . Siempre a Set se le pasa un parametro de modificacion
        if (nuevaNombre && typeof nuevaNombre === 'string'){
            this._nombre = nuevaNombre;
        } else {
            console.log('error el nombre debe ser tipo string');
        }
    }

    get especie(){
        return this._especie;
    }

    set especie(nuevaEspecie){
        if (nuevaEspecie && typeof nuevaEspecie === 'string'){
            this._especie = nuevaEspecie;
        } else {
            console.log('error la especie debe ser tipo string');
        }
    }

    // Metodo que imprime Info
    imprimirInformacion(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Especie: ${this.especie}`);
    }

    //Metodo que cmabia Info
    nuevaInformacion(nuevaNombre, nuevaEspecie){
        this.nombre = nuevaNombre;
        this.especie = nuevaEspecie;
        console.log(`Nuevo nombre: ${this.nombre}`);
        console.log(`Nuevo especie: ${this.especie}`);
    }
}

const miAnimal = new Animal('Max', 'Perro');
miAnimal.imprimirInformacion();

//miAnimal.nuevaInformacion('Pollo', 'Michi');



