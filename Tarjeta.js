import { Designer } from './Designer.js';
import { Animador } from './Animador.js';

export class Tarjeta {
  constructor(nombre, profesion, contacto, icono) {
    this.nombre = nombre;
    this.profesion = profesion;
    this.contacto = contacto;
    this.icono = icono;
  }

  mostrar() {
    const contenedor = document.getElementById('contenedor-tarjetas');

    const div = document.createElement('div');
    div.classList.add('tarjeta');

    const designer = new Designer(this);
    const html = designer.generarHTML();

    div.innerHTML = html;

    const animador = new Animador(div);
    animador.aplicarAnimaciones();

    contenedor.appendChild(div);
  }
}
