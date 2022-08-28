import Notiflix from 'notiflix';
import { renderCard } from './renderCard';

const watchedBtn = document.querySelector('button[data-action="watched"]');
const queueBtn = document.querySelector('button[data-action="queue"]');
const mainSection = document.querySelector('.card__list');
const watchedMovies = JSON.parse(localStorage.getItem('Watched:'));
console.log(watchedMovies);

watchedBtn?.addEventListener('click', onWatchBtnClick);

onWatchBtnClick();

function onWatchBtnClick() {
  watchedBtn.classList.add('current-btn');
  queueBtn.classList.remove('current-btn');

  if (watchedMovies === null || watchedBtn.length === 0) {
    mainSection.innerHTML = '';
    return Notiflix.Notify.failure('You need to add at least 1 movie.');
  }

  mainSection.innerHTML = '';

  renderWatchedCard();
}

function renderWatchedCard() {
  const watchedL = watchedMovies.map(film => {
    const genres = film.genres.map(genre => genre.name);
    console.log(genres);

    renderCard(
      film.id,
      film.poster_path,
      film.title,
      film.name,
      genres,
      film.first_air_date,
      film.release_date,
      film.vote_average
    );
  });
}
