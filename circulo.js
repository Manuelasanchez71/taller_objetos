const FiguraGeometrica = require('./figurageometrica');

class Circulo extends FiguraGeometrica {
  constructor(nombre, color, radio) {
    super(nombre, color);
    this.establecerRadio(radio);
  }

  establecerRadio(radio) {
    if (typeof radio === 'number' && radio > 0) {
      this.radio = radio;
    } else {
      throw new Error('Radio inválido.');
    }
  }

  obtenerRadio() {
    return this.radio;
  }
}
module.exports = Circulo;