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


// let ddtTitle = document.querySelector('.ddtitle');
// let ddtToggleTitle = document.querySelector('.ddt-faq-subtitle');

// ddtToggleTitle.addEventListener('click', function() {
//   if (ddtTitle.classList.contains('ddt-nonclass')) {
//     ddtTitle.classList.remove('ddt-nonclass');
//     ddtTitle.classList.add('ddt-class');
//   } else {
//     ddtTitle.classList.add('ddt-nonclass');
//     ddtTitle.classList.remove('ddt-class')
//   }
// }) 

// let ddtTitle1 = document.querySelector('.ddtitle1');
// let ddtToggleTitle1 = document.querySelector('.ddt-faq-subtitle1');

// ddtToggleTitle1.addEventListener('click', function() {
//   if (ddtTitle1.classList.contains('ddt-nonclass1')) {
//     ddtTitle1.classList.remove('ddt-nonclass1');
//     ddtTitle1.classList.add('ddt-class1');
//   } else {
//     ddtTitle1.classList.add('ddt-nonclass1');
//     ddtTitle1.classList.remove('ddt-class1')
//   }
// }) 

// let ddtTitle2 = document.querySelector('.ddtitle2');
// let ddtToggleTitle2 = document.querySelector('.ddt-faq-subtitle2');

// ddtToggleTitle2.addEventListener('click', function() {
//   if (ddtTitle2.classList.contains('ddt-nonclass2')) {
//     ddtTitle2.classList.remove('ddt-nonclass2');
//     ddtTitle2.classList.add('ddt-class2');
//   } else {
//     ddtTitle2.classList.add('ddt-nonclass2');
//     ddtTitle2.classList.remove('ddt-class2')
//   }
// }) 

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




let ddtList = document.querySelector('.ddt-faq-inner');
let ddtToggle = document.querySelector('.outsource-faq-subtitle');


ddtToggle.addEventListener('click', function() {
  if (ddtList.classList.contains('faq-closed')) {
    ddtList.classList.remove('faq-closed');
    ddtList.classList.add('faq-outsource-opened');
  } else {
    ddtList.classList.add('faq-closed');
    ddtList.classList.remove('faq-outsource-opened');
  }
});

let ddtListOne = document.querySelector('.ddt-faq-inner1');
let ddtToggleOne = document.querySelector('.outsource-faq-subtitle1');


ddtToggleOne.addEventListener('click', function() {
  if (ddtListOne.classList.contains('faq-closed1')) {
    ddtListOne.classList.remove('faq-closed1');
    ddtListOne.classList.add('faq-outsource-opened1');
  } else {
    ddtListOne.classList.add('faq-closed1');
    ddtListOne.classList.remove('faq-outsource-opened1');
  }
});

let ddtListTwo = document.querySelector('.ddt-faq-inner2');
let ddtToggleTwo = document.querySelector('.outsource-faq-subtitle2');


ddtToggleTwo.addEventListener('click', function() {
  if (ddtListTwo.classList.contains('faq-closed2')) {
    ddtListTwo.classList.remove('faq-closed2');
    ddtListTwo.classList.add('faq-outsource-opened2');
  } else {
    ddtListTwo.classList.add('faq-closed2');
    ddtListTwo.classList.remove('faq-outsource-opened2');
  }
});


let ddtListThree = document.querySelector('.ddt-faq-inner3');
let ddtToggleThree = document.querySelector('.outsource-faq-subtitle3');


ddtToggleThree.addEventListener('click', function() {
  if (ddtListThree.classList.contains('faq-closed3')) {
    ddtListThree.classList.remove('faq-closed3');
    ddtListThree.classList.add('faq-outsource-opened3');
  } else {
    ddtListThree.classList.add('faq-closed3');
    ddtListThree.classList.remove('faq-outsource-opened3');
  }
});







let ddtTitle = document.querySelector('.ddtitle');
let ddtToggleTitle = document.querySelector('.outsource-faq-subtitle');

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
let ddtToggleTitle1 = document.querySelector('.outsource-faq-subtitle1');

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
let ddtToggleTitle2 = document.querySelector('.outsource-faq-subtitle2');

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
let ddtToggleTitle3 = document.querySelector('.outsource-faq-subtitle3');

ddtToggleTitle3.addEventListener('click', function() {
  if (ddtTitle3.classList.contains('ddt-nonclass3')) {
    ddtTitle3.classList.remove('ddt-nonclass3');
    ddtTitle3.classList.add('ddt-class3');
  } else {
    ddtTitle3.classList.add('ddt-nonclass3');
    ddtTitle3.classList.remove('ddt-class3')
  }
}) 


