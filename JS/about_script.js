console.log("his is the about site");


const story = document.querySelector("section > section.ourstory > h2");
const conductor = document.querySelector("section > section.conductor > h2");
const board = document.querySelector("section > section.board > h2");
const future = document.querySelector("section > section.future > h2");

const navUl = document.querySelector(".undermenu");
const active = document.querySelector(".active");

const imgs = document.querySelectorAll(".margin img");
console.log(imgs);

imgs.forEach(element => {

    element.addEventListener("click", function() {

        if (element.className == "") {
        element.className = "open";
        document.querySelector("body").style.backgroundColor = "grey";
    
    }

    else {
            element.classList = "";
            document.querySelector("body").style.backgroundColor = "rgb(251, 248, 248)";
            element.style.cursor = "pointer";
    }
    });
});






var mediaQuery = window.matchMedia("(min-width: 751px)");
window.addEventListener("scroll", () => {
    scrolling(mediaQuery);
    scrollFunction();
});


function isInViewport (item) {
    const str = item.getBoundingClientRect();
    return (
        str.top >= 0 &&
        str.left >= 0 &&
        str.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        str.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function scrolling(m) {
 
    if (m.matches) { // If media query matches
  
        document.addEventListener('scroll', function () {
            
        let storyTitle = document.querySelector(".undermenu > div > ul > li:nth-child(1)");
        let conductorTitle = document.querySelector(".undermenu > div > ul > li:nth-child(2)");
        let boardTitle = document.querySelector(".undermenu > div > ul > li:nth-child(3)");
        let futureTitle = document.querySelector(".undermenu > div > ul > li:nth-child(4)");

        const isStory = isInViewport(story) ?
        storyTitle.classList.add("active") :
        storyTitle.classList.remove("active")

        const isConductor = isInViewport(conductor) ?
        conductorTitle.classList.add("active") :
        conductorTitle.classList.remove("active")

        const isBoard = isInViewport(board) ?
        boardTitle.classList.add("active") :
        boardTitle.classList.remove("active")

        const isFuture = isInViewport(future) ?
        futureTitle.classList.add("active") :
        futureTitle.classList.remove("active")
        }, {
        passive: true
        });

    }
}


// Det burde fungere men den refersher før den rekker gjøre det..

var mediaQuery700 = window.matchMedia("(max-width: 749px)");

mediaQuery700.addEventListener("change", scrollTo(mediaQuery700));

function scrollTo (m) {

  if (m.matches) {

    const clickLI = document.querySelectorAll(".undermenu > div > ul > li");
    console.log(clickLI);
    

    for (let [index, item] of clickLI.entries()) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToSection(index);
      })

    }
    }
  }



function scrollToSection(number) {

  if (number === 0) {
    let header = document.querySelector("section.ourstory > h2");
    header.scrollIntoView({ block: "center" ,  behavior: 'smooth' });
    
  }

  if (number === 1) {
    let header = document.querySelector("section.conductor > h2");
    header.scrollIntoView({ block: "center" ,  behavior: 'smooth' });
  }

  if (number === 2) {
    let header = document.querySelector("section.board > h2");
    header.scrollIntoView({ block: "center" ,  behavior: 'smooth' });
  }

  if (number === 3) {
    let header = document.querySelector("section.conductor > h2");
    header.scrollIntoView({ block: "center" ,  behavior: 'smooth' });
  }

}




/*
const navUl = document.querySelector(".undermenu");
const active = document.querySelector(".active");


var mediaQuery = window.matchMedia("(max-width: 700px)");
console.log(mediaQuery);

function myFunction(m) {
  if (m.matches) { // If media query matches

    navUl.style.display = "none";
    active.style.position = "fixed";
    active.style.left = "0";
    active.style.top = "10%";
    active.style.display = "inline-block";
  }


else { // If media query matches
    navUl.style.display = "flex";
}
}


mediaQuery.addEventListener("change", myFunction) // Attach listener function on state changes
myFunction(mediaQuery) // Call listener function at run time

*/