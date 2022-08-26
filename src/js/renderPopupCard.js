import filmsAPI from './apiServiсe';
const trendingFilms = new filmsAPI();
const filmCard = document.querySelector('.card__list');

export const renderMovieModal = function (
    title,
    name,
    poster_path,
    id,
    vote_average,
    vote_count,
    popularity,
    overview,
    genre_ids,
    genre,
  ) {
    let poster_url;
    if (!poster_path) {
      poster_url = `https://img.freepik.com/free-vector/funny-error-404-background-design_1167-219.jpg`;
    } else {
      poster_url = `https://www.themoviedb.org/t/p/w500${poster_path}`;
    }
    const popupCards = document.querySelector('.modal');
    popupCards.classList.add('popup');
    // popupCards.classList.remove('modal');

    popupCards.innerHTML = ` <div class="popup__body popup__body--close">
    <button type="button" class="popup-button" data-popup-modal-close>
        <svg class="popup-button__close" width="14" height="14">
        <use href='./images/icon-cross.svg#icon-cross'></use>
        </svg>
        </button>
    <div class="popup__content">
        <div class="popup--leftpart">
            <img class="popup__img" src="${poster_url}" alt ="${title ?? name}">
            </div>
            <div class="popup--rightpart">
            <h2 class="popup__title">${title ?? name}</h2>
            <ul class="popup__list">
              <li class="popup__item">Vote&#47;Votes <span class="popup__span popup__span--background">${vote_average} </span> &#47; <span class="popup__span"> ${vote_count}</span></li>
              <li class="popup__item">Popularity <span class="popup__span popup__span__popularity">${popularity}</span></li>
              <li class="popup__item">Original Title <span class="popup__span popup__span__title">${title ?? name}</span></li>
              <li class="popup__item">Genre <span class="popup__span popup__span__name">${genre}</span></li>
            </ul>
            <h1 class="popup__about">About</h1>
            <p class="popup__overview">${overview}</p>
            <div class="popup__button">
            <button class="watched-button" type="submit">Add to watched</button>
            <button class="queque-button" type="submit">Add to queque</button>
            </div>    
        </div>
    </div>
  </div>`;
  filmCard.appendChild(popupCards);
  }


