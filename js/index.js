let sum = [];
const spinner = document.getElementById('loading-spinner');
spinner.classList.remove('hidden');
const sideCard = document.getElementById('side-card');
sideCard.classList.add('hidden');
const alertPart = document.getElementById('alert-part');

async function loadCard(category) {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/${category}`)
    const data = await res.json();
    setTimeout(() => {
        spinner.classList.add('hidden');
        sideCard.classList.remove('hidden');
        if(!data.posts.length >0){
            alertPart.classList.remove('hidden');
        }else if (data.posts.length >0){
            alertPart.classList.add('hidden');
        }
        card(data);
    }, 2000)
}

async function loadCards(category) {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/${category}`)
    const data = await res.json();
    latestCard(data);
}

// latestCard();