import filmsAPI from './apiServiсe';
import { renderCard } from './renderCard';
import { getGenreName } from './getGenreName';

const trendingFilms = new filmsAPI();
const mainSection = document.querySelector('.card__list');
const homeBtn = document.querySelector('.header__nav-link');
const logoLink = document.querySelector('.header__logo');
const loader = document.querySelector('.loader__wrapper');

async function TrendingFilms(event) {
  event.preventDefault();
  document.querySelector('#search-form').firstElementChild.value = '';
  trendingFilms.currentPage = 1;
  mainSection.innerHTML = '';
  try {
    loader.classList.remove('hidden');
    const result = await trendingFilms.getTrendingFilms();
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
logoLink.addEventListener('click', TrendingFilms);
homeBtn.addEventListener('click', TrendingFilms);
window.addEventListener('load', TrendingFilms);

async function LoadMorePhoto() {
  trendingFilms.currentPage += 1;
  try {
    const result = await trendingFilms.getTrendingFilms();
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
