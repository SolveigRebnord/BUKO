console.log("hello from the members side")




fetch ("https://www.sunroad.no/exam/wp-json/wc/store/products?_embed&per_page=4&page=1")
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





function loadMore (tall) {
  console.log("yey clicked");


fetch (`https://www.sunroad.no/exam/wp-json/wc/store/products?_embed&page=4&per_page=2`)
.then(response => response.json())
.then(data => {
  //console.log(data);
  
    listPost(data);

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