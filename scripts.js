document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnDarkMode');
  if (!btn) {
    console.error('Botón modo oscuro NO encontrado');
    return;
  }
  console.log('Botón modo oscuro encontrado');

  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    console.log('Modo oscuro alternado');
  });
});


  // Buscador de texto
  function buscarTexto() {
    const input = document.getElementById("buscador");
    const filtro = input.value.toLowerCase();
    const secciones = document.querySelectorAll("section");

    secciones.forEach(seccion => {
      seccion.style.display = seccion.textContent.toLowerCase().includes(filtro) ? "" : "none";
    });
  }

    AOS.init({
    duration: 1000,
    once: true,
  }); 

  ScrollReveal().reveal('.reveal', {
    duration: 1000,      // Duración de la animación en milisegundos
    distance: '50px',    // Distancia que el elemento se moverá desde su posición inicial
    easing: 'ease-in-out', // Tipo de transición
    origin: 'bottom',    // Dirección desde donde aparece el elemento (top, bottom, left, right)
    interval: 200        // Si hay varios elementos, el retraso entre animación de uno y otro
  });