const elementos = document.querySelectorAll('.secao h2, .secao p, .skill, .projeto, .links');

elementos.forEach(function (el) {
  el.classList.add('escondido');
});

const observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel');
    }
  });
}, { threshold: 0.15 });

elementos.forEach(function (el) {
  observador.observe(el);
});
