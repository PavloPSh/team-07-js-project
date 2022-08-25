import filmsAPI from './apiServiсe';
const trendingFilms = new filmsAPI();
const filmCard = document.querySelector('.card__list');
filmCard.addEventListener('click', onFilmCardClick);

async function fetchFilmData(filmID) {
  const response = await trendingFilms.getFilmID(filmID);
  return response.data;
}

function onFilmCardClick(e) {
  e.preventDefault();
  if (
    e.target.closest('.card__link')?.querySelector('card__poster') === undefined
  ) {
    return;
  }

  fetchFilmData(e.target.closest('.card__link').id).then(film => {
    const {
      title,
      name,
      poster_path,
      id,
      vote_average,
      genre_ids,
      first_air_date,
      release_date,
    } = film;

    try {
      setTimeout(() => {
        renderMovieModal(
          title,
          name,
          poster_path,
          id,
          vote_average,
          genre_ids,
          first_air_date,
          release_date
        );
      }, 100);
    } catch (error) {
      console.log('error');
    }
  });
}

function renderMovieModal(
  title,
  name,
  poster_path,
  id,
  vote_average,
  genre_ids,
  first_air_date,
  release_date
) {
  console.log(
    title,
    name,
    poster_path,
    id,
    vote_average,
    genre_ids,
    first_air_date,
    release_date
  );
}

// import { renderCard } from '../js/renderCard';

// const itemEl = document.querySelector('.card__item');
// itemEl.setAttribute('data-popup-modal-open', '');

// const refs = {
//     openPopupModalBtn: document.querySelector('[data-popup-modal-open]'),
//     сlosePopupModalBtn: document.querySelector('[data-popup-modal-close]'),
//     popupModal: document.querySelector('[data-popup-modal]'),
//   };

//   console.log(refs.openPopupModalBtn);

//   refs.openPopupModalBtn.addEventListener('click', onOpenPopup);
//   refs.closePopupModalBtn.addEventListener('click', onClosePopup);
//   refs.popupModal.addEventListener('click', popupModalClick)

//   function onOpenPopup() {
//   refs.popupModal.classList.remove('is-hidden');
//   window.addEventListener('keydown', onPressESC);
//   }

//   function onClosePopup() {
//   refs.popupModal.classList.add('is-hidden');
//   window.removeEventListener('keydown', onPressESC);
//   }

//   function popupModalClick(event) {
//   if (event.target.classList.contains('popup__body--close')) {
//   onClosePopup();
//   }
//   }

//   function onPressESC(event) {
//   if (event.keyCode === 27) {
//       onClosePopup();
//   }
//   }
