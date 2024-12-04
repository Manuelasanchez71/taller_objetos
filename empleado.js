class Empleado {
    constructor(nombre, salario) {
      this.nombre = nombre;
      this.salario = salario;
    }
  
    establecerNombre(nombre) {
      if (typeof nombre === 'string' && nombre.trim() !== '') {
        this.nombre = nombre;
      } else {
        throw new Error('Nombre inválido.');
      }
    }
  
    obtenerNombre() {
      return this.nombre;
    }
  
    establecerSalario(salario) {
      if (typeof salario === 'number' && salario > 0) {
        this.salario = salario;
      } else {
        throw new Error('Salario inválido.');
      }
    }
  
    obtenerSalario() {
      return this.salario;
    }
  
    calcularSalario() {
      return this.salario;
    }
  }
  
  module.exports = Empleado;
  