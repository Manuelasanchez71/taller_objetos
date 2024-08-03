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
    
    }