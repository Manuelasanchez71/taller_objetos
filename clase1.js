const Persona = require("./clase")

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
  
 
  const estudiante = new Estudiante('Manuela Sanchez', 25, new Date(1998, 7, 3), 'Ingeniería');
  console.log(estudiante.toString());
  
  