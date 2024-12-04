class Persona {
    #nombre;
    #edad;
    #fechaNacimiento;

    constructor(nombre, edad, fechaNacimiento) {
        this.establecerNombre(nombre);
        this.establecerEdad(edad);
        this.establecerFechaNacimiento(fechaNacimiento);
      }
      establecerNombre(nombre) {
        if (typeof nombre === 'string' && nombre.trim() !== '') {
          this.#nombre = nombre;
        } else {
          throw new Error('Nombre inválido.');
        }
      }
    
      obtenerNombre() {
        return this.#nombre;
      }
    
      establecerEdad(edad) {
        if (Number.isInteger(edad) && edad >= 0) {
          this.#edad = edad;
        } else {
          throw new Error('Edad inválida.');
        }
      }
    
      obtenerEdad() {
        return this.#edad;
      }
    
      establecerFechaNacimiento(fechaNacimiento) {
        if (fechaNacimiento instanceof Date && !isNaN(fechaNacimiento)) {
          this.#fechaNacimiento = fechaNacimiento;
        } else {
          throw new Error('Fecha de nacimiento inválida.');
        }
      }
    
      obtenerFechaNacimiento() {
        return this.#fechaNacimiento;
      }

      calcularFechaNacimiento() {
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - this.#edad;
        return new Date(birthYear, 0, 1);
      }

      
    
    }

    // Crear una instancia de la clase Persona
const persona = new Persona('Manuela Sanchez', 25, new Date(1998, 7, 3));

// Mostrar el nombre, edad y fecha de nacimiento
console.log(`Nombre: ${persona.obtenerNombre()}`);
console.log(`Edad: ${persona.obtenerEdad()}`);
console.log(`Fecha de nacimiento proporcionada: ${persona.obtenerFechaNacimiento().toDateString()}`);

// Calcular y mostrar la fecha de nacimiento calculada
const fechaCalculada = persona.calcularFechaNacimiento();
console.log(`Fecha de nacimiento calculada: ${fechaCalculada.toDateString()}`);



module.exports=Persona;