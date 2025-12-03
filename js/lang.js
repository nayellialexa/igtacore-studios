const LANG = {
  es: {
    "nav.home":"Inicio","nav.about":"Sobre Nosotros","nav.projects":"Proyectos","nav.contact":"Contacto",
    "hero.title":"Desarrollamos mundos.","hero.subtitle":"Creamos experiencias.","hero.tag":"Estudio independiente de videojuegos — realtime • narrativa • gameplay",
    "hero.cta":"Conocer Proyectos","hero.cta2":"Sobre Nosotros",
    "features.explore":"Explora","features.exploreText":"Mundos inmersivos con mecánicas innovadoras.",
    "features.collab":"Colabora","features.collabText":"Buscamos socios, artistas y programadores.",
    "features.vision":"Visión","features.visionText":"Crear experiencias memorables y responsables.",
    "preview.title":"Últimos Proyectos",
    "footer.rights":"Todos los derechos reservados.",
    "about.title":"Nuestra Historia","about.lead":"Igtacore Studios nació de la pasión por contar historias interactivas...",
    "about.mission":"Misión","about.missionText":"Crear juegos que conecten emociones y jugabilidad.",
    "about.vision":"Visión","about.visionText":"Ser un referente indie en narrativa interactiva.",
    "about.team":"Equipo","about.teamText":"Artistas, programadores y diseñadores apasionados.",
    "about.howWeWork":"¿Cómo trabajamos?"
  },
  en: {
    "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.contact":"Contact",
    "hero.title":"We build worlds.","hero.subtitle":"We create experiences.","hero.tag":"Indie games studio — realtime • narrative • gameplay",
    "hero.cta":"View Projects","hero.cta2":"About Us",
    "features.explore":"Explore","features.exploreText":"Immersive worlds with innovative mechanics.",
    "features.collab":"Collaborate","features.collabText":"We seek partners, artists and devs.",
    "features.vision":"Vision","features.visionText":"Create memorable, responsible experiences.",
    "preview.title":"Latest Projects",
    "footer.rights":"All rights reserved.",
    "about.title":"Our Story","about.lead":"Igtacore Studios was born from a passion for interactive storytelling...",
    "about.mission":"Mission","about.missionText":"Make games that connect emotion and gameplay.",
    "about.vision":"Vision","about.visionText":"Be an indie reference in interactive narrative.",
    "about.team":"Team","about.teamText":"Artists, programmers and designers with passion.",
    "about.howWeWork":"How we work"
  }
};

function applyLang(lang) {
  const map = LANG[lang] || LANG.es;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(map[key]) el.textContent = map[key];
  });
  document.querySelectorAll('.lang-toggle').forEach(btn=>{
    btn.textContent = lang === 'es' ? 'EN' : 'ES';
  });
  localStorage.setItem('igt_lang', lang);
}

document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('igt_lang') || 'es';
  applyLang(saved);

  document.querySelectorAll('.lang-toggle').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const cur = localStorage.getItem('igt_lang') || 'es';
      applyLang(cur === 'es' ? 'en' : 'es');
    });
  });
});
