console.log("hello from the news side")

fetch ("https://www.sunroad.no/exam/wp-json/wp/v2/posts")
.then(response => response.json())
.then(data => {
    console.log(data);
    listPost(data);
})
.catch((error) => {
    console.error('Error:', error);
  });


const showPost = document.querySelector(".showPost");

function listPost (array) {

   
    let list = "";

    for (let post of array) {
        
        
        if (post.content.rendered.includes("figure")) {
            let indexNumber = post.content.rendered.indexOf("<figure")
            console.log(indexNumber);
            let lastIndexNumber = post.content.rendered.indexOf("</figure>")
            console.log(lastIndexNumber);
            let newString = post.content.rendered.slice(indexNumber, lastIndexNumber);
            console.log(newString);

            list += `<h2>${post.title.rendered}</h2>
        ${post.content.rendered}
        ${newString}
        ${post.excerpt.rendered}`

            
        }
    }

    

    showPost.innerHTML = list;
}

