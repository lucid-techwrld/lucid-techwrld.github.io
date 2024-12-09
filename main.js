window.onerror = function(message, source, lineno, colno, error) {
  console.error("Global error caught:", message);
  return true;
};

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

  const img = document.querySelector('.myImage');
  if (window.scrollY > 10) {
    img.classList.add('animate-img')
  } else {
    img.classList.remove('animate-img')
  }
  //console.log(img)
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


const icon = document.querySelector('.fa')
const navigation = document.querySelector('.navigation')
const navButton = document.querySelector('.menu-icon');

let show = true;
navButton.addEventListener('click', () => {
  if (show) {
    navigation.style.display = "flex";
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times')
    updateHeaderHeight()
  } else {
    navigation.style.display = "none"
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars')
    icon.style.color = '#fff'
    updateHeaderHeight()
  }
  show = !show;
})

function showToast() {
  const toast = document.querySelector(".toast-btn");
  const toastContainer = document.querySelector(".toast-container");
  toast.addEventListener('click', () => {
    toastContainer.style.display = "none"
  })
  setTimeout(() => {
    toastContainer.style.display = "none"
  }, 10000)
}

showToast()


let toggle = true;
const toggleBtn = document.querySelector(".toggle-icon");
const root = document.documentElement;
toggleBtn.addEventListener('click', (e) => {
  e.target.style.color = "#fff"
  if (toggle) {
    e.target.classList.remove('lightmode');
    e.target.classList.remove('fa-moon')
    e.target.classList.add('darkmode');
    e.target.classList.add('fa-sun')
    root.style.setProperty('--background-color', '--primary-color');
    root.style.setProperty('--primary-color', '--dark-color');
  } else {
    e.target.classList.remove('darkmode');
    e.target.classList.remove('fa-sun')
    e.target.classList.add('lightmode');
    e.target.classList.add('fa-moon')
    root.style.setProperty('--background-color', 'hsla(0, 0%, 14%, 1)');
    root.style.setProperty('--primary-color', '#fff');
    
  }
  toggle = !toggle;
  //changeBackground()
})

const toTop = document.querySelector(".back-to-top");
toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})