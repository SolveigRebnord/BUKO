console.log("bip this is the all js");

const searchInputBig = document.getElementById("searchfullsize");
const search = document.querySelector("header > nav > ul > li:last-of-type");

const searchInputSmall = document.getElementById("searchsmallsize");
const searching = document.querySelector(".search");


search.addEventListener("click", function() {
  if (searchInputBig.style.display == "none") {
    searchInputBig.style.display = "inline-block";
  } 

  else {
    searchInputBig.style.display = "none";
  }
});

searching.addEventListener("click", function() {
  if (searchInputSmall.style.display == "none") {
    searchInputSmall.style.display = "inline-block";
  } 

  else {
    searchInputSmall.style.display = "none";
  }
});


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


window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  var mediaQuery = window.matchMedia("(max-width: 750px)");


function myFunction(m) {
  if (m.matches) { // If media query matches

      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.querySelector("header").style.backgroundColor = "var(--darkBrown)";
      } 
    
      else {
        document.querySelector("header").style.backgroundColor = "transparent";
      }
  }

  else {

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector("header > div > a > img").style.height = "50px";
      document.querySelector("header").style.padding = "1.5rem 2rem";
      document.querySelector("header").style.backgroundColor = "var(--darkBrown)";

    } 
    else {
      document.querySelector("header > div > a > img").style.height = "80px";
      document.querySelector("header").style.padding = "2rem";
      document.querySelector("header").style.backgroundColor = "transparent";
    
    }
  }
}

mediaQuery.addEventListener("change", myFunction) // Attach listener function on state changes
myFunction(mediaQuery) // Call listener function at run time

}

//-------------------------------------------------------------------------------

const topButton = document.querySelector(".topbutton");


topButton.addEventListener("click", scrollToTop);

function scrollToTop() {
  const scrollTo = document.querySelector(".underhero");
scrollTo.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}


//<a href="event.html?id=${post.id}">Read more about me!</a> dette funker ikke, må være en slags redirecter isåfall