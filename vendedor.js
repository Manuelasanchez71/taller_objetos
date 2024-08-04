const Empleado = require('./empleado');

class Vendedor extends Empleado {
  constructor(nombre, salario, comision) {
    super(nombre, salario);
    this.comision = comision;
  }

  establecerComision(comision) {
    if (typeof comision === 'number' && comision >= 0) {
      this.comision = comision;
    } else {
      throw new Error('Comisión inválida.');
    }
  }

  obtenerComision() {
    return this.comision;
  }
  
  calcularSalario() {
    return this.salario + this.comision;
  }
}

module.exports = Vendedor;