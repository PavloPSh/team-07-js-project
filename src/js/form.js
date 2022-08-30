import Notiflix from 'notiflix';
import { renderCard } from './renderCard';
import './modal-footer';
import { getGenreName } from './getGenreName';
import { refs } from './refs';

import filmsAPI from './apiServiсe';
const trendingFilms = new filmsAPI();

async function onFormSubmit(event) {
  event.preventDefault();
  trendingFilms.currentPage = 1;
  refs.mainSection.innerHTML = '';
  trendingFilms.inputData = event.currentTarget.elements.searchData.value;
  if (trendingFilms.inputData === '') {
    return checkingEmptyField();
  }
  try {
    const result = await trendingFilms.getMovieSearch();
    refs.loader.classList.remove('hidden');
    if (result.data.total_results === 0) {
      noFilmFound();
      refs.loader.classList.add('hidden');
      return;
    }
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
      console.log("🚀 ~ file: form.js ~ line 38 ~ onFormSubmit ~ genre", genre + id)
      
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
    refs.loader.classList.add('hidden');
  } catch (error) {
    console.log(error);
  }
  infinteScroll();
}

refs.searchForm?.addEventListener('submit', onFormSubmit);

async function LoadMorePhoto() {
  trendingFilms.currentPage += 1;
  try {
    const result = await trendingFilms.getMovieSearch();
    if (result.data.total_pages === 1) {
      return endOfSearch();
    }
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
  infinteScroll();
}

const infinteObserver = new IntersectionObserver(
  ([entry], observer) => {
    // перевірка останього елемента
    if (entry.isIntersecting) {
      // перестаємо його відслідковувати
      observer.unobserve(entry.target);
      // Завантажуємо нову порцію контенту
      LoadMorePhoto();
    }
  },
  { threshold: 0.5 }
);

const infinteScroll = () => {
  const lastCard = document.querySelector('.card__item:last-child');
  if (lastCard) {
    infinteObserver.observe(lastCard);
  }
};

const noFilmFound = () =>
  Notiflix.Notify.info(
    'Search result was NOT successful. Enter the correct movie name and try again!'
  );
const checkingEmptyField = () =>
  Notiflix.Notify.success(`try to find something.`);

const endOfSearch = () =>
  Notiflix.Notify.info(
    "We're sorry, but you've reached the end of search results."
  );
