console.log("hello from the portfolio side")


fetch ("https://www.sunroad.no/exam/wp-json/wc/store/products?_embed")
.then(response => response.json())
.then(data => {
    console.log(data);
    listPost(data);

})
.catch((error) => {
    console.error('Error:', error);
  });

const outPut = document.querySelector(".showPortfolio");
const section = document.getElementById("sectionPortfolio");



  function listPost (array) {

   
    let list = "";

    for (let post of array) {
      

        if (post.tags[0].id == 26) {
            console.log(post.tags)
  
            let priceBefore = post.prices.price;
            //console.log(priceBefore);
            let priceLength = priceBefore.length;


            if (priceLength < 9) {
            
            let intoDate = "0" + priceBefore.slice(0,1) + "." + priceBefore.slice(1,3) + "." + priceBefore.slice(3,7);
            //console.log(intoDate);

            list += `<a href="event.html?id=${post.id}"><div class="portfoliodiv">
            <h2>${post.name}</h2>
            <p class="typeofevent">${post.categories[0].name}</p>
            <p class="date">${intoDate}</p>
          </div></a>`

          let backgroundIMG = post.images[0].src;
          //console.log(backgroundIMG);
          section.style.backgroundImage = `url("${backgroundIMG}")`;
            }


            else {
                let intoDate = priceBefore.slice(0,2) + "." + priceBefore.slice(2,4) + "." + priceBefore.slice(4,8);
                //console.log(intoDate);
           

            list += `<a href="event.html?id=${post.id}"><div class="portfoliodiv">
            <h2>${post.name}</h2>
            <p class="typeofevent">${post.categories[0].name}</p>
            <p class="date">${intoDate}</p>
            <div class="eventDescr"><p>${post.description}</p></div>
          </div></a>`

          
          let backgroundIMG = post.images[0].src;
          //console.log(backgroundIMG);
          section.style.backgroundImage = `url("${backgroundIMG}")`;
        }


        }
   
        outPut.innerHTML = list;
      
      
    }
  
    
  }


