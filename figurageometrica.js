class FiguraGeometrica {
    #nombre;
    #color;
  
    constructor(nombre, color) {
      this.establecerNombre(nombre);
      this.establecerColor(color);
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
  
    establecerColor(color) {
      if (typeof color === 'string' && color.trim() !== '') {
        this.#color = color;
      } else {
        throw new Error('Color inválido.');
      }
    }
  
    obtenerColor() {
      return this.#color;
    }
  }
  
  module.exports = FiguraGeometrica;
  