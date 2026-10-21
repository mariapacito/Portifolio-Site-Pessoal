document.documentElement.classList.add('js');

// Menu mobile
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

function fechaMenu() {
  menu.classList.remove('aberto');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Abrir menu');
}

burger.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  burger.setAttribute('aria-expanded', String(aberto));
  burger.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
});

// Fecha o menu ao clicar em um link (o scroll suave vem do CSS) ou ao apertar Esc
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', fechaMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') fechaMenu(); });

// Botão voltar ao topo
const topo = document.getElementById('topo');
window.addEventListener('scroll', () => {
  topo.classList.toggle('mostrar', window.scrollY > 400);
}, { passive: true });
topo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Animações ao rolar (cards e timeline)
const alvos = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((itens, o) => {
    itens.forEach(i => {
      if (i.isIntersecting) {
        i.target.classList.add('visivel');
        o.unobserve(i.target);
      }
    });
  }, { threshold: 0.15 });
  alvos.forEach(el => obs.observe(el));
} else {
  alvos.forEach(el => el.classList.add('visivel'));
}
