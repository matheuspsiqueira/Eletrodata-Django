  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".hero-carousel");
    const slides = document.querySelectorAll(".hero-carousel .slide");
    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlide() {
      const offset = -currentSlide * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    }

    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlide();
    }, 4000);

    updateSlide();
  });

const carrossel = document.getElementById("carrossel");
const leftBtn = document.querySelector(".btn-nav.left");
const rightBtn = document.querySelector(".btn-nav.right");

// 1. Clona os itens para criar efeito de loop infinito
const items = Array.from(carrossel.children);
items.forEach(item => {
  const clone = item.cloneNode(true);
  carrossel.appendChild(clone);
});

let autoScrollInterval;
let isUserScrolling = false;

// 2. Scroll automático passo a passo
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    if (!isUserScrolling) {
      carrossel.scrollBy({ left: 220, behavior: 'smooth' });

      // Verifica se passou da metade (fim da cópia) e reseta para o início sem animação
      if (carrossel.scrollLeft >= carrossel.scrollWidth / 2) {
        carrossel.scrollLeft = 0;
      }
    }
  }, 3000);
}

// 3. Scroll manual pelos botões
function scrollLeft() {
  isUserScrolling = true;
  carrossel.scrollBy({ left: -220, behavior: 'smooth' });
  resetUserScroll();
}

function scrollRight() {
  isUserScrolling = true;
  carrossel.scrollBy({ left: 220, behavior: 'smooth' });
  resetUserScroll();
}

// 4. Pausa temporária no auto-scroll quando usuário interagir
function resetUserScroll() {
  clearTimeout(userScrollTimeout);
  userScrollTimeout = setTimeout(() => {
    isUserScrolling = false;
  }, 3000); // Pausa por 3 segundos após interação
}

leftBtn.addEventListener("click", scrollLeft);
rightBtn.addEventListener("click", scrollRight);

let userScrollTimeout;

// 5. Inicia scroll automático
startAutoScroll();
