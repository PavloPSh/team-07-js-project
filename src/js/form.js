import Notiflix from 'notiflix';
import { renderCard } from './renderCard';
import filmsAPI from './apiServiсe';
import './modal-footer';
import { getGenreName } from './getGenreName';

const trendingFilms = new filmsAPI();
const searchForm = document.querySelector('#search-form');
const mainSection = document.querySelector('.card__list');
const loader = document.querySelector('.loader__wrapper');

let inputData = '';

async function onFormSubmit(event) {
  event.preventDefault();
  trendingFilms.currentPage = 1;
  mainSection.innerHTML = '';
  inputData = event.currentTarget.elements.searchData.value;
  if (inputData === '') {
    return Notiflix.Notify.warning('try to find something');
  }
  try {
    const result = await trendingFilms.getMovieSearch(inputData);
    loader.classList.remove('hidden');
    if (result.data.total_results === 0) {
      noFilmFound();
      loader.classList.add('hidden');
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
    console.log('error');
  }
  infinteScroll();
}

searchForm?.addEventListener('submit', onFormSubmit);

async function LoadMorePhoto() {
  trendingFilms.currentPage += 1;
  try {
    const result = await trendingFilms.getMovieSearch(inputData);
    if (result.data.total_pages === 1) {
      endOfSearch();
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
    console.log('error');
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
const alertImagesFound = data =>
  Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);

const endOfSearch = () =>
  Notiflix.Notify.info(
    "We're sorry, but you've reached the end of search results."
  );
