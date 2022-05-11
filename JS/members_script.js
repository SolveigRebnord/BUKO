console.log("hello from the members side")


fetch ("https://www.sunroad.no/exam/wp-json/wc/store/products?_embed")
.then(response => response.json())
.then(data => {
    console.log(data);
    listPost(data);

})
.catch((error) => {
    console.error('Error:', error);
  });

const outPut = document.querySelector(".showMembers");

  function listPost (array) {

   
    let list = "";


    for (let post of array) {
      
        
        if (post.tags[0].id == 21) {
            console.log(post.tags)

  list += `<a href="cv.html?id=${post.id}"><div class="cvdiv">
  <h2>${post.name}</h2>
  <p class="instrument">${post.categories[0].name}</p>
  <img class="memberimg" src="${post.images[0].src}" alt=${post.images[0].alt}>
  </div></a>`

        }
      
        outPut.innerHTML = list;

    }
    

  }


