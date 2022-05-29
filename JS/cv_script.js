console.log("hello from cv side, skal jeg heller bare lage dette i overlay?")



const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
//console.log(id);
if (!id) { window.location = "members.html"; }




const showCV = document.querySelector(".showCV")


fetch(`https://www.sunroad.no/exam/wp-json/wc/store/products/${id}?_embed`) 

.then(response => response.json())
.then(data => {
    console.log(data);
    listSinglePost(data);
})
.catch(error => error.innerHTML = "Something's wrong!");



listSinglePost = (data) => {

    const breadCrumbs = document.querySelector(".breadcrumbs");
    breadCrumbs.innerHTML = `<a href="index.html">Home</a> / <a href="members.html">Members</a> / ${data.name}`;

  
    let title = data.name;
    document.title = "CV | " + title;

    let priceBefore = data.prices.price;
            console.log(priceBefore);
    let priceLength = priceBefore.length;

    let intoDate = "";
   
    if (priceLength < 9) {
            
     intoDate = "0" + priceBefore.slice(0,1) + "." + priceBefore.slice(1,3) + "." + priceBefore.slice(3,7);
            //console.log(intoDate);
    }

    else {
         intoDate = priceBefore.slice(0,2) + "." + priceBefore.slice(2,4) + "." + priceBefore.slice(4,8);
        //console.log(intoDate);
    }

    let city = "";

    if (data.sku.includes("Oslo")) {
        data.sku = "Oslo";
    }

    if (data.sku.includes("Bergen" || "bergen")) {
        data.sku = "Bergen";
    }

    if (data.sku.includes("Bergen/Oslo")) {
        data.sku = "Bergen/Oslo";
    }


    

    
    let content = 

            `
        <h1>${data.name}</h1>
        <div class="cvDetails">
            <div class="leftFlex">
                <p>- ${data.categories[0].name}</p>
                <img onclick="openImg(this)" class="memberimgCV" src="${data.images[0].src}" alt="${data.images[0].alt}">
            </div>
            <div class="rightFlex">
                <p>${data.sku}</p>
                <p>${intoDate}</p>
                ${data.description}
            </div>
        </div>
        <div>${data.short_description}</div>`
    

            showCV.innerHTML = content;
}
  




 
 
function openImg (element) {

    if (element.className == "memberimgCV") {
    element.classList.replace("memberimgCV", "open") ;
    document.querySelector("body").style.backgroundColor = "grey";
    }

    else {
        element.classList = "memberimgCV";
            document.querySelector("body").style.backgroundColor = "rgb(251, 248, 248)";
    }
}
