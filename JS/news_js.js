console.log("hello from the news side");


fetch("https://www.sunroad.no/exam/wp-json/wp/v2/posts?_embed&per_page=30")
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

            let indexNumber = post.content.rendered.indexOf("https")
            //console.log(indexNumber);
            let lastIndexNumber = post.content.rendered.indexOf('" alt=')
            //console.log(lastIndexNumber);
            let imgUrl = post.content.rendered.slice(indexNumber, lastIndexNumber);
            //console.log(imgUrl);

            let newIndex = post.content.rendered.indexOf('alt="');
            //console.log(newIndex);
            let lastIndex = post.content.rendered.indexOf('" class=');
            let current = post.content.rendered.slice(newIndex, lastIndex);
            //console.log(current);

            let altText = current.slice(5);
            //console.log(altText);


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
                          <div> 
                            <p>${formattedDate}</p>
                            ${post.excerpt.rendered}
                          </div>
                        <a href="newpost.html?id=${post.id}">Read more</a>
                        ${theLink}
                      </div>
                      <div>
                        <img style="cursor: pointer" onclick="openImg(this)" src="${imgUrl}" alt="${altText}">
                      </div>
              </div>`
  
        
      }
    }

    showPost.innerHTML = list;
}



    function openImg (element) {

        if (element.className == "") {
        element.className = "open";
        document.querySelector("body").style.backgroundColor = "grey";
    }

    else {
            element.classList = "";
            document.querySelector("body").style.backgroundColor = "rgb(251, 248, 248)";
    }
  }
