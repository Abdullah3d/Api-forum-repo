const loadCard = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const cards = data;
    displayCards(cards);
}
const displayCards = cards => {
    // console.log(card)
    const cardContainer1 = document.getElementById('card-container');

    cardContainer1.textContent ='';

    cards.posts.forEach((card) => {
        // console.log(card);

        const cardContainer = document.createElement('div');
        cardContainer.classList = `bg-[#797DFC1A] rounded-sm p-5`;
        cardContainer.innerHTML = `
         <div class="flex ml-8">
          <div>
            <img  src="images/Status.png" alt=""><span><img class="w-20" src="${card.image}" alt=""></span>
          </div>
          <div class="bg-[ #797DFC1A] ml-5">
            <P class="text-xl mt-5">${card.category}<span class="ml-6">${card.author.name}</span></P>
            <h1 class="p-2 text-2xl font-bold">${card.title}</h1><br>
            <p class="text-xl">${card.description}</p>
          </div>
        </div>
        <div class="flex gap-52 p-10">
          <div class="flex">
            <img src="images/Vector.png" alt=""><span class="ml-2 mr-1">${card.comment_count
            }</span>
            <img src="images/Group 16.png" alt=""><span class="ml-2 mr-1">${card.view_count}</span>
            <img src="images/Group 18.png" alt=""><span class="ml-2 mr-1">${card.posted_time}</span>
          </div>
          <div>
            <img src="images/Vector (1).png" alt="">
          </div>
        </div>
         `;
        cardContainer1.appendChild(cardContainer);
    });
     toggleLoadingSpinner(false);

}
// handle search button
const handleSearch = () => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value;
  console.log(searchText);
  loadCard(searchText);
}

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }
  else{
    loadingSpinner.classList.add('hidden')
  }
}

// loadCard();
/**************************************************************************************** */

  
  const loadPhone = async (searchText , isShowAll) => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const phones = data;
    console.log(phones);
    // displayPhone(phones);
}
const phoneContainer1 = document.getElementById('phone-cont');
phones.posts.forEach((phones) => {
  console.log(phones) 

  const phoneContainer  = document.createElement('div');
  phoneContainer.classList = `card w-96 bg-base-100 shadow-xl`
  phoneContainer.innerHTML = `
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div class="card-body">
          <p><img src="images/Vector.png" alt=""><span> 29 January,2024</span></p>
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
             <img src="images/Ellipse 1.png" alt="">Fashion <br>Products</div>
          </div>
  `;
phoneContainer1.appendChild(phoneContainer)


});


    
loadPhone();
