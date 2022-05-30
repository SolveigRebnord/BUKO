console.log("hello from the newpost site")

const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) { window.location = "news.html"; }

const showSinglePost = document.querySelector(".showOnePost")

fetch(`https://www.sunroad.no/exam/wp-json/wp/v2/posts/${id}?_embed`) 

.then(response => response.json())
.then(data => {
    console.log(data);
    listSinglePost(data);
})
.catch(error => error.innerHTML = "Something's wrong!");


listSinglePost = (data) => {
  
  title = data.title.rendered;
  document.title = title;
  const date = data.date;
  //console.log(date);
  let altText = "";
  let theLink = "";
            
  const breadCrumbs = document.querySelector(".breadcrumbs");
  breadCrumbs.innerHTML = `<a href="index.html">Home</a> / <a href="news.html">News</a> / ${title}`;
  
  let indexNumber = data.content.rendered.indexOf("https")
  let lastIndexNumber = data.content.rendered.indexOf('" alt=')
  let imgUrl = data.content.rendered.slice(indexNumber, lastIndexNumber);
  let newIndex = data.content.rendered.indexOf('alt="');
  let lastIndex = data.content.rendered.indexOf('" class=');
  let current = data.content.rendered.slice(newIndex, lastIndex);
  altText = current.slice(5);
         
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

  if (data.tags == 37) {
    theLink = `<a href="portfolio.html">Check out our portfolio</a>`;
  }  

  else if (data.tags == 38) {
    theLink = `<a href="members.html">Check out all our members</a>`;
  }
  
  let content = 
    `<section class="showPost">
      <div>
        <h2 class="h2title">${data.title.rendered}</h2>
        ${formattedDate}
        ${data.excerpt.rendered} 
        ${theLink}
      </div>
      <div>
      <img src="${imgUrl}" alt="${altText}">
      </div>
    </section>`;

  showSinglePost.innerHTML = content;
}