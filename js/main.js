let navMain = document.querySelector('.nav-list');
let navToggle = document.querySelector('.nav__toggle');


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav-closed')) {
    navMain.classList.remove('nav-closed');
    navMain.classList.add('nav-opened');
  } else {
    navMain.classList.add('nav-closed');
    navMain.classList.remove('nav-opened');
  }
});



let ddtList = document.querySelector('.ddt-faq-inner');
let ddtToggle = document.querySelector('.ddt-faq-subtitle');


ddtToggle.addEventListener('click', function() {
  if (ddtList.classList.contains('faq-closed')) {
    ddtList.classList.remove('faq-closed');
    ddtList.classList.add('faq-opened');
  } else {
    ddtList.classList.add('faq-closed');
    ddtList.classList.remove('faq-opened');
  }
});

let ddtListOne = document.querySelector('.ddt-faq-inner1');
let ddtToggleOne = document.querySelector('.ddt-faq-subtitle1');


ddtToggleOne.addEventListener('click', function() {
  if (ddtListOne.classList.contains('faq-closed1')) {
    ddtListOne.classList.remove('faq-closed1');
    ddtListOne.classList.add('faq-opened1');
  } else {
    ddtListOne.classList.add('faq-closed1');
    ddtListOne.classList.remove('faq-opened1');
  }
});

let ddtListTwo = document.querySelector('.ddt-faq-inner2');
let ddtToggleTwo = document.querySelector('.ddt-faq-subtitle2');


ddtToggleTwo.addEventListener('click', function() {
  if (ddtListTwo.classList.contains('faq-closed2')) {
    ddtListTwo.classList.remove('faq-closed2');
    ddtListTwo.classList.add('faq-opened2');
  } else {
    ddtListTwo.classList.add('faq-closed2');
    ddtListTwo.classList.remove('faq-opened2');
  }
});

let ddtListThree = document.querySelector('.ddt-faq-inner3');
let ddtToggleThree = document.querySelector('.ddt-faq-subtitle3');


ddtToggleThree.addEventListener('click', function() {
  if (ddtListThree.classList.contains('faq-closed3')) {
    ddtListThree.classList.remove('faq-closed3');
    ddtListThree.classList.add('faq-opened3');
  } else {
    ddtListThree.classList.add('faq-closed3');
    ddtListThree.classList.remove('faq-opened3');
  }
});
