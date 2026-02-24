/* ============================================
   ENGAGEMENTS DATA
   ============================================ */
const engagements = [
  {
    num: "01", icon: "fa-leaf", title: "Transition Écologique", color: "#5DB03F",
    quote: "L'écologie, c'est d'abord du concret : des parcs plus verts, des factures d'énergie allégées, et un air plus pur pour les Bourgetins.",
    action: "Des parcs entretenus et accessibles, des écoles moins énergivores, et des solutions concrètes pour respirer un air plus sain et réduire les dépenses énergétiques des familles."
  },
  {
    num: "02", icon: "fa-shield-halved", title: "Sécurité", color: "#1B3557",
    quote: "Une sécurité efficace, visible et humaine, pour des rues apaisées et des habitants rassurés.",
    action: "Une présence renforcée de la police municipale aux heures clés, une vidéoprotection ciblée là où elle est utile, et une collaboration étroite avec les bailleurs et les commerçants pour prévenir les incivilités."
  },
  {
    num: "03", icon: "fa-graduation-cap", title: "Éducation", color: "#3A8FD9",
    quote: "Des écoles modernes, des enfants épanouis, pour un Bourget qui investit dans son avenir.",
    action: "Des locaux rénovés et adaptés, des activités périscolaires enrichies, et un soutien renforcé aux enseignants pour offrir à chaque enfant les meilleures chances de réussite."
  },
  {
    num: "04", icon: "fa-broom", title: "Propreté", color: "#1A8A5A",
    quote: "Un Bourget propre et agréable à vivre, parce que la propreté, c'est l'affaire de tous.",
    action: "Des tournées de nettoyage renforcées, des poubelles de tri accessibles dans tous les quartiers, et une mobilisation des habitants pour préserver notre cadre de vie."
  },
  {
    num: "05", icon: "fa-house", title: "Logement", color: "#D03A2A",
    quote: "Des logements dignes et abordables, pour que chacun puisse se sentir chez soi au Bourget.",
    action: "Un plan de rénovation des logements sociaux, un accompagnement des propriétaires pour rénover leur bien, et une lutte déterminée contre l'habitat indigne et les abus subis par les locataires."
  },
  {
    num: "06", icon: "fa-bolt", title: "Jeunesse", color: "#C4176A",
    quote: "Des espaces dédiés et des activités variées, pour que les jeunes Bourgetins aient envie de grandir ici.",
    action: "Des lieux de rencontre et de loisirs adaptés, des animations culturelles et sportives accessibles, et un soutien aux projets portés par les jeunes."
  },
  {
    num: "07", icon: "fa-handshake", title: "Solidarité", color: "#F59E0B",
    quote: "Une ville qui prend soin de ses habitants, parce que personne ne doit rester seul face aux difficultés.",
    action: "Un accueil renforcé pour les personnes âgées, un soutien aux familles en situation de précarité, et des actions concrètes pour lutter contre l'isolement."
  },
  {
    num: "08", icon: "fa-futbol", title: "Sport Pour Tous", color: "#3A8FD9",
    quote: "Le sport est un outil de santé, d'éducation et de respect.",
    action: "L'entretien des équipements sportifs, un soutien aux clubs et aux associations, et la valorisation du sport amateur et éducatif."
  },
  {
    num: "09", icon: "fa-heart-pulse", title: "Santé et Bien-Être", color: "#D03A2A",
    quote: "Bien vivre au Bourget, c'est aussi pouvoir prendre soin de sa santé.",
    action: "Des actions de prévention, un accès facilité aux soins, et des initiatives locales pour améliorer le bien-être physique et mental."
  },
  {
    num: "10", icon: "fa-briefcase", title: "Emploi et Insertion", color: "#5DB03F",
    quote: "Travailler, se former, trouver sa place, c'est essentiel pour vivre dignement.",
    action: "Un accompagnement vers l'emploi et la formation, des partenariats avec les acteurs économiques locaux, et des dispositifs d'insertion pour les publics éloignés de l'emploi."
  },
  {
    num: "11", icon: "fa-masks-theater", title: "Vie Associative et Culture", color: "#C4176A",
    quote: "Les associations font vivre la ville et créent du lien.",
    action: "Un soutien clair et équitable aux associations, des moyens adaptés, et un accès facilité à la culture pour tous les Bourgetins."
  },
  {
    num: "12", icon: "fa-landmark", title: "Démocratie Locale", color: "#1B3557",
    quote: "Une ville plus forte, c'est une ville qui écoute ses habitants.",
    action: "Des réunions de quartier régulières, une information transparente, et des outils concrets de participation citoyenne."
  },
  {
    num: "13", icon: "fa-scale-balanced", title: "Égalité et Lien Intergénérationnel", color: "#1A8A5A",
    quote: "Une ville juste est une ville qui respecte chacun et relie les générations.",
    action: "Des actions contre toutes les discriminations, des initiatives dédiées aux seniors, et des projets intergénérationnels associant jeunes et anciens."
  }
];


/* ============================================
   RENDER ENGAGEMENT CARDS
   ============================================ */
function renderEngagements() {
  const grid = document.getElementById('engageGrid');
  if (!grid) return;


  engagements.forEach((e, i) => {
    const card = document.createElement('div');
    card.className = 'engage-card fade-up';
    card.style.cssText = `--cc:${e.color}; transition-delay:${(i % 3) * 0.08}s`;
    card.innerHTML = `
      <div class="engage-card-top">
        <div class="engage-icon">
          <i class="fas ${e.icon}"></i>
        </div>
        <div>
          <div class="engage-num">Engagement ${e.num}</div>
          <div class="engage-title">${e.title}</div>
        </div>
      </div>
      <p class="engage-quote">"${e.quote}"</p>
      <div class="engage-action">
        <i class="fas fa-check-circle engage-check"></i>
        <span>${e.action}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}


/* ============================================
   NAVBAR — SCROLL EFFECT
   ============================================ */
function initNavbar() {
  const navbar     = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTop');


  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 60);
    scrollTopBtn.classList.toggle('show', y > 350);
  }, { passive: true });


  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ============================================
   MOBILE NAVIGATION
   ============================================ */
function initMobileNav() {
  const ham         = document.getElementById('ham');
  const mobileNav   = document.getElementById('mobileNav');
  const overlay     = document.getElementById('mobileNavOverlay');
  const closeBtn    = document.getElementById('mobileNavClose');
  const navLinks    = mobileNav.querySelectorAll('a');


  function openNav() {
    mobileNav.classList.add('open');
    overlay.classList.add('show');
    ham.classList.add('open');
    document.body.style.overflow = 'hidden';
  }


  function closeNav() {
    mobileNav.classList.remove('open');
    overlay.classList.remove('show');
    ham.classList.remove('open');
    document.body.style.overflow = '';
  }


  ham.addEventListener('click', () => {
    mobileNav.classList.contains('open') ? closeNav() : openNav();
  });


  closeBtn.addEventListener('click', closeNav);
  overlay.addEventListener('click', closeNav);


  navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });
}


/* ============================================
   INTERSECTION OBSERVER — FADE-UP ANIMATIONS
   ============================================ */
function initAnimations() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );


  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}


/* ============================================
   RE-OBSERVE après render dynamique des cards
   ============================================ */
function reObserveFadeUp() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );


  document.querySelectorAll('#engageGrid .fade-up').forEach(el => obs.observe(el));
}


/* ============================================
   ANIMATED COUNTERS
   ============================================ */
function animateCounter(el, target) {
  const duration = 1400; // ms
  const startTime = performance.now();


  function update(currentTime) {
    const elapsed  = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased    = 1 - Math.pow(1 - progress, 3);
    const value    = Math.round(eased * target);
    el.textContent = value.toLocaleString('fr-FR');
    if (progress < 1) requestAnimationFrame(update);
  }


  requestAnimationFrame(update);
}


function initCounters() {
  const strip = document.querySelector('.counter-strip');
  if (!strip) return;


  const counterObs = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-target]').forEach(el => {
            animateCounter(el, parseInt(el.dataset.target, 10));
          });
          counterObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.4 }
  );


  counterObs.observe(strip);
}


/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderEngagements();  // Génère les cartes d'engagements
  initNavbar();         // Scroll + bouton top
  initMobileNav();      // Menu hamburger mobile
  initAnimations();     // Fade-up sur tous les éléments statiques
  reObserveFadeUp();    // Fade-up sur les cartes dynamiques
  initCounters();       // Compteurs animés
  // Cookie banner + Modals gérés en inline dans index.html
});