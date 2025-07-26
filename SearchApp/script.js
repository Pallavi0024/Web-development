const accessKey = '2UzQgBlczCkyTxU4TcYnXRrfNxm4U-4MRMv1YL5bvcM';

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('.search-input');
const imageContainer = document.querySelector('.image-container');
const noResult = document.querySelector('.no-result');

async function searchImages(query) {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    imageContainer.innerHTML = ''; 

    if (data.results.length === 0) {
        noResult.textContent = 'No images found.';
        return;
    } else {
        noResult.textContent = '';
    }

    data.results.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.urls.small;
        img.alt = photo.alt_description || 'Image';
        imageContainer.appendChild(img);
    });
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query !== '') {
        searchImages(query);
    }
});
