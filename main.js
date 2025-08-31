import { Tarjeta } from './Tarjeta.js';

// Selección de elementos
const btnCrear = document.getElementById('btn-crear');
const iconos = document.querySelectorAll('.icono-btn');
const inputIcono = document.getElementById('icono');

// Manejo de selección de íconos
iconos.forEach(btn => {
  btn.addEventListener('click', () => {
    // Guardamos el ícono seleccionado en el input oculto
    inputIcono.value = btn.dataset.icon;

    // Resaltamos el botón seleccionado
    iconos.forEach(b => b.classList.remove('seleccionado'));
    btn.classList.add('seleccionado');
  });
});

// Crear tarjeta al hacer clic en el botón
btnCrear.addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value.trim();
  const profesion = document.getElementById('profesion').value.trim();
  const contacto = document.getElementById('contacto').value.trim();
  const icono = inputIcono.value;

  // Validaciones básicas
  if (!nombre || !profesion || !contacto) {
    alert('Por favor completa todos los campos.');
    return;
  }

  if (!icono) {
    alert('Seleccioná un ícono antes de crear la tarjeta.');
    return;
  }

  // Crear y mostrar tarjeta
  const tarjeta = new Tarjeta(nombre, profesion, contacto, icono);
  tarjeta.mostrar();

  // Limpiar formulario
  document.getElementById('nombre').value = '';
  document.getElementById('profesion').value = '';
  document.getElementById('contacto').value = '';
  inputIcono.value = '';
  iconos.forEach(b => b.classList.remove('seleccionado'));
});
