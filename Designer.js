export class Designer {
  constructor(tarjeta) {
    this.tarjeta = tarjeta;
  }

  generarHTML() {
    return `
      <h2>${this.tarjeta.nombre}</h2>
      <p>${this.tarjeta.profesion}</p>
      <p>${this.tarjeta.contacto}</p>
      <div class="icono">${this.tarjeta.icono}</div>
    `;
  }
}
