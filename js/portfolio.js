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

// animate - jac

document.querySelector('body')
    .addEventListener('mousemove', eyeball);
    
    
    function eyeball(event){
      var eye = document.querySelectorAll('.eye');
      var mouseX = event.clientX;
       var mouseY = event.clientY;

     
      eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
       

        if (mouseX <= x ){
          if (mouseY <= y ){
          eye.style.transform = "translate(-2px,-2px)";

}else{
  eye.style.transform = "translate(-2px,2px)";
}

}else{
  if (mouseY <= y ){
          eye.style.transform = "translate(0,-2px)";

}else{
  eye.style.transform = "translate(0,2px)";
}

}


      })
    }


// hide emoji

let face = document.querySelector(".face");
let snowflakes = document.querySelector(".snowflakes");

snowflakes.style.visibility = "hidden";

face.addEventListener('mouseenter', e => {
  snowflakes.style.visibility = "visible";
});
face.addEventListener('mouseleave', e => {
  snowflakes.style.visibility = "hidden";
});




