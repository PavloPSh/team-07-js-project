
const gallery = document.querySelector('.gallery');

function renderGallery(name) {
  const markup = name.movies
    .map(movie => {
      return `<div class="movie-card">
        <a class="movie-card__item" href="${}">
          <img
            class="gallery__movie"
            src="${IMG_URL}"
            alt="${image}"
            loading="lazy"
        /></a>
        <div class="info">
         <h3 claass="info__title">${movie.title}</h3>
            <p class="info__genre">${movie.genre_ids}</p>
            <p class="info__release">${movie.release_date}</p>
            <p class="info__rating">${movie.vote_average}</p>
           
        </div>
      </div>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}