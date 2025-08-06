// Navbar hamburger toggle
const hamburger=document.querySelector('.hamburger');
const navLinks=document.querySelector('.nav-links');

hamburger.addEventListener('click',()=>{
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Close nav when link clicked (mobile)
navLinks.querySelectorAll('a').forEach(link=>{
  link.addEventListener('click',()=>{
    if(navLinks.classList.contains('active')){
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
    }
  });
});