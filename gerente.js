const Empleado = require('./empleado');

class Gerente extends Empleado {
  constructor(nombre, salario, bono) {
    super(nombre, salario);
    this.bono = bono;
  }

  establecerBono(bono) {
    if (typeof bono === 'number' && bono >= 0) {
      this.bono = bono;
    } else {
      throw new Error('Bono inválido.');
    }
  }

  obtenerBono() {
    return this.bono;
  }
}