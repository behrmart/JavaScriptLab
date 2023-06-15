// POO Programacion Orientada a Objetos 

class Persona { // Clase: persona - Mi plantilla
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad, genero){ //Metodo constructor para iniciar objeto
        this.nombre = nombre; //Atributos
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
        this.genero = genero;
    }

    //Metodos
    dormir(){
        console.log(`${this.nombre} está durmiendo.`)
    }

    comer(){
        console.log(`${this.nombre} esta comiendo.`)
    }

}

// Crear instancia de persona

const persona1 = new Persona("Tomas", "Martinez", "Fernandez", 1, "Masculino");
persona1.dormir();

const persona2 = new Persona("Kathy", "Martinez", "Fernandez", 2, "Femenino");
persona2.comer();

// Herencia

class Alumno extends Persona{
    constructor (nombre, apellidoPaterno, apellidoMaterno, edad, genero, promedio, nivelEscolaridad) {
        super(nombre, apellidoPaterno, apellidoMaterno, edad, genero); // Indica las que hereda de la superclase
        
        this.promedio = promedio; // Agrega nuevos atributos
        this.nivelEscolaridad = nivelEscolaridad;
        }
        presentarse(){
            console.log(`${this.nombre} está estudiando la ${this.nivelEscolaridad} con un promedio de  ${this.promedio}`)
        };
        
        hacerTarea(){
            console.log (`${this.nombre} esta haciendo tarea` )
        };

        ObtenerInicialesDeAlumno(){
            let iniciales = this.nombre[0] + this.apellidoPaterno[0] + this.apellidoMaterno[0];
            console.log('Iniciales del Alumno: ' + iniciales);
        }

        ObtenerNombreCompleto() {
            let nombreCompleto = this.nombre + this.apellidoPaterno + this.apellidoMaterno;
            console.log('Nombre Completo: ' + nombreCompleto);
        }

        aprobado(){
            if (parseFloat(this.promedio) >= 6.0){
                console.log('Alumno aprobado: ' + this.promedio)
            } else {
                console.log('Alumno reprobado buurro: ' + this.promedio)
            }
        }

}

const alumno1 = new Alumno ("Juan", "Perez", "Salgado", "20", "Masculino", "5.5", "prepa");

alumno1.presentarse();
alumno1.dormir();
alumno1.ObtenerInicialesDeAlumno();
alumno1.ObtenerNombreCompleto();
alumno1.aprobado();


// Profesor hrede persona agregar materia, salon y metodos enseñar

class Profesor extends Persona {
    constructor (nombre, apellidoPaterno, apellidoMaterno, edad, genero, materia, salon) {
        super(nombre, apellidoPaterno, apellidoMaterno, edad, genero);

        this.materia = materia;
        this.salon = salon;
    }

    enseñar(){
        console.log(`${this.nombre} enseña ${this.materia} en el salon ${this.salon}`)
    }
}

profesor1 = new Profesor ("Fulano", "de", "tal", "35", "femenino", "fisica", "101");
profesor1.enseñar();


class Maestro extends Persona {
    constructor (nombre, apellidoPaterno, apellidoMaterno, edad, genero, materia, salon) {
        super(nombre, apellidoPaterno, apellidoMaterno, edad, genero);

        this.materia = materia;
        this.salon = salon;
    }

    enseñar(){
        console.log(`${this.nombre} enseña ${this.materia} en el salon ${this.salon}`)
    }
}

class MaestroDeFisico extends Maestro {
    constructor ()
}


