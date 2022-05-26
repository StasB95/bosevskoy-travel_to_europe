var spotlight = document.querySelector('.spotlight');
var spotlightSize = 'transparent 300px, rgba(0, 0, 0, 0.5) 200px)';
        
window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener('mousemove', e => updateSpotlight(e));

  function updateSpotlight(e) {
    spotlight.style.backgroundImage = `url(../img/main-screen-background.png)(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
    }
});