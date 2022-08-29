import Notiflix from 'notiflix';
import { onQueueBtnClick } from './queue-btn';
import { renderCard } from './renderCard';
// import { renderQueueCard } from './queue-btn';

const watchedBtn = document.querySelector('button[data-action="watched"]');
const queueBtn = document.querySelector('button[data-action="queue"]');
// const queueMovies = JSON.parse(localStorage.getItem('Queque:'));
const mainSection = document.querySelector('.card__list');
const watchedMovies = JSON.parse(localStorage.getItem('Watched:'));
const loader = document.querySelector('.loader__wrapper');
const clearBtn = document.querySelector('.clear-btn');
// console.log(watchedMovies);
console.log(location)
const test = localStorage.setItem('local-data', `${location.href}`)
export const addres = test;
// console.log(addres)
// export const myLibraryLocation = {
//   location: `${location}`
// };
// console.log(myLibraryLocation)

watchedBtn?.addEventListener('click', onWatchBtnClick);
clearBtn?.addEventListener('click', onClearBtnClick);

// onWatchBtnClick();
firstBtnActive();



// const IsActiveBtn = localStorage.setItem('last-active-btn', 'watchedButton');
function firstBtnActive() {
  if (localStorage.getItem('last-active-btn') === 'watchedButton') {
    console.log(localStorage.getItem('last-active-btn'))
    return onWatchBtnClick()
  }

  if (localStorage.getItem('last-active-btn') === 'queueButton') {
    console.log(localStorage.getItem('last-active-btn'))
    return onQueueBtnClick()
  } else {
    onWatchBtnClick()
  }
}





function onWatchBtnClick() {
  loader.classList.remove('hidden');
  watchedBtn.classList.add('current-btn');
  queueBtn.classList.remove('current-btn');
  clearBtn.classList.add('clear-btn--visible')
  localStorage.setItem('last-active-btn', 'watchedButton')

  if (watchedMovies === null || watchedMovies.length === 0) {
    // mainSection.innerHTML = '';
    clearBtn.classList.remove('clear-btn--visible')
    clearBtn.classList.add('clear-btn')
    onEmptyMoviesStorage();
    loader.classList.add('hidden');
    // onEmptyMoviesStorage();
    return Notiflix.Notify.failure('You need to add at least 1 movie.', {timeout: 1500});
  }

  mainSection.innerHTML = '';

  renderWatchedCard();
  loader.classList.add('hidden');
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

export function onEmptyMoviesStorage() {
  const warningText = `<li class="card__item">You don't have any movies added.</li>`;
  mainSection.innerHTML = warningText;
}

function onClearBtnClick() {
  mainSection.innerHTML = '';
  localStorage.removeItem('Watched:');
  location.reload();
  // mainSection.innerHTML = '';
}

// function onQueueBtnClickv2() {
//   mainSection.innerHTML = '';
//   watchedBtn.classList.remove('current-btn');
//   queueBtn.classList.add('current-btn');

//   if (queueMovies === null || queueMovies.length === 0) {
//     // mainSection.innerHTML = '';
//     onEmptyMoviesStorage();
//     loader.classList.add('hidden');
//     return Notiflix.Notify.failure('You need to add at least 1 movie.', {timeout: 1500});
//   }

//   renderQueueCard();
//   loader.classList.add('hidden');
// }

// localStorage.clear()