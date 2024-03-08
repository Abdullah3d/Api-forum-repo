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
function card(posts) {
    let displayCard = document.getElementById('display-card');
    displayCard.innerHTML = '';
    posts.posts.forEach(post => {
        const cards = document.createElement('cards')
        cards.innerHTML = `
        <div
        class="lg:max-w-[770px] flex sm:flex-row flex-col sm:p-10 p-6 gap-6 rounded-3xl bg-[#F3F3F5] hover:bg-[#F1F2FF] hover:border-[#9195FD] border-white border-solid border hover:scale-[1.02] hover:shadow-2xl duration-300">
        <div class="max-w-[72px] max-h-[72px] relative">
            <img class="rounded-2xl" src="${post.image}" alt="picture">
            <span
                class="active-icon block w-[18px] h-[18px] bg-[${!post.isActive ? '#FF3434' : '#10B981'}] rounded-full absolute top-[-6px] right-[-6px] border-white border-solid border-2"></span>
        </div>
        <div class="grow">
            <div class="text-left inter font-medium text-sm">
                <p class="inline mr-5 text-pm-text"># ${post.category}</p>
                <p class="inline text-pm-text">Author : ${post.author.name}</p>
                <h2 class="text-xl font-bold text-pm-text mt-3 mb-4">${post.title}</h2>
                <p
                    class="text-pm-text text-opacity-60 text-base pb-5 border-b-2 border-dashed border-pm-text border-opacity-30">${post.description}</p>
                <div class="flex justify-between items-center flex-wrap gap-3">
                    <div
                        class="flex justify-start items-center gap-7 mt-6 text-pm-text text-opacity-60">
                        <span class="flex justify-center items-center"><i
                                class="fa-regular fa-message text-xl"></i><span
                                class="ml-3">${post.comment_count}</span></span>
                        <span class="flex justify-center items-center"><i
                                class="fa-regular fa-eye text-xl"></i><span
                                class="ml-3">${post.view_count}</span></span>
                        <span class="flex justify-center items-center"><i
                                class="fa-regular fa-clock text-xl"></i><span
                                class="ml-3">${post.posted_time} min</span></span>
                    </div>
                    <div class="sm:mt-6 mt-4">
                        <button class="envelope bg-[#10B981] rounded-[50%] px-2 py-[3px]"><i
                                class="fa-solid fa-envelope-open text-lg text-white"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
        displayCard.appendChild(cards);
    });

    const buttons = document.querySelectorAll('.envelope');
    buttons.forEach(search => {
        search.addEventListener('click', () => {
            const getTitle = search.parentNode.parentNode.parentNode.childNodes[5].innerText;
            const getViews = search.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[1].innerText;
            const cards2 = document.createElement('cards2');
            cards2.innerHTML = `
            <div class="bg-white rounded-2xl flex justify-between items-center p-4 mt-4 gap-3">
            <h3 class="text-pm-text font-bold">${getTitle}</h3>
            <span class="flex justify-center items-center"><i
                    class="fa-regular fa-eye text-xl"></i><span class="ml-3">${getViews}</span></span>
        </div>
            `
            const cardsContainer = document.getElementById('cards-container');
            cardsContainer.appendChild(cards2);
            sum.push(cards2);
            document.getElementById('title').innerText = sum.length;
        });
    });
}

function inputSection() {
    const inputValue = document.getElementById('input-text');
    document.getElementById('input-container').addEventListener('click', () => {
        loadCard(`posts?category=${inputValue.value}`);
        inputValue.value = '';
        let displayCard = document.getElementById('display-card');
        displayCard.innerHTML = '';
        sideCard.classList.add('hidden');
        spinner.classList.remove('hidden');
        alertPart.classList.add('hidden');
    })
}
inputSection();


function latestCard(parameter) {
    parameter.forEach(post => {
        const showContainer = document.getElementById('show-container');
        const div = document.createElement('div');
        div.innerHTML = `
        <div
        class="border border-solid border-pm-text border-opacity-15 rounded-3xl p-6  hover:bg-[#F1F2FF] hover:border-[#9195FD] hover:scale-[1.02] hover:shadow-2xl duration-300">
        <img class="object-cover lg:w-[340px] w-full max-h-[190px] mx-auto block border rounded-[20px]"
            src="${post.cover_image}" alt="">
        <span class="text-pm-text text-opacity-60 mt-6 mb-4 block"><i
                class="fa-solid fa-calendar-days text-lg mr-[10px]"></i><span>${post.author?.posted_date ?? 'No publish date'}</span></span>
        <h3 class="text-lg text-pm-text font-extrabold">${post.title}</h3>
        <p class="mt-3 mb-4 text-pm-text text-opacity-60">${post.description}</p>
        <div class="flex items-center gap-4">
            <img class="block w-[45px] h-[45px] rounded-full border" src="${post.profile_image}" alt="">
            <span class="block">
                <h5 class="text-pm-text font-bold">${post.author.name}</h5>
                <p class="text-sm text-pm-text text-opacity-60">${post.author?.designation ?? 'Unknown'}</p>
            </span>
        </div>
    </div>
        `
        showContainer.appendChild(div);
    });
}

loadCard('posts');
loadCards('latest-posts');
// latestCard();