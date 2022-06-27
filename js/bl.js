
let navMain = document.querySelector('.nav__toggle');
let navToggle = document.querySelector('.nav__toggle');


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('burger_close')) {
    navMain.classList.remove('burger_close');
    navMain.classList.add('burger_active');
  } else {
    navMain.classList.add('burger_close');
    navMain.classList.remove('burger_active');
  }
});