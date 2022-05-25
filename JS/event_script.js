console.log("hello from event side")



const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
//console.log(id);
if (!id) { window.location = "portfolio.html"; }




const showCV = document.querySelector(".showEvent")


fetch(`https://www.sunroad.no/exam/wp-json/wc/store/products/${id}?_embed`) 

.then(response => response.json())
.then(data => {
    console.log(data);
    listSinglePost(data);
})
.catch(error => error.innerHTML = "Something's wrong!");



listSinglePost = (data) => {

  
    let title = data.name;
    document.title = "Event | " + title;

    let priceBefore = data.prices.price;
            //console.log(priceBefore);
    let priceLength = priceBefore.length;

            
    if (priceLength < 9) {
            
    let intoDate = "0" + priceBefore.slice(0,1) + "." + priceBefore.slice(1,3) + "." + priceBefore.slice(3,7);
            console.log(intoDate);

            let content = 
            `<div class="cvdiv">
            <h2>${data.name}</h2>
            <p>${intoDate}</p>
            <p>${data.categories[0].name}</p>
            
            ${data.description}
            <img class="memberimg" src="${data.images[0].src}" alt=${data.images[0].alt}>
     
            </div>`

            showCV.innerHTML = content;
    }
 
    else {
        let intoDate = priceBefore.slice(0,2) + "." + priceBefore.slice(2,4) + "." + priceBefore.slice(4,8);
        console.log(intoDate);
        let content = 
        `<div class="cvdiv">
        <h2>${data.name}</h2>
        <p>${intoDate}</p>
        <p>${data.categories[0].name}</p>
        
        ${data.description}
        <img class="memberimg" src="${data.images[0].src}" alt=${data.images[0].alt}>
        </div>`

        showCV.innerHTML = content;
    }

}


 