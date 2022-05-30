console.log("hello from event side")

const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
//console.log(id);
if (!id) { window.location = "portfolio.html"; }

const showCV = document.querySelector(".showEvent");
const showMusic = document.querySelector(".showMusic");
const showVideo = document.querySelector(".showVideo");
const showPlaylist = document.querySelector(".showPlaylist");


fetch(`https://www.sunroad.no/exam/wp-json/wc/store/products/${id}?_embed`) 

.then(response => response.json())
.then(data => {
   //console.log(data);
    listSinglePost(data);
})
.catch(error => error.innerHTML = "Something's wrong!");


fetch(`https://www.sunroad.no/exam/wp-json/wp/v2/media?per_page=100`) 

.then(response => response.json())
.then(data => {
    //console.log(data);
    listMusic(data);
})
.catch(error => error.innerHTML = "Something's wrong!");


fetch(`https://www.sunroad.no/exam/wp-json/wp/v2/sr_playlist?_embed&per_page=100`) 
.then(response => response.json())
.then(data => {
    console.log(data);
        let content =
        `<h3>Program</h3>
        ${data[0].content.rendered}`;
        //console.log(content);
         showPlaylist.innerHTML = content;
})
.catch(error => error.innerHTML = "Something's wrong!");



function listMusic (data) {

    for (let item of data) {
        if (item.mime_type.includes("audio" || "mp3")) {
        let content = 
        `<h3>Listen</h3>
        <div>
            <p>${item.title.rendered}</p>
            <audio controls><source src="${item.source_url}"></audio>
        </div>
        <div>
            <p>${item.title.rendered}</p>
            <audio controls><source src="${item.source_url}"></audio>
         </div>`
         showMusic.innerHTML = content;
        }
    
        if (item.mime_type.includes("video" || "mp4")) {

            let content = 
            `<h3>Watch</h3>
            <div>
            <p>- ${item.title.rendered} -</p>
            <video class="videoFormat" width="90%" height="fit-content" poster="https://www.sunroad.no/exam/wp-content/uploads/2022/05/arindam-mahanta-VEOk8qUl9DU-unsplash-2.jpg" controls>
            <source src="${item.source_url}"></video>
            </div>`
            showVideo.innerHTML = content;
        }
    }
}


listSinglePost = (data) => {

    let title = data.name;
    document.title = "BUKO | " + title;

    const breadCrumbs = document.querySelector(".breadcrumbs");
    breadCrumbs.innerHTML = `<a href="index.html">Home</a> / <a href="portfolio.html">Portfolio</a> / ${data.name}`;

    let priceBefore = data.prices.price;
            //console.log(priceBefore);
    let priceLength = priceBefore.length;

    let intoDate = "";
            
    if (priceLength < 9) {
        intoDate = "0" + priceBefore.slice(0,1) + "." + priceBefore.slice(1,3) + "." + priceBefore.slice(3,7);
    }

    else {
        intoDate = priceBefore.slice(0,2) + "." + priceBefore.slice(2,4) + "." + priceBefore.slice(4,8);
    }

    let content = 
    `<div class="event_content">
    <p>${data.categories[0].name}</p>
    <h1>${data.name}</h1>
    <p>${data.sku}</p>
    <p>${intoDate}</p>
    ${data.description}
    </div>
    <div class="event_img">
        <img onclick="openImg(this)" class="memberimg" src="${data.images[0].src}" alt=${data.images[0].alt}>
        <div class="gallery"></div>
    </div>`

    showCV.innerHTML = content;
}


 
function openImg (element) {

    if (element.className == "memberimg") {
    element.className += " open";
    document.querySelector("body").style.backgroundColor = "grey";  
    }

    else {
        element.classList = "memberimg";
        document.querySelector("body").style.backgroundColor = "rgb(251, 248, 248)";
    }
}
