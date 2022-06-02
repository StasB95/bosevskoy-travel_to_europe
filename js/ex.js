// var spotlight = document.querySelector('.spotlight');
// var spotlightSize = 'transparent 300px, rgba(0, 0, 0, 0.5) 200px)';
        
// window.addEventListener("DOMContentLoaded", () => {
//   window.addEventListener('mousemove', e => updateSpotlight(e));

//   function updateSpotlight(e) {
//     spotlight.style.backgroundImage = `url(../img/main-screen-background.png)(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
//     }
// });

// document.getElementById("horizontal-scroller")
//   .addEventListener('wheel', function(event) {
//     if (event.deltaMode == event.DOM_DELTA_PIXEL) {
//       var modifier = 1;
//       // иные режимы возможны в Firefox
//     } else if (event.deltaMode == event.DOM_DELTA_LINE) {
//       var modifier = parseInt(getComputedStyle(this).lineHeight);
//     } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
//       var modifier = this.clientHeight;
//     }
//     if (event.deltaY != 0) {
//       // замена вертикальной прокрутки горизонтальной
//       this.scrollLeft += modifier * event.deltaY;
//       event.preventDefault();
//     }
//   });