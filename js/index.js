const loadCard = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const card = data;
    displayCards(card);
}
const displayCards = card => {
    console.log(card)
}
card.forEach (card => {
    console.log(card);
    
});

// loadCard();
