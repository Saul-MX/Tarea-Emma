const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));

function closeMenu() { 
  mobileMenu.classList.remove('open'); 
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); closeMenu(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});


// Registrar el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. animacion de carga en hero
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.from("#navbar", { y: -50, opacity: 0, duration: 1 })
  .from(".hero-text h1", { x: -100, opacity: 0, duration: 0.8 }, "-=0.5")
  .from(".hero-text p", { x: -50, opacity: 0, duration: 0.8 }, "-=0.6")
  .from(".hero-img-box", { scale: 0.5, opacity: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.8");

// 2. animacion de bienvenida 
gsap.from("#bienvenida h2, #bienvenida p", {
    scrollTrigger: {
        trigger: "#bienvenida",
        start: "top 80%", 
    },
    y: 30,
    opacity: 0,
    stagger: 0.2, 
    duration: 1
});

// 3. animacion en tarjetas
gsap.from(".porque-card", {
    scrollTrigger: {
        trigger: "#porque",
        start: "top 75%",
    },
    y: 50,
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    stagger: 0.2, 
    ease: "back.out(1.2)"
});

// 4. animacion de diseños
gsap.from(".dis-item", {
    scrollTrigger: {
        trigger: "#disenos",
        start: "top 70%",
    },
    opacity: 0,
    rotationY: 45,
    y: 40,
    duration: 1,
    stagger: 0.3
});

// 5. animacion de precios
gsap.from(".precios-grid > div", {
    scrollTrigger: {
        trigger: "#precios",
        start: "top 70%",
    },
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "elastic.out(1, 0.5)"
});

// 6. animacion de comunidad
gsap.from(".ph", {
    scrollTrigger: {
        trigger: ".photo-strip",
        start: "top 85%",
    },
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out"
});

// 7. animacion constante de imagen principal
gsap.to(".hero-img", {
    y: 20,
    duration: 2,
    repeat: -1, // Infinito
    yoyo: true, // Va y viene
    ease: "sine.inOut"
});
