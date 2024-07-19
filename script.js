let tl = gsap.timeline();

tl.to(".nav__logo img", {duration: 1, x: 100})   // Move the first box 100px to the right
  .to(".nav__logo img", {duration: 1, y: 100, delay: -0.2}) // Move the first box 100px down after a delay
  .to(".nav__logo img", {duration: 1, rotation: 360, delay: -0.2}) // Rotate the first box 360 degrees
  .to(".nav__logo img", {duration: 1, x: 0, y: 0, rotation: 0, delay: -0.2}); // Reset the first box to its original position

  tl.from(".h",  {
      duration: 1,
       y: -80,
      delay:-0.5
      });  

  tl.from(".s",  {
      duration: 1,
       y: -80, 
       delay:-0.5
      });

  tl.from(".m", {
    duration: 1,
    y: -80,
    delay:-0.5
  }) ;

  tl.from(".e",{ 
    duration: 1,
    y: -80,
    delay:-0.5
  });

  tl.from(".c", {
      duration: 1,
      y: -80,
      delay:-0.5
    });



const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});


