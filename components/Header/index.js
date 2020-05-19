// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
const headerDiv = document.createElement('div');
const date = document.createElement('span');
const headerText = document.createElement('h1');
const temp = document.createElement('span');

headerDiv.classList.add('header');
date.classList.add('date');
temp.classList.add('temp');

headerText.textContent= 'Lambda Times'
date.textContent = 'SMARCH 28, 2019'
temp.textContent = '98°'

headerDiv.appendChild(date);
headerDiv.appendChild(headerText);
headerDiv.appendChild(temp);
return headerDiv;
}

const newHeader = document.querySelector('.header-container')
newHeader.appendChild(Header())