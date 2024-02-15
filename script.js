// Array para armazenar os textos originais
var originalTexts = [];

function truncateText(element, originalText) {
  let width = window.innerWidth / 100;
  let truncated = originalText.substring(0, 15 * width) + "...";
  element.innerHTML = truncated;
}

function handleResize() {
  let elements = document.querySelectorAll(
    "#cases .card .card-text p:last-child"
  );
  elements.forEach((element, index) =>
    truncateText(element, originalTexts[index])
  );
}

// Inicializa o array originalTexts com os textos originais
document.addEventListener("DOMContentLoaded", function () {
  let elements = document.querySelectorAll(
    "#cases .card .card-text p:last-child"
  );
  elements.forEach((element) => originalTexts.push(element.innerHTML));
  handleResize(); // Chama handleResize uma vez após a inicialização para truncação inicial
});


let slideIndex = 1;

function showSlide(n) {
    const slides = document.querySelectorAll("#feedbacks .slide");
    const dots = document.querySelectorAll("#feedbacks .dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Remover a classe 'selected' de todos os slides
    slides.forEach(slide => {
        slide.classList.remove("selected");
        slide.style.order = "0";
    });

    // Adicionar a classe 'selected' ao slide atual e definir a ordem dos slides
    slides[slideIndex - 1].classList.add("selected");
    slides[slideIndex - 1].style.order = "2";

    const prevIndex = (slideIndex - 2 + slides.length) % slides.length;
    const nextIndex = slideIndex % slides.length;

    slides[prevIndex].style.order = "1"; // Imagem anterior
    slides[nextIndex].style.order = "3"; // Próxima imagem

    // Atualizar os dots
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex - 1].classList.add("active");

    // Atualizar a classe 'next-slide' para o próximo slide
    updateNextSlide();
}

function updateNextSlide() {
    const slides = document.querySelectorAll("#feedbacks .slide");
    const nextIndex = (slideIndex % slides.length);
    const nextSlide = slides[nextIndex];

    // Remover a classe 'next-slide' de todos os slides
    slides.forEach(slide => {
        slide.classList.remove("next-slide");
    });

    // Adicionar a classe 'next-slide' ao próximo slide
    nextSlide.classList.add("next-slide");
}


function moveSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll("#feedbacks .slide");
    const sliderDots = document.querySelector("#feedbacks .slider-dots");

    // Cria os dots e adiciona os listeners
    slides.forEach((slide, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            currentSlide(index + 1);
        });
        sliderDots.appendChild(dot);

        // Adiciona um event listener para mudar o slide quando um card for clicado
        slide.addEventListener("click", () => {
            currentSlide(index + 1);
        });
    });

    showSlide(slideIndex);
});
