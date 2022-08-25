import filmsAPI from './apiServiсe';
import { renderCard } from './renderCard';

const trendingFilms = new filmsAPI();
const mainSection = document.querySelector('.card__list');
const homeBtn = document.querySelector('.header__nav-link');
const logoLink = document.querySelector('.header__logo');

function TrendingFilms(event) {

  event.preventDefault();
  document.querySelector('#search-form').firstElementChild.value = '';
  trendingFilms.currentPage = 1;
  mainSection.innerHTML = '';
  trendingFilms.getTrendingFilms().then(result => {
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
logoLink.addEventListener('click', TrendingFilms);
homeBtn.addEventListener('click', TrendingFilms);
window.addEventListener('load', TrendingFilms);

function LoadMorePhoto() {
  trendingFilms.currentPage += 1;
  trendingFilms.getTrendingFilms().then(result => {
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
  setTimeout(() => {
    infinteScroll();
  }, 500);
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
