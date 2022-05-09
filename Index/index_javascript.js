console.log("heia");


fetch ("https://www.sunroad.no/exam/wp-json/wp/v2/media")
.then(response => response.json())
.then(data => {
    console.log(data);
    media = data;
})
.catch((error) => {
    console.error('Error:', error);
  });


const scrollDownChevron = document.getElementById("scrollDown");
const toDiv = document.querySelector(".toDiv");

scrollDownChevron.addEventListener("click", () => toDiv.scrollIntoView({behavior: "smooth"}));



