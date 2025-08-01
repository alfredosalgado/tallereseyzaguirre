# Análisis Completo de la Web - Talleres Eyzaguirre

## Información General
- **Empresa**: Talleres Eyzaguirre
- **Especialidad**: Reparación, mantención y venta de repuestos para vehículos militares (Mercedes Benz/Unimog)
- **Ubicación**: José Manuel Balmaceda 4555, Renca, Región Metropolitana
- **Teléfonos**: +56 9 4578 9547 – +56 9 9905 5469
- **Email**: info@tallereseyzaguirre.cl
- **Horarios**: Lunes a Viernes 09:00-19:00, Sábados 09:00-14:00

## Estructura Técnica

### Framework y Librerías
- **Bootstrap 5.3.3**: Framework CSS principal
- **Font Awesome 6.7.2**: Iconografía
- **Google Fonts**: Merriweather (aunque no se usa completamente)
- **Fuente principal**: Arial Narrow, Arial, sans-serif

### Arquitectura de Archivos
```
├── index.html (archivo principal)
├── assets/
│   ├── css/style.css (estilos personalizados)
│   ├── js/script.js (funcionalidades JavaScript)
│   └── img/
│       ├── favicon_io/ (iconos del sitio)
│       ├── galeria/ (51 imágenes numeradas)
│       ├── iconos/ (5 iconos de servicios)
│       ├── icons/ (iconos de valores y misión/visión)
│       ├── portada/ (imagen hero)
│       └── imágenes de fondo (contactenos.jpg, serv.jpg, why.jpg)
```

## Estructura de Secciones

### 1. Navegación (Navbar)
- **Posición**: Fixed-top con fondo claro (#f7f7f6)
- **Logo**: Imagen redondeada con animación de aparición (6s)
- **Menú**: Responsive con hamburguesa en móvil
- **Enlaces**: 9 secciones principales
- **Funcionalidades**:
  - Cambio de fondo al abrir menú móvil (bg-translucido)
  - Indicador activo con borde inferior
  - Cierre automático al hacer clic en enlaces
  - Scroll spy para resaltar sección actual

### 2. Hero Section (#inicio)
- **Layout**: Flexbox con contenido dividido 50/50
- **Contenido**: Texto a la izquierda, imagen a la derecha
- **Imagen**: assets/img/portada/2.jpg
- **Responsive**: Stack vertical en móvil
- **Altura**: 100vh con padding-top para navbar fija

### 3. Servicios (#serv)
- **Fondo**: Imagen (serv.jpg) con overlay oscuro (opacity: 0.3)
- **Layout**: Grid de 2 columnas (1 en móvil)
- **Servicios**: 5 cards principales
  1. Reparación mecánica especializada
  2. Mantención preventiva y correctiva
  3. Restauración completa
  4. Desabolladura y pintura
  5. Venta de Repuestos
- **Elementos por card**:
  - Icono (assets/img/iconos/1-5.png)
  - Título y descripción
  - Lista desplegable de subservicios
  - Botón de WhatsApp con mensaje personalizado
- **Efectos**: Hover con scale(1.05) y sombra

### 4. Historia (#nosotros)
- **Fondo**: Imagen (contactenos.jpg) con overlay
- **Layout**: Texto en caja blanca translúcida a la izquierda
- **Contenido**: Historia y especialización de la empresa
- **Responsive**: Caja centrada en móvil

### 5. Misión & Visión (#mision)
- **Layout**: Dos columnas centradas
- **Elementos**: Iconos circulares + texto
- **Imágenes**: assets/img/icons/mision.png y vision.png
- **Estilo**: Fondo blanco, títulos con línea decorativa azul

### 6. Valores (#pilares)
- **Layout**: Grid 3x2 (1 columna en móvil)
- **Valores**: 6 pilares fundamentales
- **Elementos**: Icono + título + descripción
- **Fondo**: Gris claro (#f9f9f9)
- **Iconos**: assets/img/icons/ (varios archivos)

### 7. Por qué nos prefieren (#why)
- **Fondo**: Imagen (why.jpg) con overlay
- **Layout**: Similar a #nosotros, caja de texto a la izquierda
- **Contenido**: Razones de preferencia de clientes

### 8. Galería (#galeria)
- **Funcionalidad**: Carousel dinámico con JavaScript
- **Imágenes**: 51 fotos numeradas (assets/img/galeria/1-51.jpg)
- **Layout responsive**:
  - Móvil: 2 columnas
  - Tablet: 3 columnas  
  - Desktop: 4 columnas
- **Características**:
  - Autoplay cada 4 segundos
  - Modal para ampliar imágenes
  - Botones prev/next
  - Aspect ratio 1:1 (cuadradas)
- **Fondo**: Gradiente de negro a blanco

### 9. Testimonios (#reconocer)
- **Funcionalidad**: Carousel manual
- **Testimonios**: 6 testimonios de clientes
- **Elementos**: Estrellas + texto + autor
- **Layout**: Centrado con botones de navegación
- **Clientes**: Variados (militares retirados, particulares, empresas)

### 10. Contacto (#contacto)
- **Layout**: Dos columnas (info + formulario)
- **Información**: Dirección, teléfonos, email, horarios
- **Formulario**: 4 campos que envían a WhatsApp
- **Mapa**: Google Maps embebido
- **Redes sociales**: Instagram activo
- **Función JavaScript**: enviarWhatsApp() formatea mensaje

### 11. Footer
- **Layout**: Dos columnas
- **Contenido**: Enlaces de navegación + descripción empresa
- **Créditos**: Enlace al diseñador (JASR)

## Elementos Flotantes

### Botón WhatsApp
- **Posición**: Fixed bottom-right
- **Funcionalidad**: Abre WhatsApp con mensaje predefinido
- **Número**: 56945789547
- **Estilo**: Circular verde con hover scale

### Botón Scroll to Top
- **Posición**: Fixed, encima del botón WhatsApp
- **Aparición**: Después de 50px de scroll
- **Funcionalidad**: Smooth scroll al inicio

## Funcionalidades JavaScript

### Animaciones
1. **Intersection Observer**: Para títulos y textos con fade-in
2. **Logo**: Animación de aparición de 6s al cargar
3. **Cards**: Hover effects con transform y box-shadow

### Carousels
1. **Galería**: Automático con detección responsive
2. **Testimonios**: Manual con botones prev/next

### Navegación
1. **Scroll Spy**: Resalta sección activa en navbar
2. **Smooth Scroll**: Para enlaces internos
3. **Menu Mobile**: Animaciones de apertura/cierre

### Formularios
1. **WhatsApp Integration**: Múltiples botones con mensajes personalizados
2. **Validación**: HTML5 required en campos

## Paleta de Colores
- **Principal**: #006a9f (azul institucional)
- **Navbar**: #f7f7f6 (gris muy claro)
- **Texto**: #000000 (negro)
- **Fondos**: Blanco, #f9f9f9 (gris claro)
- **WhatsApp**: #25d366 (verde oficial)
- **Instagram**: Gradiente naranja-rosa

## Responsive Design
- **Breakpoints**: 768px, 900px, 1000px, 1200px
- **Estrategia**: Mobile-first con Bootstrap
- **Ajustes específicos**: Heights dinámicos para cards en diferentes tamaños

## SEO y Meta Tags
- **Open Graph**: Configurado para redes sociales
- **Favicon**: Completo con múltiples tamaños
- **Title**: "Talleres Eyzaguirre"
- **Lang**: "es" (español)

## Observaciones Técnicas
1. **Performance**: 51 imágenes en galería pueden afectar carga
2. **Accesibilidad**: Falta algunos alt texts descriptivos
3. **CSS**: Algunas reglas duplicadas o no utilizadas
4. **JavaScript**: Código bien estructurado con event listeners apropiados
5. **Bootstrap**: Uso extensivo pero no completo del framework