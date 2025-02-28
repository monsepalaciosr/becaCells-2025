class Libro {
    constructor(tipo, titulo) {
        this.tipo = tipo;
        this.titulo = titulo;
    }
}

class LibroFactory {
    static crearLibro(tipo) {
        switch (tipo) {
            case 'romance':
                return new Libro('Romance', 'Cuando no queden más estrellas que contar');
            case 'misterio':
                return new Libro('Misterio', 'La paciente silenciosa');
            case 'fantasía':
                return new Libro('Fantasía', 'Harry Potter y la piedra filosofal');
            default:
                return {error: 'Tipo de libro no válido'} 
        }
    }
}

const libro1 = LibroFactory.crearLibro('romance');
const libro2 = LibroFactory.crearLibro('misterio');
const libro3 = LibroFactory.crearLibro('fantasía');

console.log(libro1); 
console.log(libro2); 
console.log(libro3); 
