
console.log("hello from the about side");

const burgerMenu = document.getElementById("menu");
const overlay = document.querySelector(".overlay");

burgerMenu.addEventListener("click", function() {
    if (overlay.style.display === "none") {
      overlay.style.transition = "display 2s ease-in"
        overlay.style.display = "inline-block";
        
        
    } else {
      overlay.style.display = "none";
    }
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header > div > a > img").style.height = "30px";
    document.querySelector("header").style.padding = "0.5rem 0.5rem 0.5rem 2rem";
    document.querySelector("header").style.width = "98%";

  } else {
    document.querySelector("header > div > a > img").style.height = "80px";
    document.querySelector("header").style.padding = "2rem";
    document.querySelector("header").style.width = "96%";
  }
}


const story = document.querySelector("section > section.ourstory > h2");
const conductor = document.querySelector("section > section.conductor > h2");
const board = document.querySelector("section > section.board > h2");



function isInViewport (item) {
    const str = item.getBoundingClientRect();
    return (
        str.top >= 0 &&
        str.left >= 0 &&
        str.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        str.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}






document.addEventListener('scroll', function () {
    let storyTitle = document.querySelector("nav > div > ul > li:nth-child(1)");
    let conductorTitle = document.querySelector("nav > div > ul > li:nth-child(2)");
    let boardTitle = document.querySelector("nav > div > ul > li:nth-child(3)");

    const isStory = isInViewport(story) ?
    storyTitle.classList.add("active") :
    storyTitle.classList.remove("active")

    const isConductor = isInViewport(conductor) ?
    conductorTitle.classList.add("active") :
    conductorTitle.classList.remove("active")

    const isBoard = isInViewport(board) ?
    boardTitle.classList.add("active") :
    boardTitle.classList.remove("active")

}, {
    passive: true
});


/*
const options = {
    rootMargin: '0px',
    threshold: 1.0
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        let noeomg = document.querySelector("nav > div > ul > li.theboardli");

      console.log(entry.intersectionRatio > 0 ? 'visible' : 'invisible');
      if (entry.intersectionRatio > 0) {
      noeomg.style.backgroundColor = "grey";
      }

      if (entry.intersectionRatio < 0){
          noeomg.style.backgroundColor = "white";
      }
    });
  }, options);
  
  const element = document.querySelector("section > section.board > h2");
  observer.observe(element);
  */