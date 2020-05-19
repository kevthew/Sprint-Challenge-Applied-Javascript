// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

let cardEntry = document.querySelector('.cards-container')
axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) =>{
    console.log(response.data.articles);
    let newArticles = response.data.articles;
    let articleKeys = Object.keys(response.data.articles)
    articleKeys.forEach((e) => {
        newArticles[e].forEach( (item) =>{
            cardEntry.appendChild(cardMaker(item))
        });
    });
});

 function cardMaker(item){
     const cardDiv = document.createElement('div');
     const headlineDiv = document.createElement('div');
     const authorDiv = document.createElement('div');
     const imgDiv = document.createElement('div');
     const image = document.createElement('img');
     const bySpan = document.createElement('span');

     cardDiv.classList.add('card')
     headlineDiv.classList.add('headline')
     authorDiv.classList.add('author')
     imgDiv.classList.add('img-container')

     cardDiv.appendChild(headlineDiv)
     cardDiv.appendChild(authorDiv)
     authorDiv.appendChild(imgDiv)
     imgDiv.appendChild(image)
     authorDiv.appendChild(bySpan)

     headlineDiv.textContent = item.headline
     image.src = item.authorPhoto
     bySpan.textContent = `By ${item.authorName}`
     return cardDiv;
 };