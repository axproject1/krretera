//Carrusel de Imagenes\\
$(document).ready(function() {
    $('.image-carousel').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    });
  });


  const serviceBtns = document.querySelectorAll('.service-btn');
const serviceContents = document.querySelectorAll('.service-content');

const service1Content = document.getElementById('content1');
const service2Content = document.getElementById('content2');
const service3Content = document.getElementById('content3');
const service4Content = document.getElementById('content4');

service1Content.innerHTML = `
    <h2>Servicio 1</h2>
    <p>Descripción del Servicio 1.</p>
    <img src="imagen1.jpg" alt="Imagen del Servicio 1">
`;

service2Content.innerHTML = `
    <h2>Servicio 2</h2>
    <p>Descripción del Servicio 2.</p>
    <img src="imagen2.jpg" alt="Imagen del Servicio 2">
`;

service3Content.innerHTML = `
    <h2>Servicio 3</h2>
    <p>Descripción del Servicio 3.</p>
    <img src="imagen3.jpg" alt="Imagen del Servicio 3">
`;

service4Content.innerHTML = `
    <h2>Servicio 4</h2>
    <p>Descripción del Servicio 4.</p>
    <img src="imagen4.jpg" alt="Imagen del Servicio 4">
`;

serviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const contentId = btn.dataset.content;
        const contentToShow = document.getElementById(contentId);

        // Remover la clase 'active' de todos los botones
        serviceBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        // Ocultar todos los contenidos de servicios
        serviceContents.forEach(content => content.classList.add('hidden'));

        // Mostrar el contenido correspondiente al botón seleccionado
        contentToShow.classList.remove('hidden');
    });
});

