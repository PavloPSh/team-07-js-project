function renderGallery(name) {
  const markup = name.items
    .map(item => {
      return `<div class="movie-card">
        <a class="movie-card__item" href="${}">
          <img
            class="gallery__movie"
            src="${}"
            alt="${}"
            loading="lazy"
        /></a>
        <div class="info">
        <h3 class="name-movie">${}</h3>
            
            <p class="genre">${}</p>
            <p class="year">${}</p>
            <p class="rating">${}</p>
            
          </div>
      </div>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}