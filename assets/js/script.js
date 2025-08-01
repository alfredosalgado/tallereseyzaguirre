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














// Función para scroll suave a la siguiente sección
function scrollToNextSection() {
  const servSection = document.getElementById('serv');
  if (servSection) {
    servSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// SISTEMA DINÁMICO DE CAMIONES EN VENTA
const camionesData = [
  {
    id: 1,
    titulo: "Mercedes Benz Unimog U1300L",
    imagen: "./assets/img/galeria/1.jpg", // Usando imagen de la galería existente
    estado: "disponible", // disponible, vendido, reservado
    año: "1985",
    motor: "OM352A 5.7L Diesel",
    transmision: "Manual 8 velocidades",
    kilometraje: "45,000 km",
    precio: "Consultar precio",
    descripcion: "Vehículo militar en excelente estado, ideal para trabajos pesados y terrenos difíciles."
  },
  {
    id: 2,
    titulo: "Mercedes Benz Unimog U1700L",
    imagen: "./assets/img/galeria/5.jpg",
    estado: "disponible",
    año: "1988",
    motor: "OM366A 6.0L Diesel",
    transmision: "Manual 8 velocidades",
    kilometraje: "38,500 km",
    precio: "Consultar precio",
    descripcion: "Unimog con capacidad de carga superior, perfecto para transporte militar y civil."
  },
  {
    id: 3,
    titulo: "Mercedes Benz Unimog U1250",
    imagen: "./assets/img/galeria/10.jpg",
    estado: "vendido",
    año: "1982",
    motor: "OM352 5.7L Diesel",
    transmision: "Manual 6 velocidades",
    kilometraje: "52,000 km",
    precio: "VENDIDO",
    descripcion: "Vehículo completamente restaurado, vendido a coleccionista privado."
  },
  {
    id: 4,
    titulo: "Mercedes Benz Unimog U1300",
    imagen: "./assets/img/galeria/15.jpg",
    estado: "reservado",
    año: "1986",
    motor: "OM352A 5.7L Diesel",
    transmision: "Manual 8 velocidades",
    kilometraje: "41,200 km",
    precio: "RESERVADO",
    descripcion: "Vehículo en proceso de restauración, reservado para cliente específico."
  },
  {
    id: 5,
    titulo: "Mercedes Benz Unimog U1500L",
    imagen: "./assets/img/galeria/20.jpg",
    estado: "disponible",
    año: "1990",
    motor: "OM366A 6.0L Diesel",
    transmision: "Manual 8 velocidades",
    kilometraje: "35,800 km",
    precio: "Consultar precio",
    descripcion: "Modelo más moderno con excelente mantenimiento y documentación completa."
  },
  {
    id: 6,
    titulo: "Mercedes Benz Unimog U1200",
    imagen: "./assets/img/galeria/25.jpg",
    estado: "disponible",
    año: "1980",
    motor: "OM352 5.7L Diesel",
    transmision: "Manual 6 velocidades",
    kilometraje: "48,000 km",
    precio: "Consultar precio",
    descripcion: "Clásico Unimog en muy buen estado, ideal para coleccionistas y uso recreativo."
  }
];

// Función para generar el HTML de una card de camión
function generarCardCamion(camion) {
  const estadoClass = `estado-${camion.estado}`;
  const estadoTexto = camion.estado.charAt(0).toUpperCase() + camion.estado.slice(1);
  const isDisponible = camion.estado === 'disponible';
  
  const mensajeWhatsApp = `Hola, estoy interesado en el ${camion.titulo} del año ${camion.año}. ¿Podrían darme más información sobre este vehículo?`;
  const urlWhatsApp = `https://wa.me/56945789547?text=${encodeURIComponent(mensajeWhatsApp)}`;

  return `
    <div class="col-12 col-md-6 col-lg-4 texto-fade" data-estado="${camion.estado}">
      <div class="camion-card">
        <div class="camion-image">
          <img src="${camion.imagen}" alt="${camion.titulo}">
          <div class="estado-badge ${estadoClass}">${estadoTexto}</div>
        </div>
        <div class="camion-content">
          <h3 class="camion-title">${camion.titulo}</h3>
          <ul class="camion-specs">
            <li><strong>Año:</strong> ${camion.año}</li>
            <li><strong>Motor:</strong> ${camion.motor}</li>
            <li><strong>Transmisión:</strong> ${camion.transmision}</li>
            <li><strong>Kilometraje:</strong> ${camion.kilometraje}</li>
          </ul>
          <div class="precio-container">
            <p class="precio-text">${camion.precio}</p>
          </div>
          <p style="font-size: 0.9rem; color: #666; margin-bottom: 1rem;">${camion.descripcion}</p>
          ${isDisponible ? 
            `<a href="${urlWhatsApp}" class="btn-cotizar" target="_blank">Cotizar Vehículo</a>` :
            `<button class="btn-cotizar" disabled>No Disponible</button>`
          }
        </div>
      </div>
    </div>
  `;
}

// Función para renderizar todos los camiones
function renderizarCamiones(filtro = 'todos') {
  const container = document.getElementById('camiones-container');
  if (!container) return;

  let camionesAMostrar = camionesData;
  
  if (filtro !== 'todos') {
    camionesAMostrar = camionesData.filter(camion => camion.estado === filtro);
  }

  container.innerHTML = camionesAMostrar.map(camion => generarCardCamion(camion)).join('');
  
  // Reactivar las animaciones de fade para los nuevos elementos
  const textosFade = document.querySelectorAll('.texto-fade');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("texto-visible");
      }
    });
  }, { threshold: 0.2 });

  textosFade.forEach(texto => observer.observe(texto));
}

// Función para agregar filtros de estado
function agregarFiltrosCamiones() {
  const container = document.getElementById('camiones-container');
  if (!container) return;

  const filtrosHTML = `
    <div class="filtros-camiones">
      <button class="filtro-btn active" onclick="filtrarCamiones('todos', this)">Todos</button>
      <button class="filtro-btn" onclick="filtrarCamiones('disponible', this)">Disponibles</button>
      <button class="filtro-btn" onclick="filtrarCamiones('reservado', this)">Reservados</button>
      <button class="filtro-btn" onclick="filtrarCamiones('vendido', this)">Vendidos</button>
    </div>
  `;
  
  container.insertAdjacentHTML('beforebegin', filtrosHTML);
}

// Función para filtrar camiones
function filtrarCamiones(estado, botonActivo) {
  // Actualizar botones activos
  document.querySelectorAll('.filtro-btn').forEach(btn => btn.classList.remove('active'));
  botonActivo.classList.add('active');
  
  // Renderizar camiones filtrados
  renderizarCamiones(estado);
}

// Funciones para administrar camiones (para uso futuro)
function agregarCamion(nuevoCamion) {
  const nuevoId = Math.max(...camionesData.map(c => c.id)) + 1;
  nuevoCamion.id = nuevoId;
  camionesData.push(nuevoCamion);
  renderizarCamiones();
}

function eliminarCamion(id) {
  const index = camionesData.findIndex(camion => camion.id === id);
  if (index > -1) {
    camionesData.splice(index, 1);
    renderizarCamiones();
  }
}

function cambiarEstadoCamion(id, nuevoEstado) {
  const camion = camionesData.find(c => c.id === id);
  if (camion) {
    camion.estado = nuevoEstado;
    if (nuevoEstado === 'vendido') {
      camion.precio = 'VENDIDO';
    } else if (nuevoEstado === 'reservado') {
      camion.precio = 'RESERVADO';
    }
    renderizarCamiones();
  }
}

// Inicializar la sección de camiones cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  // Esperar un poco para asegurar que el DOM esté completamente cargado
  setTimeout(() => {
    agregarFiltrosCamiones();
    renderizarCamiones();
    agregarFiltrosRepuestos();
    renderizarRepuestos();
  }, 100);
});

// SISTEMA DINÁMICO DE REPUESTOS DISPONIBLES
const repuestosData = [
  {
    id: 1,
    titulo: "Motor OM352A Completo",
    codigo: "MB-OM352A-001",
    imagen: "./assets/img/galeria/30.jpg",
    categoria: "motor",
    disponibilidad: "disponible", // disponible, agotado, bajo-stock
    compatibilidad: "Unimog U1300L, U1700L",
    estado: "Reacondicionado",
    garantia: "6 meses",
    origen: "Original Mercedes Benz",
    precio: "Consultar precio",
    descripcion: "Motor diesel OM352A completamente reacondicionado, ideal para Unimog U1300L y U1700L."
  },
  {
    id: 2,
    titulo: "Caja de Transmisión 8 Velocidades",
    codigo: "MB-TRANS-8V-002",
    imagen: "./assets/img/galeria/35.jpg",
    categoria: "transmision",
    disponibilidad: "disponible",
    compatibilidad: "Unimog U1300, U1500",
    estado: "Nuevo",
    garantia: "12 meses",
    origen: "Original Mercedes Benz",
    precio: "Consultar precio",
    descripcion: "Transmisión manual de 8 velocidades, nueva, con documentación completa."
  },
  {
    id: 3,
    titulo: "Sistema de Frenos Completo",
    codigo: "MB-BRAKE-SYS-003",
    imagen: "./assets/img/galeria/40.jpg",
    categoria: "frenos",
    disponibilidad: "bajo-stock",
    compatibilidad: "Unimog U1200, U1300",
    estado: "Reacondicionado",
    garantia: "3 meses",
    origen: "Original Mercedes Benz",
    precio: "Consultar precio",
    descripcion: "Sistema de frenos completo reacondicionado, incluye discos, pastillas y cilindros."
  },
  {
    id: 4,
    titulo: "Bomba Hidráulica Principal",
    codigo: "MB-HYD-PUMP-004",
    imagen: "./assets/img/galeria/45.jpg",
    categoria: "hidraulico",
    disponibilidad: "disponible",
    compatibilidad: "Unimog U1700L, U1500L",
    estado: "Reacondicionado",
    garantia: "6 meses",
    origen: "Original Mercedes Benz",
    precio: "Consultar precio",
    descripcion: "Bomba hidráulica principal reacondicionada, probada y certificada."
  },
  {
    id: 5,
    titulo: "Faros Delanteros LED",
    codigo: "MB-LIGHT-LED-005",
    imagen: "./assets/img/galeria/50.jpg",
    categoria: "electrico",
    disponibilidad: "disponible",
    compatibilidad: "Todos los modelos Unimog",
    estado: "Nuevo",
    garantia: "24 meses",
    origen: "Aftermarket Premium",
    precio: "Consultar precio",
    descripcion: "Faros LED de alta eficiencia, mayor iluminación y menor consumo energético."
  },
  {
    id: 6,
    titulo: "Filtro de Aire OM352",
    codigo: "MB-FILTER-AIR-006",
    imagen: "./assets/img/galeria/12.jpg",
    categoria: "filtros",
    disponibilidad: "disponible",
    compatibilidad: "Motores OM352, OM352A",
    estado: "Nuevo",
    garantia: "Sin garantía (consumible)",
    origen: "Original Mercedes Benz",
    precio: "Consultar precio",
    descripcion: "Filtro de aire original para motores OM352 y OM352A, alta calidad."
  },
  {
    id: 7,
    titulo: "Radiador de Refrigeración",
    codigo: "MB-RAD-COOL-007",
    imagen: "./assets/img/galeria/18.jpg",
    categoria: "refrigeracion",
    disponibilidad: "agotado",
    compatibilidad: "Unimog U1300L",
    estado: "Reacondicionado",
    garantia: "6 meses",
    origen: "Original Mercedes Benz",
    precio: "AGOTADO",
    descripcion: "Radiador de refrigeración reacondicionado, actualmente sin stock."
  },
  {
    id: 8,
    titulo: "Asientos Militares Originales",
    codigo: "MB-SEAT-MIL-008",
    imagen: "./assets/img/galeria/22.jpg",
    categoria: "carroceria",
    disponibilidad: "bajo-stock",
    compatibilidad: "Todos los modelos Unimog",
    estado: "Restaurado",
    garantia: "3 meses",
    origen: "Original Mercedes Benz",
    precio: "Consultar precio",
    descripcion: "Asientos militares originales completamente restaurados, últimas unidades."
  },
  {
    id: 9,
    titulo: "Kit de Embrague Completo",
    codigo: "MB-CLUTCH-KIT-009",
    imagen: "./assets/img/galeria/28.jpg",
    categoria: "transmision",
    disponibilidad: "disponible",
    compatibilidad: "Unimog U1200, U1300",
    estado: "Nuevo",
    garantia: "12 meses",
    origen: "Original Mercedes Benz",
    precio: "Consultar precio",
    descripcion: "Kit de embrague completo nuevo, incluye disco, plato y cojinete."
  }
];

// Función para generar el HTML de una card de repuesto
function generarCardRepuesto(repuesto) {
  const disponibilidadClass = repuesto.disponibilidad;
  const disponibilidadTexto = repuesto.disponibilidad === 'bajo-stock' ? 'Bajo Stock' : 
                              repuesto.disponibilidad.charAt(0).toUpperCase() + repuesto.disponibilidad.slice(1);
  const isDisponible = repuesto.disponibilidad === 'disponible' || repuesto.disponibilidad === 'bajo-stock';
  
  const mensajeWhatsApp = `Hola, estoy interesado en el repuesto: ${repuesto.titulo} (Código: ${repuesto.codigo}). ¿Podrían darme más información sobre disponibilidad y precio?`;
  const urlWhatsApp = `https://wa.me/56945789547?text=${encodeURIComponent(mensajeWhatsApp)}`;

  return `
    <div class="col-12 col-md-6 col-lg-4 texto-fade" data-categoria="${repuesto.categoria}">
      <div class="repuesto-card">
        <div class="repuesto-image">
          <img src="${repuesto.imagen}" alt="${repuesto.titulo}">
          <div class="categoria-badge">${repuesto.categoria.toUpperCase()}</div>
          <div class="disponibilidad-badge ${disponibilidadClass}">${disponibilidadTexto}</div>
        </div>
        <div class="repuesto-content">
          <h3 class="repuesto-title">${repuesto.titulo}</h3>
          <div class="repuesto-codigo">Código: ${repuesto.codigo}</div>
          <ul class="repuesto-specs">
            <li><strong>Compatibilidad:</strong> ${repuesto.compatibilidad}</li>
            <li><strong>Estado:</strong> ${repuesto.estado}</li>
            <li><strong>Garantía:</strong> ${repuesto.garantia}</li>
            <li><strong>Origen:</strong> ${repuesto.origen}</li>
          </ul>
          <div class="precio-repuesto">
            <p class="precio-text">${repuesto.precio}</p>
          </div>
          <p style="font-size: 0.85rem; color: #666; margin-bottom: 1rem;">${repuesto.descripcion}</p>
          ${isDisponible ? 
            `<a href="${urlWhatsApp}" class="btn-cotizar-repuesto" target="_blank">Cotizar Repuesto</a>` :
            `<button class="btn-cotizar-repuesto" disabled>No Disponible</button>`
          }
        </div>
      </div>
    </div>
  `;
}

// Función para renderizar todos los repuestos
function renderizarRepuestos(filtro = 'todos') {
  const container = document.getElementById('repuestos-container');
  if (!container) return;

  let repuestosAMostrar = repuestosData;
  
  if (filtro !== 'todos') {
    repuestosAMostrar = repuestosData.filter(repuesto => repuesto.categoria === filtro);
  }

  container.innerHTML = repuestosAMostrar.map(repuesto => generarCardRepuesto(repuesto)).join('');
  
  // Reactivar las animaciones de fade para los nuevos elementos
  const textosFade = document.querySelectorAll('.texto-fade');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("texto-visible");
      }
    });
  }, { threshold: 0.2 });

  textosFade.forEach(texto => observer.observe(texto));
}

// Función para agregar filtros de categoría
function agregarFiltrosRepuestos() {
  const container = document.getElementById('repuestos-container');
  if (!container) return;

  const categorias = [...new Set(repuestosData.map(repuesto => repuesto.categoria))];
  
  const filtrosHTML = `
    <div class="filtros-repuestos">
      <button class="filtro-categoria active" onclick="filtrarRepuestos('todos', this)">Todos</button>
      ${categorias.map(categoria => 
        `<button class="filtro-categoria" onclick="filtrarRepuestos('${categoria}', this)">${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</button>`
      ).join('')}
    </div>
  `;
  
  container.insertAdjacentHTML('beforebegin', filtrosHTML);
}

// Función para filtrar repuestos
function filtrarRepuestos(categoria, botonActivo) {
  // Actualizar botones activos
  document.querySelectorAll('.filtro-categoria').forEach(btn => btn.classList.remove('active'));
  botonActivo.classList.add('active');
  
  // Renderizar repuestos filtrados
  renderizarRepuestos(categoria);
}

// Funciones para administrar repuestos (para uso futuro)
function agregarRepuesto(nuevoRepuesto) {
  const nuevoId = Math.max(...repuestosData.map(r => r.id)) + 1;
  nuevoRepuesto.id = nuevoId;
  repuestosData.push(nuevoRepuesto);
  renderizarRepuestos();
}

function eliminarRepuesto(id) {
  const index = repuestosData.findIndex(repuesto => repuesto.id === id);
  if (index > -1) {
    repuestosData.splice(index, 1);
    renderizarRepuestos();
  }
}

function cambiarDisponibilidadRepuesto(id, nuevaDisponibilidad) {
  const repuesto = repuestosData.find(r => r.id === id);
  if (repuesto) {
    repuesto.disponibilidad = nuevaDisponibilidad;
    if (nuevaDisponibilidad === 'agotado') {
      repuesto.precio = 'AGOTADO';
    }
    renderizarRepuestos();
  }
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
















