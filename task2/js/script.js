document.getElementById('fetch-photos').addEventListener('click', fetchPhotos);

function fetchPhotos() {
    const photoCount = document.getElementById('photo-count').value;
    if (!photoCount) {
        alert('Please enter a number');
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${photoCount}`)
        .then(response => response.json())
        .then(photos => displayPhotos(photos))
        .catch(error => console.error('Error fetching photos:', error));
}

function displayPhotos(photos) {
    const photoContainer = document.getElementById('photo-container');
    photoContainer.innerHTML = '';
    photos.forEach(photo => {
        const photoCard = document.createElement('div');
        photoCard.className = 'photo-card';
        photoCard.innerHTML = `
            <img src="${photo.thumbnailUrl}" alt="${photo.title}">
            <p>${photo.title}</p>
        `;
        photoContainer.appendChild(photoCard);
    });
}