const items = document.querySelectorAll(".buttons");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


let ddtTitle = document.querySelector('.ddtitle');
let ddtToggleTitle = document.querySelector('.buttons');

ddtToggleTitle.addEventListener('click', function() {
  if (ddtTitle.classList.contains('ddt-nonclass')) {
    ddtTitle.classList.remove('ddt-nonclass');
    ddtTitle.classList.add('ddt-class');
  } else {
    ddtTitle.classList.add('ddt-nonclass');
    ddtTitle.classList.remove('ddt-class')
  }
}) 

let ddtTitle1 = document.querySelector('.ddtitle1');
let ddtToggleTitle1 = document.querySelector('.buttons1');

ddtToggleTitle1.addEventListener('click', function() {
  if (ddtTitle1.classList.contains('ddt-nonclass1')) {
    ddtTitle1.classList.remove('ddt-nonclass1');
    ddtTitle1.classList.add('ddt-class1');
  } else {
    ddtTitle1.classList.add('ddt-nonclass1');
    ddtTitle1.classList.remove('ddt-class1')
  }
}) 

let ddtTitle2 = document.querySelector('.ddtitle2');
let ddtToggleTitle2 = document.querySelector('.buttons2');

ddtToggleTitle2.addEventListener('click', function() {
  if (ddtTitle2.classList.contains('ddt-nonclass2')) {
    ddtTitle2.classList.remove('ddt-nonclass2');
    ddtTitle2.classList.add('ddt-class2');
  } else {
    ddtTitle2.classList.add('ddt-nonclass2');
    ddtTitle2.classList.remove('ddt-class2')
  }
}) 

let ddtArrow1 = document.querySelector('.ddt-arrow');
let ddtToggleArrow1 = document.querySelector('.buttons');

ddtToggleArrow1.addEventListener('click', function() {
  if (ddtArrow1.classList.contains('ddt-arrow-black')) {
    ddtArrow1.classList.remove('ddt-arrow-black');
    ddtArrow1.classList.add('ddt-arrow-blue');
  } else {
    ddtArrow1.classList.add('ddt-arrow-black');
    ddtArrow1.classList.remove('ddt-arrow-blue')
  }
}) 

let ddtArrow2 = document.querySelector('.ddt-arrow1');
let ddtToggleArrow2 = document.querySelector('.buttons1');

ddtToggleArrow2.addEventListener('click', function() {
  if (ddtArrow2.classList.contains('ddt-arrow-black')) {
    ddtArrow2.classList.remove('ddt-arrow-black');
    ddtArrow2.classList.add('ddt-arrow-blue');
  } else {
    ddtArrow2.classList.add('ddt-arrow-black');
    ddtArrow2.classList.remove('ddt-arrow-blue')
  }
}) 

let ddtArrow3 = document.querySelector('.ddt-arrow2');
let ddtToggleArrow3 = document.querySelector('.buttons2');

ddtToggleArrow3.addEventListener('click', function() {
  if (ddtArrow3.classList.contains('ddt-arrow-black')) {
    ddtArrow3.classList.remove('ddt-arrow-black');
    ddtArrow3.classList.add('ddt-arrow-blue');
  } else {
    ddtArrow3.classList.add('ddt-arrow-black');
    ddtArrow3.classList.remove('ddt-arrow-blue')
  }
}) 




// let ddtTitle3 = document.querySelector('.ddtitle3');
// let ddtToggleTitle3 = document.querySelector('.ddt-faq-subtitle3');

// ddtToggleTitle3.addEventListener('click', function() {
//   if (ddtTitle3.classList.contains('ddt-nonclass3')) {
//     ddtTitle3.classList.remove('ddt-nonclass3');
//     ddtTitle3.classList.add('ddt-class3');
//   } else {
//     ddtTitle3.classList.add('ddt-nonclass3');
//     ddtTitle3.classList.remove('ddt-class3')
//   }
// }) 


 dayElement = document.querySelector('.day');
//  day = document.querySelector('.ddt-img-wrapper');

document.addEventListener('mousemove', (e) => {
  dayElement.style.clipPath = `circle(200px at ${e.x / window.innerWidth * 100}% ${e.y / window.innerHeight * 100}%)`;
});


// `circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%`;

// let spotlight = document.querySelector('.ddt-spotlight');
// let spotlightSize = 'transparent 160px, url("../img/ddt.png")  200px)';

// window.addEventListener("DOMContentLoaded", () => {
//   window.addEventListener('mousemove', e => updateSpotlight(e));

//   function updateSpotlight(e) {
//     spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
// }
// });





