export class Animador {
  constructor(elemento) {
    this.elemento = elemento;
  }

  aplicarAnimaciones() {
    this.elemento.style.opacity = '0';
    this.elemento.style.transform = 'translateY(20px)';

    requestAnimationFrame(() => {
      setTimeout(() => {
        this.elemento.style.transition = 'all 5s ease';
        this.elemento.style.opacity = '1';
        this.elemento.style.transform = 'translateY(0)';
      }, 100);
    });
  }
}
