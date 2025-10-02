// Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

  window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("bg-light", window.scrollY < 50);
  navbar.classList.toggle("bg-dark", window.scrollY >= 50);
  navbar.classList.toggle("navbar-dark", window.scrollY >= 50);
});

    // Form handling
    document.getElementById("reservaForm").addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Validar campos requeridos
      const nombre = document.getElementById('nombre').value;
      const telefono = document.getElementById('telefono').value;
      const personas = document.getElementById('personas').value;
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;
      const email = document.getElementById('email').value;
      
      if (!nombre || !telefono || !personas || !fecha || !hora || !email) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }
      
      // Validar fecha (no puede ser en el pasado)
      const fechaSeleccionada = new Date(fecha);
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      
      if (fechaSeleccionada < hoy) {
        alert('La fecha de reserva no puede ser en el pasado.');
        return;
      }
      
      // Mostrar modal de confirmación
      const modal = new bootstrap.Modal(document.getElementById("confirmacion"));
      modal.show();
      
      // Resetear formulario después de un delay
      setTimeout(() => {
        this.reset();
      }, 2000);
    });


    // Set minimum date to today for reservation form
    document.addEventListener('DOMContentLoaded', function() {
      const fechaInput = document.getElementById('fecha');
      const hoy = new Date().toISOString().split('T')[0];
      fechaInput.setAttribute('min', hoy);
    });