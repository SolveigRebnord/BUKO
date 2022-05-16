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
  //listData(data);
  myArray = data;
  showSlides(myArray);


})
.catch((error) => {
  console.error('Error:', error);
});


const nextButton = document.querySelector(".next");

const out1 = document.querySelector(".index1");
const out2 = document.querySelector(".index2");
const out3 = document.querySelector(".index3");



function showSlides(array) { //geeksinner

console.log(array);
  out1.innerHTML = array[0].title.rendered;
  out2.innerHTML = array[1].title.rendered;
  out3.innerHTML = array[2].title.rendered;


}




nextButton.addEventListener("click", nextSlide(showSlides));






function nextSlide(func) {

alert(func());
}

/*

  console.log(liste);
  //console.log(currentArray);
  let firstArr = liste;
  //console.log(firstArr);

  let removedPart = firstArr.shift();
  //console.log(removedPart);
  //console.log(firstArr);

  let middleArr = firstArr;
  //console.log(middleArr);
  let secondPart = middleArr.push(removedPart);
  //console.log(middleArr);
  let secondArr = middleArr;
  //console.log(secondArr);

  return secondArr;

}
*/






function listData (array) {

  let myList = [];

  for (let item of array) {

    myList.push(item.title.rendered);
    console.log(myList);
  }
  
  ourList.innerHTML = myList;

}



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



