console.log("bip this is the all js");


const burgerMenu = document.getElementById("menu");
const overlay = document.querySelector(".overlay");

burgerMenu.addEventListener("click", function() {
    if (overlay.style.visibility === "hidden") {
        overlay.style.visibility = "visible";
        overlay.style.transition = "0.01s ease-out";

        
        
    } else {
      overlay.style.visibility = "hidden";
    }
});



//------------------------------------------------------------------


window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  var mediaQuery = window.matchMedia("(max-width: 750px)");


function myFunction(m) {
  if (m.matches) { // If media query matches

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("header > div > a > img").style.height = "50px";
        document.querySelector("header").style.padding = "1rem 2rem";
      

      } 
    
  }

  else {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("header > div > a > img").style.height = "30px";
      document.querySelector("header").style.padding = "1rem 2rem 1rem 2rem";
    

    } 
    else {
      document.querySelector("header > div > a > img").style.height = "80px";
      document.querySelector("header").style.padding = "2rem";
    
    }
  }
}

mediaQuery.addEventListener("change", myFunction) // Attach listener function on state changes
myFunction(mediaQuery) // Call listener function at run time

}