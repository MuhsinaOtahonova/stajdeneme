let likeCount = 0; 
let likedTitles = [];

function changeCards(event) {
    document.querySelector('.cards .row').innerHTML = '';

    const cardContainer = document.querySelector('.cards .row');
    const currentCards = [
        { image: 'img/kiyafet.jpg', title: 'Yeni Kıyafet 1', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, iure.' },
        { image: 'img/kiyafet.jpg', title: 'Yeni Kıyafet 2', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, iure.' },
        { image: 'img/kiyafet.jpg', title: 'Yeni Kıyafet 3', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, iure.' }
    ];
    const newCards = [
        { image: 'img/yeniKiyafet.jpeg', title: 'Yeni Kıyafet 1', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, iure.' },
        { image: 'img/yeniKiyafet.jpeg', title: 'Yeni Kıyafet 2', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, iure.' },
        { image: 'img/yeniKiyafet.jpeg', title: 'Yeni Kıyafet 3', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, iure.' }
    ];

    const isManButton = event.target.id === 'manButton';
    const cardsToShow = isManButton ? newCards : currentCards;

    cardsToShow.forEach(function (cardData) {
        const cardHTML = `
            <div class="col">
                <div class="card" style="width: 15rem;">
                    <img src="${cardData.image}" class="card-img-top" alt="${cardData.title}">
                    <div class="card-body">
                        <h5 class="card-title">${cardData.title}</h5>
                        <p class="card-text">${cardData.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <button class="btn btn-outline-danger like-button" type="button" onclick="likeClicked(this, '${cardData.title}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        cardContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

function likeClicked(button, title) {
    button.disabled = true; 
    likeCount++; 
    likedTitles.push(title); 
    document.getElementById('likeCount').innerText = likeCount; 
}

// Modeli aç ve tıklanan başlıkları menü olarak göster
document.getElementById('likeButton').addEventListener('click', function() {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = ''; 
    likedTitles.forEach(function(title) {
        const menuItem = document.createElement('p');
        menuItem.textContent = title;
        modalBody.appendChild(menuItem);
    });
});

changeCards({ target: { id: 'womenButton' } });

const dropdownItems1 = document.querySelectorAll('.dropdown-item1');
dropdownItems1.forEach(function (item) {
    item.addEventListener('click', changeCards);
});
const dropdownItems2 = document.querySelectorAll('.dropdown-item2');
dropdownItems2.forEach(function (item) {
    item.addEventListener('click', changeCards);
});

document.getElementById('likeButton').addEventListener('click', function() {
    const modal = new bootstrap.Modal(document.getElementById('likedTitlesModal'));
    modal.show();
});
