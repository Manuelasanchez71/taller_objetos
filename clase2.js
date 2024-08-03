const Estudiante = require("./clase")


class Trabajador {
    realizarTarea() {
      throw new Error('Este método debe ser implementado por la subclase');
    }
  }
  
  class Empleado extends Persona {
    constructor(nombre, edad, fechaNacimiento, puesto) {
      super(nombre, edad, fechaNacimiento);
      this.puesto = puesto;
    }
  }  