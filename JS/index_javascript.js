console.log("heia, index");



var mediaQuery = window.matchMedia("(max-width: 600px)");
console.log(mediaQuery);

function myFunction(m) {
  if (m.matches) { // If media query matches
    document.body.style.backgroundColor = "aliceblue";

    const slider = document.querySelector('.outPut');
    const buttons = document.querySelector(".buttonsdiv")
    buttons.style.display = "none";

   
 


let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});



  }
  else { // If media query matches
    document.body.style.backgroundColor = "white";
  }

}


mediaQuery.addEventListener("change", myFunction) // Attach listener function on state changes
myFunction(mediaQuery) // Call listener function at run time






const burgerMenu = document.getElementById("menu");
const overlay = document.querySelector(".overlay");

burgerMenu.addEventListener("click", function() {
    if (overlay.style.display === "none") {
        overlay.style.display = "inline-block";
    } else {
      overlay.style.display = "none";
    }
});

//------------------------------------------------------------------

const scrollDown = document.getElementById("scrollDown");
const scrollTo = document.querySelector(".toDiv");

scrollDown.addEventListener("click", scrolling);

function scrolling() {
  const scrollTo = document.querySelector(".toDiv");
scrollTo.scrollIntoView({behaviour: "smooth"});
}

var myArray = {};




const outPutKarusell = document.querySelector(".karusell");
const ourList = document.querySelector(".outPut");



async function fetchData(){
  const response = await fetch ("https://www.sunroad.no/exam/wp-json/wp/v2/posts?_embed&per_page=30")
  const data = await response.json();
  return data;
}

fetchData().then(data => {
  console.log(data);
  let afterClass = listData(data);
  console.log(afterClass);
  slides = document.getElementsByClassName("divs");
  slides[0].className += (" active");





  showSlides(slideIndex);

})
.catch((error) => {
  console.error('Error:', error);
});


function listData (array) {

  console.log(array);
  let theArray = "";

 
  for (let item of array) {

     
    let indexNumber = item.content.rendered.indexOf('"https')
    console.log(indexNumber);
    let lastIndexNumber = item.content.rendered.indexOf(' alt=')
    console.log(lastIndexNumber);
    let newString = item.content.rendered.slice(indexNumber, lastIndexNumber);
    console.log(newString);


    var theLink = "";
    if (item.tags == 37) {
       theLink = `<a href="portfolio.html">See more events like this</a>`;
    }  

    else if (item.tags == 38) {
         theLink = `<a href="members.html">Read more about our members</a>`;
    }


    theArray += `<div class="divs">
        <img src=${newString}>
    <h2>${item.title.rendered}</h2>
    ${item.excerpt.rendered}
    ${theLink}
    </div>`

 
  }
  console.log(theArray);
  
  ourList.innerHTML = theArray;

}



const nextButton = document.querySelector(".next");

const out1 = document.querySelector(".index1");
const out2 = document.querySelector(".index2");
const out3 = document.querySelector(".index3");
const out4 = document.querySelector(".index4");


var slideIndex = 1;

slides = document.getElementsByClassName("divs");

const slide1 = slides;
const slide2 = slides[1];
const slide3 = slides[2];
const slide4 = slides[3];

console.log(slide1);

slide1.addEventListener("click", currentSlide(1));
slide2.addEventListener("click", currentSlide(2));

function plusSlides(n) {
  showSlides(slideIndex += n);
}



function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  
  slides = document.getElementsByClassName("divs");


 console.log(slides);
 if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  
  for (i = 0; i < slides.length; i++) {
   
    slides[i].className = slides[i].className.replace("divs active", "divs");

  }
  

  
  slides[slideIndex-1].className += " active";
  slides[slideIndex-1].animate(
    [
   
      {
        transform: "translateY(5%)",
        opacity: 0
      },
      {
        transform: "translateY(5%)",
        opacity: 1
      }
    ],
    { duration: 600, easing: "ease-in-out", fill: "forwards"}
  );
};
  




/*


function changeList(liste) {
console.log(liste);

let theList = liste;
let removedPart = theList.shift();
  //console.log(removedPart);
  //console.log(firstArr);

  let middleArr = theList;
  //console.log(middleArr);
  let secondPart = middleArr.push(removedPart);
  //console.log(middleArr);
  let secondArr = middleArr;
  //console.log(secondArr);
  secondArr = liste;
console.log(liste);
}
*/









/*
    if (n > slides.length) {theIndex = 1}
    if (n < 1) {theIndex = slides.length}

    slides[0].className = "nr1";
    console.log(slides[0]);
    slides[1].className = "nr2"
    console.log(slides[1]);
    slides[2].className = "nr3";
    console.log(slides[2]);
   
      for (i = 0; i < slides.length; i++) {
        //slides[i].style.backgroundColor = "red";
      }

      console.log(theIndex);

   
   */



/*    if (theIndex == 1) { // aka index 0, aother cool title.  cool title about blir da farget! (den etter i rekken)
        //slides[0].style.backgroundColor = "green";
        console.log(slides[theIndex]);
      //console.log(slides);
        slides[0].className = slides[0].className.replace("nr2", "nr1"); //tror denne ikke dennde funker før jeg får den syncen til å funk
        slides[1].className = slides[1].className.replace("nr3", "nr2");
        slides[2].className = slides[2].className.replace("nr1", "nr3");

      }

      else if (theIndex == 2) {
        //slides[1].style.backgroundColor = "green";
        slides[0].className = slides[0].className.replace("nr1", "nr3");
        slides[1].className = slides[1].className.replace("nr2", "nr1");
        slides[2].className = slides[2].className.replace("nr3", "nr2");
      }

      else if (theIndex == 3) {
        //slides[2].style.backgroundColor = "green";
        slides[0].className = slides[0].className.replace("nr3", "nr2");
        slides[1].className = slides[1].className.replace("nr1", "nr3");
        slides[2].className = slides[2].className.replace("nr2", "nr1");
      }     
    */


/*
  var arr = [];
  arr = [...slides];
  console.log(arr);
 
console.log(slideIndex);

   //DETTE ENDRER ARRAY

   for (let item of arr) {


let outPut = "";
outPut = "hei";

   if (slideIndex==2) {
    out1.innerHTML = outPut;
     console.log("0")
   }

   if (slideIndex==3) {
    out1.innerHTML = outPut;
     console.log("1")
  }

  if (slideIndex==4) {
    out2.innerHTML = outPut;
    console.log("2")
  }

 

   }

     */
/*
  let firstArr = arr;
  console.log(firstArr);

  let firstPart = firstArr.shift();
  let secondPart = firstArr.push(firstPart);
  let secondArr = firstArr;
  console.log(secondArr);


  firstPart = secondArr.shift();
  secondPart = secondArr.push(firstPart);
  let thirdArr = secondArr;
  console.log(thirdArr);
*/

  

    //knappen endrer slideIndex, dermed [slideIndex](innholdet) Da skal vi forskyve slides et hakk. Men divene fra HTML skal stå stille. Altså må knappen forskyve hele listen. Men altså nummeret på plassen i listen må bli til diven fra HTML. Trenger altså: 
    // - Portalen til HTMLdiven, som skal snakke med array plassen
    // En liste som ikke er fast til noen displaymåter, den fjerner første og legger den til sist, og dermed blir hele rekkefølgen forskjøvet. Men da har de en ny array plass
   
    
  
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/

  //console.log(arr);
  //console.log(arr[slideIndex]);

  
  //arr[slideIndex-1].style.display = "block"; //tror dette er fordi vi teller fra 1 i sliudeIndex DETTE ER DEN sSOM VISES



  //dots[slideIndex-1].className += " active";
 



//slides = HTML COLLECTION
//[slideIndex] = verdien inni slideIndex (altså <div class""......" innholdet vi lagde i listen)
//slideIndex = indexnummer. Begynner på 1



