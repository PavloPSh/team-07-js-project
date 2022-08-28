import Notiflix from 'notiflix';
import { renderCard } from './renderCard';

const queueBtn = document.querySelector('button[data-action="queue"]');
const watchedBtn = document.querySelector('button[data-action="watched"]');
const mainSection = document.querySelector('.card__list');
const queueMovies = JSON.parse(localStorage.getItem('Queque:'));
console.log(queueMovies);

queueBtn?.addEventListener('click', onQueueBtnClick);

function onQueueBtnClick() {
  watchedBtn.classList.remove('current-btn');
  queueBtn.classList.add('current-btn');

  if (queueMovies === null || queueMovies.length === 0) {
    mainSection.innerHTML = '';
    return Notiflix.Notify.failure('You need to add at least 1 movie.');
  }

  mainSection.innerHTML = '';

  renderQueueCard();
}

function renderQueueCard() {
  const queueList = queueMovies.map(film => {
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
