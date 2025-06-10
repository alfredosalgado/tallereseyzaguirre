document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector('.whatsapp-btn');

  if (btn) {
    btn.addEventListener('click', function (event) {
      event.preventDefault(); // Evita que el navegador siga el enlace `href`
      const phone = '56945789547'; // Número de teléfono
      const message = 'Hola, me interesa obtener más información.';
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    });
  } else {
    console.error("No se encontró el botón de WhatsApp en el DOM.");
  }
});

// Obtén el botón de "Subir"
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Cuando el usuario haga scroll hacia abajo, muestra el botón
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollToTopBtn.style.display = "flex"; // Muestra el botón
  } else {
    scrollToTopBtn.style.display = "none"; // Oculta el botón
  }
};

// Cuando el usuario haga clic en el botón, realiza el desplazamiento suave
scrollToTopBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Evita la acción predeterminada de ancla

  // Desplazamiento suave hasta la parte superior
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Añade la transición suave
  });
});















document.addEventListener("DOMContentLoaded", () => {
  const titulos = document.querySelectorAll(".titulo-animado");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("titulo-visible"); // Agrega la animación cuando es visible
      } else {
        entry.target.classList.remove("titulo-visible"); // Quita la animación cuando deja de ser visible
      }
    });
  }, { threshold: 0.2 });

  titulos.forEach(titulo => observer.observe(titulo));
});



document.addEventListener("DOMContentLoaded", () => {
  const textos = document.querySelectorAll(".texto-fade");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("texto-visible"); // Activa la animación
      } else {
        entry.target.classList.remove("texto-visible"); // Permite que se repita
      }
    });
  }, { threshold: 0.2 });

  textos.forEach(texto => observer.observe(texto));
});








// Código anterior
const navbar = document.querySelector('.navbar');
const navbarCollapse = document.getElementById('navbarNavAltMarkup');

// Cambiar fondo al abrir/cerrar el menú
navbarCollapse.addEventListener('show.bs.collapse', () => {
  navbar.classList.remove('bg-ryf');
  navbar.classList.add('bg-translucido');
});

navbarCollapse.addEventListener('hide.bs.collapse', () => {
  navbar.classList.remove('bg-translucido');
  navbar.classList.add('bg-ryf');
});

// Cerrar menú hamburguesa al hacer clic en cualquier nav-link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
    if (collapseInstance && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.add('fade-out');

      // Espera la duración de la animación antes de colapsar
      setTimeout(() => {
        collapseInstance.hide(); // Oculta el menú
        navbarCollapse.classList.remove('fade-out'); // limpia la clase
      }, 300); // Debe coincidir con los 300ms del CSS
    }
  });
});














let currentNoticia = 0;
const noticias = document.querySelectorAll(".noticia-slide");

function showNoticia(index) {
  noticias.forEach((noticia, i) => {
    noticia.classList.toggle("active", i === index);
  });
}

function nextNoticia() {
  currentNoticia = (currentNoticia + 1) % noticias.length;
  showNoticia(currentNoticia);
}

function prevNoticia() {
  currentNoticia = (currentNoticia - 1 + noticias.length) % noticias.length;
  showNoticia(currentNoticia);
}











let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}







document.addEventListener('DOMContentLoaded', () => {
  const totalFotos = 51;
  const carousel   = document.querySelector('.galeria-carousel');
  const nextBtn    = carousel.querySelector('.galeria-btn.next');
  const prevBtn    = carousel.querySelector('.galeria-btn.prev');
  const slides     = [];

  // 1) Generar slides
  for (let i = 1; i <= totalFotos; i++) {
    const slide = document.createElement('div');
    slide.className = 'galeria-slide';
    const img = document.createElement('img');
    img.src = `./assets/img/galeria/${i}.jpg`;
    img.alt = `Foto ${i}`;
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => abrirModal(img.src));
    slide.appendChild(img);
    carousel.insertBefore(slide, nextBtn);
    slides.push(slide);
  }

  let currentFoto = 0;

  // 2) Detectar cuántas slides mostramos según el ancho
  function getVisibleCount() {
    const w = window.innerWidth;
    if (w >= 900) return 4;
    if (w >= 768) return 3;
    return 2;
  }

  // 3) Mostrar un rango de slides activos
  function showFoto(idx) {
    const count = getVisibleCount();
    slides.forEach((s, i) => {
      // activo si i está entre idx y idx+count-1 (con wrap-around)
      let active = false;
      for (let j = 0; j < count; j++) {
        if ((idx + j) % slides.length === i) {
          active = true;
          break;
        }
      }
      s.classList.toggle('active', active);
    });
  }

  // 4) Avanzar o retroceder de a "count" slides
  function nextFoto() {
    const count = getVisibleCount();
    currentFoto = (currentFoto + count) % slides.length;
    showFoto(currentFoto);
  }
  function prevFoto() {
    const count = getVisibleCount();
    currentFoto = (currentFoto - count + slides.length) % slides.length;
    showFoto(currentFoto);
  }

  nextBtn.addEventListener('click', nextFoto);
  prevBtn.addEventListener('click', prevFoto);

  // 5) Al cambiar el tamaño de ventana, refrescamos la vista
  window.addEventListener('resize', () => showFoto(currentFoto));

  // 6) Inicializamos la primera vista
  showFoto(currentFoto);

  // 7) Autoplay cada 4 segundos, también saltando de a "count"
  setInterval(nextFoto, 4000);

  // --- Modal igual que antes ---
  const modal = document.getElementById('modalGaleria');
  const imgModal = document.getElementById('imagenModal');
  document.querySelector('.cerrar-modal').addEventListener('click', cerrarModal);
  window.addEventListener('click', e => { if (e.target === modal) cerrarModal(); });
  function abrirModal(src) {
    imgModal.src = src;
    modal.style.display = 'flex';
  }
  function cerrarModal() {
    modal.style.display = 'none';
  }
});








function enviarWhatsApp() {
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  const texto = `Hola, mi nombre es ${nombre}.%0AMi teléfono es: ${telefono}.%0AMi correo es: ${correo}.%0AMensaje:%0A${mensaje}`;
  const numero = "56945789547";
  const url = `https://wa.me/${numero}?text=${texto}`;

  window.open(url, "_blank");
}














// Función para manejar el estado activo del navbar
function setActiveNav() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  let currentSection = '';

  // Detectar la sección visible
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
      currentSection = section.getAttribute('id');
    }
  });

  // Actualizar clase activa
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
}

// Ejecutar al cargar y al hacer scroll
window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

// Manejar clics en los enlaces
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
















