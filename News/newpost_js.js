console.log("hello from the newpost site")


const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) { window.location = "news.html"; }




const showSinglePost = document.querySelector(".singlepost")

fetch(`https://www.sunroad.no/exam/wp-json/wp/v2/posts/${id}`) 

.then(response => response.json())
.then(data => {
    console.log(data);
    listSinglePost(data);
})
.catch(error => error.innerHTML = "Something's wrong!");



listSinglePost = (data) => {



    title = data.title.rendered;

    const date = data.date;
            //console.log(date);
            
          
 
    if (data.content.rendered.includes("figure")) {
        let indexNumber = data.content.rendered.indexOf("<figure")
        //console.log(indexNumber);
        let lastIndexNumber = data.content.rendered.indexOf("</figure>")
        //console.log(lastIndexNumber);
        let newString = data.content.rendered.slice(indexNumber, lastIndexNumber);
        //console.log(newString);

        function intoNumbers(num) {
            return num.toString().padStart(2, '0');
          }

          function formatDate(date) {
            return [
                intoNumbers(date.getDate()),
                intoNumbers(date.getMonth() + 1),
              date.getFullYear(),
            ].join('.');
          }

          var formattedDate = formatDate(new Date(date));
          //console.log(formatDate(new Date(date)));
  
    let content = 
    `<section class="showPosts"><h2 class="h2title">${data.title.rendered}</h2>
    ${formattedDate}
    ${data.excerpt.rendered}
    <div class="imagenews">${newString}</div>
    </section>`;

    showSinglePost.innerHTML = content;
  
    document.title = title;
    }
}