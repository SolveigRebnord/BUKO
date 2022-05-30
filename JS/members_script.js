console.log("hello from the members side")




fetch ("https://www.sunroad.no/exam/wp-json/wc/store/products?_embed&per_page=3&page=1")
.then(response => response.json())
.then(data => {
  outPut.innerHTML = "";
    console.log(data);

    let membersList = [];
    for (let objekt of data) {
    if (objekt.tags[0].id == 21) {
      membersList.push(objekt);
    }
    console.log(membersList);
  }


    listPost(membersList);
   
})
.catch((error) => {
    console.error('Error:', error);
  });

const outPut = document.querySelector(".showMembers");
const knappen = document.querySelector(".loadmore");
const message = document.querySelector(".message");

var pageIndex = 1;


function loadMore (tall) {
  console.log("yey clicked");

  let currPage = pageIndex +=tall;


fetch (`https://www.sunroad.no/exam/wp-json/wc/store/products?_embed&page=${currPage}&per_page=3`)
.then(response => response.json())
.then(data => {

  if (data.length == 0) {
    message.innerHTML = `- All results -`;
    return knappen.style.display = "none";
  }
  //console.log(data);
  let membersList = [];
    for (let objekt of data) {
    if (objekt.tags[0].id == 21) {
      membersList.push(objekt);
    }
    console.log(membersList);
  }



    listPost(membersList);
 
   
    
    
   

})
.catch((error) => {
    console.error('Error:', error);
  });
}






function listPost (array) {

  
  for (let post of array) {
    
          var list = `<a href="cv.html?id=${post.id}"><div class="cvdiv">
<h2>${post.name}</h2>
<p class="instrument">${post.categories[0].name}</p>
<img class="memberimg" src="${post.images[0].src}" alt=${post.images[0].alt}>
</div></a>`

      
    
outPut.innerHTML += list;
      
  }

}

