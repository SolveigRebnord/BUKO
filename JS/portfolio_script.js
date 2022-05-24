console.log("hello from the portfolio side")


fetch ("https://www.sunroad.no/exam/wp-json/wc/store/products?_embed")
.then(response => response.json())
.then(data => {
    console.log(data);

    let portfolioList = [];
    for (let objekt of data) {
    if (objekt.tags[0].id == 26) {
      portfolioList.push(objekt);
    }
    console.log(portfolioList);
  }

    listPost(portfolioList);

})
.catch((error) => {
    console.error('Error:', error);
  });

const outPut = document.querySelector(".showPortfolio");
const section = document.querySelector(".sectionPortfolio");



  function listPost (array) {

   
    let list = "";

    for (let post of array) {
      

  
            let priceBefore = post.prices.price;
            //console.log(priceBefore);
            let priceLength = priceBefore.length;


            if (priceLength < 9) {
            
            let intoDate = "0" + priceBefore.slice(0,1) + "." + priceBefore.slice(1,3) + "." + priceBefore.slice(3,7);
            //console.log(intoDate);


            list += `<a href="event.html?id=${post.id}">
            <div class="showPortfolio">
            <img src="${post.images[0].src}">
            <h2>${post.name}</h2>
            <p class="typeofevent">${post.categories[0].name}</p>
            <p class="date">${intoDate}</p>
            ${post.short_description}</div></a>`

            }


            else {

                let intoDate = priceBefore.slice(0,2) + "." + priceBefore.slice(2,4) + "." + priceBefore.slice(4,8);
                //console.log(intoDate);
           
                list += `<a href="event.html?id=${post.id}">
                <div class="showPortfolio">
                <img src="${post.images[0].src}">
                <h2>${post.name}</h2>
                <p class="typeofevent">${post.categories[0].name}</p>
                <p class="date">${intoDate}</p>
                ${post.short_description}
                </div></a>`
        }
    }
  
    section.innerHTML = list;
  }



const portfolioCheck = document.querySelector(".wholePortfolio > div > ul:first-of-type > li:first-of-type > input");
console.log(portfolioCheck);

if (portfolioCheck.checked = true) {
  console.log("yey");
}