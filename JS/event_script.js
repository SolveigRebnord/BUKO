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
    console.log(data);
    listSinglePost(data);
})
.catch(error => error.innerHTML = "Something's wrong!");



fetch(`https://www.sunroad.no/exam/wp-json/wp/v2/media`) 

.then(response => response.json())
.then(data => {
    console.log(data);

    //console.log(data[0].source_url);

listMusic(data);
})
.catch(error => error.innerHTML = "Something's wrong!");







fetch(`https://www.sunroad.no/exam/wp-json/wp/v2/sr_playlist?_embed`) 

.then(response => response.json())
.then(data => {
    console.log(data);

        let content =
        `<h3>Program</h3>
        ${data[0].content.rendered}`;

        console.log(content);
         showPlaylist.innerHTML = content;
    
})
.catch(error => error.innerHTML = "Something's wrong!");




function listMusic (data) {

    for (let item of data) {

    if (item.mime_type.includes("audio" || "mp3")) {

        let content = 
 
        `<h3>Listen</h3>
        <p>${item.title.rendered}</p>
        <audio controls><source src="${item.source_url}"></audio>
        <p>${item.title.rendered}</p>
         <audio controls><source src="${item.source_url}"></audio>
       `
     
         showMusic.innerHTML = content;
    }
    

    if (item.mime_type.includes("video" || "mp4")) {

        let content = 
 
        `<h3>Watch</h3>
        <p>${item.title.rendered}</p>
        <video class="videoFormat" width="100%" height="fit-content" poster="https://www.sunroad.no/exam/wp-content/uploads/2022/05/larisa-birta-slbOcNlWNHA-unsplash-2-scaled.jpg" controls>
         <source src="${item.source_url}"></video>

       `
     
         showVideo.innerHTML = content;
    }
    }
console.log(content);
}




listSinglePost = (data) => {

  

    let title = data.name;
    document.title = "BUKO | " + title;



    let priceBefore = data.prices.price;
            //console.log(priceBefore);
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


    

            let content = 
            `<div class="event_content">
                <p>${data.categories[0].name}</p>
                <h1>${data.name}</h1>
                <p>${data.sku}</p>
                <p>${intoDate}</p>
                ${data.description}
            </div>

            <div class="event_img">
                <img class="memberimg" src="${data.images[0].src}" alt=${data.images[0].alt}>
                <div class="gallery"></div>
            </div>`

            // mmmmmmm gallery?
            showCV.innerHTML = content;
    
    
}


 