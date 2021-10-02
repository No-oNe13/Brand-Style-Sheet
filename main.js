

 const menuSlide = () => {
   const burger = document.querySelector('.burger');

   const nav = document.querySelector('.links');

   const navLinks = document.querySelectorAll('.links li');

   burger.addEventListener('click', () => {

     nav.classList.toggle ('.nav-active');
  
      navLinks.forEach((link, index) => {
     
          if (link.style.animation){
              link.style.animation = '';
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.3}s`;
          }
      });

          burger.classList.toggle ('toggle');

   });

 }

menuSlide();



