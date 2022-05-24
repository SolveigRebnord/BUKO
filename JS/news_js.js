console.log("hello from the news side")

fetch ("https://www.sunroad.no/exam/wp-json/wp/v2/posts?_embed&per_page=30")
.then(response => response.json())
.then(data => {
    console.log(data);
    listPost(data);
})
.catch((error) => {
    console.error('Error:', error);
  });


const showPost = document.querySelector(".showPosts");

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


            // https://bobbyhadz.com/blog/javascript-get-date-without-time
            const date = post.date;
            //console.log(date);
            
            function padTo2Digits(num) {
                return num.toString().padStart(2, '0');
              }

              function formatDate(date) {
                return [
                padTo2Digits(date.getDate()),
                  padTo2Digits(date.getMonth() + 1),
                  date.getFullYear(),
                ].join('.');
              }

              var formattedDate = formatDate(new Date(date));
              //console.log(formatDate(new Date(date)));

              var theLink = "";
            if (post.tags == 37) {
               theLink = `<a href="portfolio.html">Check out our portfolio</a>`;
            }  

            else if (post.tags == 38) {
                 theLink = `<a href="members.html">Check out all our members</a>`;
            }

            list += `
            <div class="showPost">
                      <div>
                      <h2 class="h2title">${post.title.rendered}</h2>
                        ${formattedDate}
                        ${post.excerpt.rendered}
                        <a href="newpost.html?id=${post.id}">Read more</a>
                        ${theLink}
                      </div>
                      <div>
                        ${newString}
                      </div>
              </div>`

            
        
      }
    }

    

    showPost.innerHTML = list;
}

//<a href="event.html?id=${post.id}">Read more about me!</a> dette funker ikke, må være en slags redirecter isåfall