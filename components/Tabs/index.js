// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topic = document.querySelector('.topics');
 axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
    console.log(response.data);
    let topicsData = response.data.topics;
    console.log(topicsData);
    topicsData.forEach((e) => {
        topic.appendChild(tabMaker(e))
    });
});

function tabMaker(item){
const tabDiv = document.createElement('div');
tabDiv.classList.add('tab');
tabDiv.textContent = item;
return tabDiv;
 };

 
