import { genres } from './genres';
const loader = document.querySelector('.loader__wrapper');

import { renderCard } from './renderCard';
import { getGenreName } from './getGenreName';
import Notiflix from 'notiflix';

import filmsAPI from './apiServiсe';
const filters = new filmsAPI();

const mainSection = document.querySelector('.card__list');
const formEl = document.querySelector('.genre-search');
const searchGenreEl = document.querySelector('#genres');
const searchBtnOpen = document.querySelector('.search-btn--open');
const searchBtnClose = document.querySelector('.search-btn--close');
const searchBackdrop = document.querySelector('.filter__wrap');

let genresList = genres;

formEl.addEventListener('change', event => {
  let formValue = event.target;
  event.preventDefault();
  filters.currentPage = 1;

  if (formValue.id === 'years') {
    if (formValue.value !== 'year') {
      loader.classList.remove('hidden');
      onClickSearchBtnClose();
      Notiflix.Notify.success(
        `Hooray! Here your films by ${formValue.value} year!`
      );
      filters.year = formValue.value;
      markupMoviesByYear();
      loader.classList.remove('hidden');
    }
  }
  if (formValue.id === 'genres') {
    if (formValue.value !== 'genres') {
      loader.classList.remove('hidden');
      Notiflix.Notify.success(`Hooray! Here your ${formValue.value} movies!`);
      for (const el of genresList) {
        if (el.name === formValue.value) {
          filters.genreId = el.id;
          markupMoviesByGenres();
          onClickSearchBtnClose();
        }
      }
      loader.classList.remove('hidden');
    }
  }
  if (formValue.id === 'popularity') {
    if (formValue.value !== 'option') {
      loader.classList.remove('hidden');
      searchBackdrop.classList.remove('is-open');
      onClickSearchBtnClose();
      Notiflix.Notify.success(`Hooray! We found most popular movies!`);
      filters.popularity = formValue.value;
      console.log(
        '🚀 ~ file: filter.js ~ line 68 ~ filters.popularity',
        filters.popularity
      );
      markupMoviesByPopularity();
      loader.classList.remove('hidden');
    }
  }
  formEl.reset();
});

searchBtnOpen.addEventListener('click', onClickSearchBtnOpen);
searchBtnClose.addEventListener('click', onClickSearchBtnClose);
function onClickSearchBtnOpen() {
  searchBackdrop.classList.add('is-open');
}

function onClickSearchBtnClose() {
  searchBackdrop.classList.remove('is-open');
}
async function markupMoviesByGenres() {
  mainSection.innerHTML = '';
  try {
    loader.classList.remove('hidden');
    const result = await filters.getMoviesByGenres();
    result.data.results.forEach(film => {
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

      let genre = getGenreName(genre_ids);
      renderCard(
        id,
        poster_path,
        title,
        name,
        genre,
        first_air_date,
        release_date,
        vote_average
      );
    });
    loader.classList.add('hidden');
  } catch (error) {
    console.log(error);
  }
  infinteScrollByGenres();
}
async function markupMoviesByPopularity() {
  mainSection.innerHTML = '';
  try {
    loader.classList.remove('hidden');
    const result = await filters.getMoviesByPopularity();
    result.data.results.forEach(film => {
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
      let genre = getGenreName(genre_ids);
      renderCard(
        id,
        poster_path,
        title,
        name,
        genre,
        first_air_date,
        release_date,
        vote_average
      );
    });
    loader.classList.add('hidden');
  } catch (error) {
    console.log(error);
  }
  infinteScrollByPopularity();
}
async function markupMoviesByYear() {
  mainSection.innerHTML = '';
  try {
    loader.classList.remove('hidden');
    const result = await filters.getMoviesByYear();
    result.data.results.forEach(film => {
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
      let genre = getGenreName(genre_ids);
      renderCard(
        id,
        poster_path,
        title,
        name,
        genre,
        first_air_date,
        release_date,
        vote_average
      );
    });
    loader.classList.add('hidden');
  } catch (error) {
    console.log(error);
  }
  infinteScrollByYear();
}
async function LoadMoreMovieByGenres() {
  filters.currentPage += 1;
  try {
    const result = await filters.getMoviesByGenres();
    result.data.results.forEach(film => {
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
      let genre = getGenreName(genre_ids);
      renderCard(
        id,
        poster_path,
        title,
        name,
        genre,
        first_air_date,
        release_date,
        vote_average
      );
    });
  } catch (error) {
    console.log(error);
  }
  infinteScrollByGenres();
}
async function LoadMoreMovieByPopularity() {
  filters.currentPage += 1;
  try {
    const result = await filters.getMoviesByPopularity();
    result.data.results.forEach(film => {
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
      let genre = getGenreName(genre_ids);
      renderCard(
        id,
        poster_path,
        title,
        name,
        genre,
        first_air_date,
        release_date,
        vote_average
      );
    });
  } catch (error) {
    console.log(error);
  }
  infinteScrollByPopularity();
}
async function LoadMoreMovieByYear() {
  filters.currentPage += 1;
  try {
    const result = await filters.getMoviesByYear();
    result.data.results.forEach(film => {
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
      let genre = getGenreName(genre_ids);
      renderCard(
        id,
        poster_path,
        title,
        name,
        genre,
        first_air_date,
        release_date,
        vote_average
      );
    });
  } catch (error) {
    console.log(error);
  }
  infinteScrollByYear();
}

const infinteObserverByGenres = new IntersectionObserver(
  ([entry], observer) => {
    // перевірка останього елемента
    if (entry.isIntersecting) {
      // перестаємо його відслідковувати
      observer.unobserve(entry.target);
      // Завантажуємо нову порцію контенту
      LoadMoreMovieByGenres();
    }
  },
  { threshold: 0.5 }
);

const infinteScrollByGenres = () => {
  const lastCard = document.querySelector('.card__item:last-child');
  if (lastCard) {
    infinteObserverByGenres.observe(lastCard);
  }
};

const infinteObserverByPopularity = new IntersectionObserver(
  ([entry], observer) => {
    // перевірка останього елемента
    if (entry.isIntersecting) {
      // перестаємо його відслідковувати
      observer.unobserve(entry.target);
      // Завантажуємо нову порцію контенту
      LoadMoreMovieByPopularity();
    }
  },
  { threshold: 0.5 }
);

const infinteScrollByPopularity = () => {
  const lastCard = document.querySelector('.card__item:last-child');
  if (lastCard) {
    infinteObserverByPopularity.observe(lastCard);
  }
};

const infinteObserverByYear = new IntersectionObserver(
  ([entry], observer) => {
    // перевірка останього елемента
    if (entry.isIntersecting) {
      // перестаємо його відслідковувати
      observer.unobserve(entry.target);
      // Завантажуємо нову порцію контенту
      LoadMoreMovieByYear();
    }
  },
  { threshold: 0.5 }
);

const infinteScrollByYear = () => {
  const lastCard = document.querySelector('.card__item:last-child');
  if (lastCard) {
    infinteObserverByYear.observe(lastCard);
  }
};
