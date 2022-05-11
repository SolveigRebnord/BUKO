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
const ourList = document.querySelector(".ourUL");

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
      myList += `<li class="news">${item.title.rendered}</li>`
    }

    ourList.innerHTML = myList;

    const allNews = document.querySelectorAll(".ourUL li")
    console.log(allNews);
  }

