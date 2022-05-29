console.log("hello from the portfolio side");


fetch("https://www.sunroad.no/exam/wp-json/wc/store/products?_embed")
.then(response => response.json())
.then(data => {
    console.log(data);

    let portfolioData = [];
    for (let objekt of data) {
    if (objekt.tags[0].id == 26) {
      portfolioData.push(objekt);
    }
    //console.log(portfolioList);
  }
products = portfolioData;
    listPost(portfolioData);

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

            if (post.sku.length < 0) {
              console.log("ups");            // funker ikke     
            }

            
            list += `<a href="event.html?id=${post.id}">
            <div class="showPortfolio">
            <img src="${post.images[0].src}" alt="${post.images[0].alt}">
            <h2>${post.name}</h2>
            <p class="details">${post.sku}</p>
            <p class="date">${intoDate}</p>
            ${post.short_description}</div></a>`

            }


            else {

                let intoDate = priceBefore.slice(0,2) + "." + priceBefore.slice(2,4) + "." + priceBefore.slice(4,8);
                //console.log(intoDate);
           
                list += `<a href="event.html?id=${post.id}">
                <div class="showPortfolio">
                <img src="${post.images[0].src}" alt="${post.images[0].alt}">
                <h2>${post.name}</h2>
                <p class="details">${post.sku}</p>
                <p class="date">${intoDate}</p>
                ${post.short_description}
                </div></a>`
        }
    }
  
  
    section.innerHTML = list;
  }



  const concertCheck = document.querySelector('input[name="concerts"]');
  const tourCheck = document.querySelector('input[name="tours"]');
  const assembleCheck = document.querySelector('input[name="assembles"]');
  const collaborationCheck = document.querySelector('input[name="collaborations"]');

  concertCheck.addEventListener("change", filterAll);
  tourCheck.addEventListener("change", filterAll);
  assembleCheck.addEventListener("change", filterAll);
  collaborationCheck.addEventListener("change", filterAll);




  const year2018 = document.querySelector('input[name="2018"]');
  const year2019 = document.querySelector('input[name="2019"]');
  const year2020 = document.querySelector('input[name="2020"]');
  const year2021 = document.querySelector('input[name="2021"]');

  year2018.addEventListener("change", filterAll);
  year2019.addEventListener("change", filterAll);
  year2020.addEventListener("change", filterAll);
  year2021.addEventListener("change", filterAll);





function filterAll () {


  let currentList = products;

  if (concertCheck.checked || tourCheck.checked || assembleCheck.checked || collaborationCheck.checked) {
    filteredList = listCat(currentList);

    if (year2018.checked || year2019.checked || year2020.checked || year2021.checked) {
      filteredList = listYear(filteredList);
    }
  }

  else if (year2018.checked || year2019.checked || year2020.checked || year2021.checked) {
    filteredList = listYear(currentList);

    if (concertCheck.checked || tourCheck.checked || assembleCheck.checked || collaborationCheck.checked) {
      filteredList = listCat(filteredList);
    }
  }

  else {
    filteredList = products;
  }

  listPost(filteredList);
}




function listYear (array) {


    let yearList = [];

    if (year2018.checked) {
      yearList.push("2018");
    }

    if (year2019.checked) {
      yearList.push("2019");
    }

    if (year2020.checked) {
      yearList.push("2020");
    }

    if (year2021.checked) {
      yearList.push("2021");
    }


    //console.log(yearList);


    let filteredList = array.filter((item) => {

      let priceBefore = item.prices.price;
      //console.log(priceBefore);
  
      if (priceBefore.length < 9) {
        var extra0 = "0";
        priceBefore = extra0.concat(priceBefore);
        //console.log(priceBefore);
      }
  
      item.remove = priceBefore.slice(4, 8);
      //console.log(item.remove);


      if (yearList.includes(item.remove)) {
  
      return item.remove;
 }});

 

 //console.log(filteredList);
 return filteredList;
}





function listCat (array) {

//console.log(array);
    let catList = [];
    
 


    if (concertCheck.checked) {
      catList.push(36);
    }
  
    if (tourCheck.checked) {
      catList.push(22);
    }
  
    if (assembleCheck.checked) {
      catList.push(40);
    }

    if (collaborationCheck.checked) {
      catList.push(39);
    }




    //console.log(catList);
    let filteredList = array.filter((item) => {

         //console.log(item.categories[0].id);
         if (catList.includes(item.categories[0].id)) {
     
      return item.categories[0].id;
    }});
    
    //console.log(filteredList);
    return filteredList;
  
  }






const mediaList = document.querySelector(".wholePortfolio > div > div.secondchoice > ul.ul_media");
const portfolioList = document.querySelector("ul.ul_portfolioevents");
const yearsList = document.querySelector("ul.ul_years");
const portfolioCheck = document.querySelector('input[name="portfolioevents"]');
const mediaCheck = document.querySelector('input[name="media"]');



portfolioCheck.addEventListener("change", function () {

  if (this.checked) {
    portfolioList.style.display = "flex";
    yearsList.style.display = "flex";
    this.checked = true;
    mediaCheck.checked = false;
    mediaList.style.display = "none";

  }

  else {
    this.checked = false;
    portfolioList.style.display = "none";
    yearsList.style.display = "none";
    mediaCheck.checked = true;
    mediaList.style.display = "flex";
    
}
});

mediaCheck.addEventListener("change", function () {

  if (this.checked) {
    mediaList.style.display = "flex";
    this.checked = true;
    portfolioCheck.checked = false;
    yearsList.style.display = "none";
    portfolioList.style.display = "none";
  }

  else {
    this.checked = false;
    mediaList.style.display = "none";
    portfolioCheck.checked = true;
    portfolioList.style.display = "flex";
    yearsList.style.display = "flex";
}
});




  

   
