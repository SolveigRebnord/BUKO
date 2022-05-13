console.log("heia, index");


const burgerMenu = document.getElementById("menu");
const overlay = document.querySelector(".overlay");

burgerMenu.addEventListener("click", function() {
    if (overlay.style.display === "none") {
        overlay.style.display = "inline-block";
    } else {
      overlay.style.display = "none";
    }
});



const nextB = document.getElementById("next");
const backB = document.getElementById("back");

const outPutKarusell = document.querySelector(".karusell");
const ourList = document.querySelector(".outPut");




fetch ("https://www.sunroad.no/exam/wp-json/wp/v2/posts?_embed&per_page=30")
.then(response => response.json())
.then(data => {
    console.log(data);
    listData(data);
})
.catch((error) => {
    console.error('Error:', error);
  });


function listData (array) {
  let myList = "";




  for (let item of array) {



    myList += `<div><p>${item.title.rendered}</p></div>`
  }
  ourList.innerHTML = myList;

  let divs = document.getElementsByClassName("mySlides");
//console.log(divs);
let firstChild = divs[0];
//console.log(firstChild);

  
}






let slideIndex = 1;
//console.log(slideIndex);
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {

  //const ventanu = new Promise(listData);
  //console.log(ventanu);

let out1 = document.querySelector(".index0");
let out2 = document.querySelector(".index1");
let out3 = document.querySelector(".index2");


  let i;
  let slides = document.querySelectorAll(".mySlides > div");
 console.log(slides)

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

   
      for (i = 0; i < slides.length; i++) {
        slides[i].style.backgroundColor = "red";
        slides[i].className = "default";
      }

      if (slideIndex == 1) { // aka index 0, aother cool title.  cool title about blir da farget! (den etter i rekken)
        slides[slideIndex-1].style.backgroundColor = "green";
      //console.log(slides);
        slides[[slideIndex-1]].className = slides[[slideIndex-1]].className.replace("default", "cool title");
      }

      else if (slideIndex == 2) {
        slides[slideIndex-1].style.backgroundColor = "green";
        slides[[slideIndex-1]].className = slides[[slideIndex-1]].className.replace("default", "nr2");
      }
      else if (slideIndex == 3) {
        slides[slideIndex-1].style.backgroundColor = "green";
        slides[[slideIndex-1]].className = slides[[slideIndex-1]].className.replace("default", "nr3");
      }     
    
   
    
   
   
}
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



