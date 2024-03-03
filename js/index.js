const loadCard = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const cards = data;
    displayCards(cards);
}
const displayCards = cards => {
    // console.log(card)
   const cardContainer1 = document.getElementById('card-container');

    cards.posts.forEach ((card) => {
        console.log(card);

         const cardContainer = document.createElement('div');
         cardContainer.classList = `card w-96 bg-gray-100 shadow-xl`;
         cardContainer.innerHTML = `
         <div class="card-body">
         <h2 class="card-title"></h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
         <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
         </div>
         `;
         cardContainer1.appendChild(cardContainer);
    });
}

loadCard();
