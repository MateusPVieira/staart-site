// Array para armazenar os textos originais
var originalTexts = [];

function truncateText(element, originalText) {
  let width = window.innerWidth / 100;
  let truncated = originalText.substring(0, 15 * width) + "...";
  element.innerHTML = truncated;
}

function handleResize() {
  let elements = document.querySelectorAll("#cases .card .card-text p:last-child");
  elements.forEach((element, index) => truncateText(element, originalTexts[index]));
}

// Inicializa o array originalTexts com os textos originais
document.addEventListener("DOMContentLoaded", function() {
  let elements = document.querySelectorAll("#cases .card .card-text p:last-child");
  elements.forEach(element => originalTexts.push(element.innerHTML));
  handleResize(); // Chama handleResize uma vez após a inicialização para truncação inicial
});

// Adiciona um ouvinte de evento para redimensionamento da janela
window.addEventListener("resize", handleResize);


// Carousel
    
// function toggleState3() {
//   let galleryView = document.getElementById("galleryView")
//   let tilesView = document.getElementById("tilesView")
//   let outer = document.getElementById("outer3");
//   let slider = document.getElementById("slider3");
//   let tilesContainer = document.getElementById("tilesContainer");
//   if (slider.classList.contains("active")) {
//     slider.classList.remove("active");
//     outer.classList.remove("outerActive");
//     galleryView.style.display = "flex";
//     tilesView.style.display = "none";
    
//     while (tilesContainer.hasChildNodes()) {
//       tilesContainer.removeChild(tilesContainer.firstChild)
//       }  
//   } else {
//     slider.classList.add("active");
//     outer.classList.add("outerActive");
//     galleryView.style.display = "none";
//     tilesView.style.display = "flex";
     
//     for (let i = 0; i < imgObject.length - 1; i++) {
//       let tileItem = document.createElement("div");
//       tileItem.classList.add("tileItem");
//       tileItem.style.background =  "url(" + imgObject[i] + ")";
//       tileItem.style.backgroundSize = "contain";  
//       tilesContainer.appendChild(tileItem);      
//     }
//   };
// }

// let imgObject = [
//   "https://static.todamateria.com.br/upload/fa/st/fastfoodmeals.jpg",  
//   "https://static.todamateria.com.br/upload/fa/st/fastfoodmeals.jpg",
//   "https://static.todamateria.com.br/upload/fa/st/fastfoodmeals.jpg",
//   "https://static.todamateria.com.br/upload/fa/st/fastfoodmeals.jpg",
//   "https://static.todamateria.com.br/upload/fa/st/fastfoodmeals.jpg",
//   "https://static.todamateria.com.br/upload/fa/st/fastfoodmeals.jpg",
//   "https://static.todamateria.com.br/upload/fa/st/fastfoodmeals.jpg",
//   "https://static.todamateria.com.br/upload/fa/st/fastfoodmeals.jpg",
//   "https://static.todamateria.com.br/upload/fa/st/fastfoodmeals.jpg",
//   "https://static.todamateria.com.br/upload/fa/st/fastfoodmeals.jpg",
// ];

// let mainImg = 0;
// let prevImg = imgObject.length - 1;
// let nextImg = 1;

// function loadGallery() {

//   let mainView = document.getElementById("mainView");
//   mainView.style.background = "url(" + imgObject[mainImg] + ")";

//   let leftView = document.getElementById("leftView");
//   leftView.style.background = "url(" + imgObject[prevImg] + ")";
  
//   let rightView = document.getElementById("rightView");
//   rightView.style.background = "url(" + imgObject[nextImg] + ")";
  
//   let linkTag = document.getElementById("linkTag")
//   linkTag.href = imgObject[mainImg];

// };

// function scrollRight() {
  
//   prevImg = mainImg;
//   mainImg = nextImg;
//   if (nextImg >= (imgObject.length -1)) {
//     nextImg = 0;
//   } else {
//     nextImg++;
//   }; 
//   loadGallery();
// };

// function scrollLeft() {
//   nextImg = mainImg
//   mainImg = prevImg;
   
//   if (prevImg === 0) {
//     prevImg = imgObject.length - 1;
//   } else {
//     prevImg--;
//   };
//   loadGallery();
// };

// document.getElementById("navRight").addEventListener("click", scrollRight);
// document.getElementById("navLeft").addEventListener("click", scrollLeft);
// document.getElementById("rightView").addEventListener("click", scrollRight);
// document.getElementById("leftView").addEventListener("click", scrollLeft);
// document.addEventListener('keyup',function(e){
//     if (e.keyCode === 37) {
//     scrollLeft();
//   } else if(e.keyCode === 39) {
//     scrollRight();
//   }
// });

// loadGallery();



