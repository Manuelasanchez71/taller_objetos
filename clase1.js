const Persona = require("./clase")

class Estudiante extends Persona {
    constructor(nombre, edad, fechaNacimiento, grado) {
      super(nombre, edad, fechaNacimiento);
      this.grado = grado;
    }
  }
  