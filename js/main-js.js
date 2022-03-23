/* -- ----------------- team section click btn ---------*/
/* -- ----------------- click btn one------ ---------*/



/*------------------------ navigation menu--------- */

(() =>{

  const hamburgerBtn = document.querySelector(".hamburger-btn"),
  navMenu =document.querySelector(".nav-menu"),
  closeNavBtn = navMenu.querySelector(".close-nav-menu");

  hamburgerBtn.addEventListener("click", showNavMenu);
  closeNavBtn.addEventListener("click", hideNavMenu);

  function showNavMenu(){
    navMenu.classList.add("open");
  }
  function hideNavMenu(){
    navMenu.classList.remove("open");
    fadeOutEffect();
  }
  function fadeOutEffect(){
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() =>{
      document.querySelector(".fade-out-effect").classList.remove("active");
    },300)
  }

  
  // attach an evenr handler to document
  document.addEventListener("click", (event) =>{
    if(event.target.classList.contains('link-item')){
      // make sure event.target.hash has a value before overridding default behavior
      if(event.target.hash !==""){
        // prevent default anchor click behavior
        event.preventDefault();
        const hash = event.target.hash;
        // deactivate existing active 'section'
        document.querySelector(".section.active").classList.add(".hide")
        document.querySelector(".section.active").classList.remove(".active")
        // activate new 'section'
        document.querySelector(hash).classList.add("active");
        document.querySelector(hash).classList.remove("hide");
        // deactivate existing action navigation menu 'link-item'
        navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
        navMenu.querySelector(".active").classList.remove("active","inner-shadow");
        // if clicked 'link-item is contained within the navigation menu'
        if(navMenu.classList.contains("open")){
          // activate new navigation menu 'link-item'
          event.target.classList.add("active","inner-shadow");
          event.target.classList.add("outer-shadow","hover-in-shadow");
          // hide navigation menu
          hideNavMenu();
        }
        else{
          let navItems = navMenu.querySelectorAll(".link-item");
          navItems.forEach.forEach((item) =>{
            if(hash === item.hash){
              // activate new navigation menu 'link-item'
              event.target.classList.add("active","inner-shadow");
              event.target.classList.add("outer-shadow","hover-in-shadow");
            }
          })
          fadeOutEffect();
        }
        // add hash (#) to url
        window.location.hash = hash;
      }
    }
    
  })

})();



/* --------------------- auto type in js ---------------*/
var typed = new Typed('.type', {

    strings: ['Developer', 'Freelencer', 'Designer '],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });



  var typed = new Typed('.types', {

    strings: ['Web Developer', 'Freelencer', 'Web Designer '],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });







/*----------------------------- portfolio popup ------------------*/
/*
(() =>{

     porfolioItemsContainer = document.querySelector(".portfolio-items"),   
     porfolioItems = document.querySelectorAll(".portfolio-item"),
     popup = document.querySelector(".porfolio-popup"),
     nextBtn = popup.querySelector(".pp-next"),
     closeBtn = popup.querySelector(".pp-close"),
     projectDetailsContainer = popup.querySelector(".pp-details"),
     projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
     let itemIndex, slideIndex, screensots;

     porfolioItemsContainer.addEventListener("click", (event) =>{
        if(event.target.closest(".porfolio-item-inner")){
           const porfolioItem = event.target.closest(".porfolio-item-inner").parentElement;
           console.log(porfolioItem);
        }
     })



}) ();
*/
/*
(() =>{

  const popup = document.querySelector(".portfolio-popup"),
  prevBtn = popup.querySelector(".pp-prev"),
  nextBtn = popup.querySelector(".pp-next"),
  closeBtn = popup.querySelector(".pp-close"),
  projectDetailsContainer = popup.querySelector(".pp-details"),
  projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
  let itemIndex, slideIndex, screensots;

  teamSectionContainer.addEventListener("click", (Event) =>{
    if(Event.target.closest(".card")){
      const teamSection =
      screensots = screensots.split(",");
      if(screensots.length === 1){
        prevBtn.style.display="none";
        nextBtn.style.display="none";
      }
      else{
        prevBtn.style.display="block";
        nextBtn.style.display="block";
      }
      sliderIndex = 0;
      popupToggler();
      popupSlidershow();
    }
  })

  Function popupTogger(){
    popup.classList.togger("open");
  }


})();

*/





/*
(() =>{

  const sections = document.querySelectorAll(".section");
  sections.forEach((section) =>{
    if(!section.classList.contains("active")){
      section.classList.add("hide");
    }
  })

})();
*/