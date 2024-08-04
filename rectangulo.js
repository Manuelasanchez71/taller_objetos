const FiguraGeometrica = require('./figurageometrica');

class Rectangulo extends FiguraGeometrica {
  constructor(nombre, color, longitud, ancho) {
    super(nombre, color);
    this.establecerLongitud(longitud);
    this.establecerAncho(ancho);
  }

  establecerLongitud(longitud) {
    if (typeof longitud === 'number' && longitud > 0) {
      this.longitud = longitud;
    } else {
      throw new Error('Longitud inválida.');
    }
  }

  obtenerLongitud() {
    return this.longitud;
  }

  establecerAncho(ancho) {
    if (typeof ancho === 'number' && ancho > 0) {
      this.ancho = ancho;
    } else {
      throw new Error('Ancho inválido.');
    }
  }

  obtenerAncho() {
    return this.ancho;
  }

  calcularArea() {
    return this.longitud * this.ancho;
  }

  calcularPerimetro() {
    return 2 * (this.longitud + this.ancho);
  }
}

module.exports = Rectangulo;