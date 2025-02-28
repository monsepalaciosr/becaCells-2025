class PersonaSingleton {
    constructor(nombre, edad) {
        if (!PersonaSingleton.instance) { //Verificar si existe una instancia en la calse
            this.nombre = nombre;
            this.edad = edad;
            PersonaSingleton.instance = this;
        }
        return PersonaSingleton.instance;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona1 = new PersonaSingleton("Ana", 25);
const persona2 = new PersonaSingleton("Carlos", 30);

console.log(persona1 === persona2); 

persona2.saludar(); 
