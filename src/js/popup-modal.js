import filmsAPI from './apiServiсe';
import { renderMovieModal } from './renderPopupCard';
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
      vote_count,
      popularity,
      overview,
      genre_ids,
      genre,
    } = film;

    try {
      setTimeout(() => {
        renderMovieModal(
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
        );
      }, 100);
    } 
    catch (error) {
      console.log('error');
    }
  });
}

const modalRef = document.querySelector('.modal');
modalRef.addEventListener('click', onModalClose);

function onModalClose(e) {
  if (e.target.classList.contains('popup')) {
    modalRef.classList.remove('popup')
    modalRef.innerHTML = ''
  }
}



// buttonClose.addEventListener('click', onButtonClose);

// function onButtonClose(e) {
//   if (e.target.classList.contains('popup-button')) {
//     buttonClose.classList.remove('popup-button')
//     buttonClose.innerHTML = ''
//   }
// }
