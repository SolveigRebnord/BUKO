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

  list += `<h2>${post.name}</h2>
  ${post.description}`


}




outPut.innerHTML = list;
  }