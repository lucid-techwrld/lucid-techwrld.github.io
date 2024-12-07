/*const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry)=> {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } //else {
     // entry.target.classList.remove('show')
    //} 
  })
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
*/

window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.hidden');
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
});


const blinker = document.getElementById("blinker");

function showBlinker() {
  blinker.textContent = '_';
  setTimeout(() => {
    blinker.textContent = '';
  }, 500);
}

setInterval(showBlinker, 1000);

function updateHeaderHeight() {
  const header = document.querySelector('header');
  const headerHeight = header.offsetHeight; // Get the actual height of the header
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`); // Update the CSS variable
}

// Call the function on load and on resize
window.addEventListener('load', updateHeaderHeight);
window.addEventListener('resize', updateHeaderHeight);
