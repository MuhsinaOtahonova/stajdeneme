function deleteLikedTitle(title) {
    const index = likedTitles.indexOf(title);
    if (index !== -1) {
        likedTitles.splice(index, 1); 
        likeCount--; 
        document.getElementById('likeCount').innerText = likeCount; 
        renderLikedTitles(); 
    }
}

function renderLikedTitles() {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = ''; 
    likedTitles.forEach(function (title) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('d-flex', 'justify-content-between', 'align-items-center');
        menuItem.innerHTML = `
            <p>${title}</p>
            <button class="btn btn-outline-danger delete-button" onclick="deleteLikedTitle('${title}')">Delete</button>
        `;
        modalBody.appendChild(menuItem);
    });
}

document.getElementById('likeButton').addEventListener('click', function() {
    renderLikedTitles(); 
    const modal = new bootstrap.Modal(document.getElementById('likedTitlesModal'));
    modal.show();
});
