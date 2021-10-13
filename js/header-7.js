let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

let iconToggle = document.querySelector("icon-toggle");



const nav = document.querySelector("#my-nav")
    let lastScrollY = window.scrollY;


    window.addEventListener("scroll", () => {
      if (window.scrollY <= 80 ){

      }else if(lastScrollY < window.scrollY && !navWrapper.classList.contains("active")){
        nav.classList.add("nav--hidden");
      }else{
        nav.classList.remove("nav--hidden");
      }

      lastScrollY = window.scrollY;
    } );





navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
    
   

  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
    navClose.classList.remove("icon-hide")
  

  }
});


