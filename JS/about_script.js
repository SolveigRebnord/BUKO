console.log("his is the about site");


const story = document.querySelector("section > section.ourstory > h2");
const conductor = document.querySelector("section > section.conductor > h2");
const board = document.querySelector("section > section.board > h2");
const future = document.querySelector("section > section.future > h2");

const navUl = document.querySelector(".undermenu");
const active = document.querySelector(".active");





function isInViewport (item) {
    const str = item.getBoundingClientRect();
    return (
        str.top >= 0 &&
        str.left >= 0 &&
        str.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        str.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



function scrolling() {

    var mediaQuery = window.matchMedia("(min-width: 750px)");
    window.addEventListener("change", scrollBig);
  
  function scrollBig(m) {
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

mediaQuery.addEventListener("change", scrollBig); //
    scrollBig(mediaQuery);
}


const storyTitle = document.querySelector(".undermenu > div > ul > li:nth-child(1)");
storyTitle.addEventListener("click", function() {
    let scrollTo = document.querySelector("section.ourstory > h2");
    scrollTo.scrollIntoView({ block: 'start',  behavior: 'smooth' });
});
const conductorTitle = document.querySelector(".undermenu > div > ul > li:nth-child(2)");
conductorTitle.addEventListener("click", function() {
    let scrollTo = document.querySelector("section.conductor");
    scrollTo.scrollIntoView({ block: 'start', inline: "nearest",  behavior: 'smooth' });
});
const boardTitle = document.querySelector(".undermenu > div > ul > li:nth-child(3)");
const futureTitle = document.querySelector(".undermenu > div > ul > li:nth-child(4)");


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