let ddtTitle = document.querySelector('.ddtitle');
let ddtToggleTitle = document.querySelector('.ddt-faq-subtitle');

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
let ddtToggleTitle1 = document.querySelector('.ddt-faq-subtitle1');

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
let ddtToggleTitle2 = document.querySelector('.ddt-faq-subtitle2');

ddtToggleTitle2.addEventListener('click', function() {
  if (ddtTitle2.classList.contains('ddt-nonclass2')) {
    ddtTitle2.classList.remove('ddt-nonclass2');
    ddtTitle2.classList.add('ddt-class2');
  } else {
    ddtTitle2.classList.add('ddt-nonclass2');
    ddtTitle2.classList.remove('ddt-class2')
  }
}) 

let ddtTitle3 = document.querySelector('.ddtitle3');
let ddtToggleTitle3 = document.querySelector('.ddt-faq-subtitle3');

ddtToggleTitle3.addEventListener('click', function() {
  if (ddtTitle3.classList.contains('ddt-nonclass3')) {
    ddtTitle3.classList.remove('ddt-nonclass3');
    ddtTitle3.classList.add('ddt-class3');
  } else {
    ddtTitle3.classList.add('ddt-nonclass3');
    ddtTitle3.classList.remove('ddt-class3')
  }
}) 
