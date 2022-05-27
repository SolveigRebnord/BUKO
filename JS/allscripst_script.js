console.log("bip this is the all js");



const burgerMenu = document.getElementById("menu");
const overlay = document.querySelector(".overlay");

burgerMenu.addEventListener("click", function() {
    if (overlay.style.visibility == "hidden") {
        overlay.style.visibility = "visible";
        overlay.style.opacity = 1; 
    } 


    else {
      overlay.style.visibility = "hidden";
      overlay.style.opacity = 0;
    }
});



//------------------------------------------------------------------

var mediaQuery700 = window.matchMedia("(max-width: 750px)");
var mediaQuery600 = window.matchMedia("(max-width: 600px)");

var h1 = document.querySelector("[h1]");


window.addEventListener("change", alterText);

function alterText (m) {
  if (m.matches) {
    h1.innerHTML = h1;
  }

  else {
    h1.innerHTML = " ";

  }
}

mediaQuery600.addEventListener("change", alterText) // Attach listener function on state changes
alterText(mediaQuery600)





window.onscroll = function() {scrollFunction()};



function scrollFunction() {




function myFunction(m) {
  if (m.matches) { // If media query matches


      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.querySelector("header").style.backgroundColor = "#917669";
      } 
    
      else {
        document.querySelector("header").style.backgroundColor = "transparent";
       
      }
  }

  else {


    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector("header > div > a > img").style.height = "50px";
      document.querySelector("header").style.padding = "1.5rem 2rem";
      document.querySelector("header").style.backgroundColor = "#917669";
    

    } 
    else {
      document.querySelector("header > div > a > img").style.height = "80px";
      document.querySelector("header").style.padding = "2rem";
      document.querySelector("header").style.backgroundColor = "transparent";
    
    }
  }
}

mediaQuery700.addEventListener("change", myFunction) // Attach listener function on state changes
myFunction(mediaQuery700) // Call listener function at run time

}