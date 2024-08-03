const Persona = require("./clase")

class Estudiante extends Persona {
    constructor(nombre, edad, fechaNacimiento, grado) {
      super(nombre, edad, fechaNacimiento);
      this.grado = grado;
    }
  
    establecerGrado(grado) {
      if (typeof grado === 'string' && grado.trim() !== '') {
        this.grado = grado;
      } else {
        throw new Error('Grado inválido.');
      }
    }
  
    obtenerGrado() {
      return this.grado;
    }
  
    toString() {
      return `${super.obtenerNombre()}, ${super.obtenerEdad()} años, Fecha de nacimiento: ${super.obtenerFechaNacimiento().toDateString()}, Grado: ${this.grado}`;
    }
  }
  