let servOutstaff = document.querySelector('.service-inner-outstaff');
let servToggleOutstaff = document.querySelector('.services-sutitle2');


servToggleOutstaff.addEventListener('click', function() {
  if (servOutstaff.classList.contains('closed-outstaff')) {
    servOutstaff.classList.remove('closed-outstaff');
    servOutstaff.classList.add('opened-outstaff');
  } else {
    servOutstaff.classList.add('closed-outstaff');
    servOutstaff.classList.remove('opened-outstaff');
  }
});


let servDdt = document.querySelector('.service-inner-ddt');
let servToggleDdt = document.querySelector('.services-sutitle3');


servToggleDdt.addEventListener('click', function() {
  if (servDdt.classList.contains('closed-ddt')) {
    servDdt.classList.remove('closed-ddt');
    servDdt.classList.add('opened-ddt');
  } else {
    servDdt.classList.add('closed-ddt');
    servDdt.classList.remove('opened-ddt');
  }
});