import Notiflix from 'notiflix';
import { renderCard } from './renderCard';
import filmsAPI from './apiServiсe';
import './modal-footer';


const trendingFilms = new filmsAPI();
const searchForm = document.querySelector('#search-form');
const mainSection = document.querySelector('.card__list');

let inputData = '';

const onFormSubmit = function (event) {
  event.preventDefault();
  trendingFilms.currentPage = 1;
  mainSection.innerHTML = '';
  inputData = event.currentTarget.elements.searchData.value;
  if (inputData === '') {
    return Notiflix.Notify.warning('try to find something');
  }
  trendingFilms.getMovieSearch(inputData).then(result => {
    if (result.data.total_results === 0) {
      noFilmFound();
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
      console.log('2');
      try {
        setTimeout(() => {
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
        }, 150);
        setTimeout(() => {
          infinteScroll();
        }, 500);
      } catch (error) {
        console.log('error');
      }
    });
  });
};

searchForm.addEventListener('submit', onFormSubmit);

function LoadMorePhoto() {
  console.log('start');
  trendingFilms.currentPage += 1;
  trendingFilms.getMovieSearch(inputData).then(result => {
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
      try {
        setTimeout(() => {
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
        }, 100);
        setTimeout(() => {
          infinteScroll();
        }, 500);
      } catch (error) {
        console.log('error');
      }
    });
  });
}
trendingFilms
  .getGenres()
  .then(res =>
    res.data.genres.forEach(genre => localStorage.setItem(genre.id, genre.name))
  );

const getGenreName = function (ids) {
  let genre = [];

  ids.forEach(id => {
    genre.push(localStorage.getItem(id));
  });
  return genre;
};

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
