// Toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');

  const mobileMenu = document.querySelector('.mobile-menu-items');

  toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});

// Change navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (scrollY !== 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
