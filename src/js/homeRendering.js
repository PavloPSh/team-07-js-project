// import filmsAPI from './apiServiсe';
// import { onScroll, onToTopBtn } from './scroll';
// import onFormSubmit from './form';
// import Notiflix from 'notiflix';

// export const trendingFilms = new filmsAPI();

// const mainSection = document.querySelector('.card__list');

// const homeBtn = document.querySelector('.header__nav-link');

// const IMG_URL = `https://image.tmdb.org/t/p/w500`;

// // onScroll();
// // onToTopBtn();

// export function TrendingFilms(event) {
//   event.preventDefault();
//   document.querySelector('.search-form').firstElementChild.value = '';
//   trendingFilms.currentPage = 1;
//   mainSection.innerHTML = '';
//   trendingFilms.getTrendingFilms().then(result => {
//     result.data.results.forEach(film => {
//       const {
//         title,
//         name,
//         poster_path,
//         id,
//         vote_average,
//         genre_ids,
//         first_air_date,
//         release_date,
//       } = film;
//       let genre = getGenreName(genre_ids);
//       setTimeout(() => {
//         renderCard(
//           id,
//           poster_path,
//           title,
//           name,
//           genre,
//           first_air_date,
//           release_date,
//           vote_average
//         );
//       }, 150);
//     });
//   });
//   setTimeout(() => {
//     infinteScroll();
//   }, 500);
// }
// homeBtn.addEventListener('click', TrendingFilms);

// function LoadMorePhoto() {
//   console.log('start');
//   trendingFilms.currentPage += 1;
//   trendingFilms.getTrendingFilms().then(result => {
//     result.data.results.forEach(film => {
//       const {
//         title,
//         name,
//         poster_path,
//         id,
//         vote_average,
//         genre_ids,
//         first_air_date,
//         release_date,
//       } = film;
//       let genre = getGenreName(genre_ids);
//       setTimeout(() => {
//         renderCard(
//           id,
//           poster_path,
//           title,
//           name,
//           genre,
//           first_air_date,
//           release_date,
//           vote_average
//         );
//       }, 100);
//     });
//   });
//   setTimeout(() => {
//     infinteScroll();
//   }, 500);
// }

// trendingFilms
//   .getGenres()
//   .then(res =>
//     res.data.genres.forEach(genre => localStorage.setItem(genre.id, genre.name))
//   );

// export const getGenreName = function (ids) {
//   let genre = [];

//   ids.forEach(id => {
//     genre.push(localStorage.getItem(id));
//   });
//   return genre;
// };

// export const renderCard = function (
//   id,
//   poster_path,
//   title,
//   name,
//   genre,
//   release_date,
//   first_air_date,
//   vote_average
// ) {
//   const movieEl = document.createElement('li');
//   movieEl.classList.add('card__item');

//   movieEl.innerHTML = `<a class="card__link" id = "${id}" href="#">
//         <img src="${IMG_URL + poster_path}" alt ="${
//     title ?? name
//   }" class="card__poster">
        
//             <h2 class="card__title">${title ?? name}</h2>
//             <p class="card__genre">${genre} | ${
//     release_date ? release_date.slice(0, 4) : first_air_date.slice(0, 4)
//   }</p></a>`;
//   mainSection.appendChild(movieEl);
// };

// const infinteObserver = new IntersectionObserver(
//   ([entry], observer) => {
//     // перевірка останього елемента
//     if (entry.isIntersecting) {
//       // перестаємо його відслідковувати
//       observer.unobserve(entry.target);
//       console.log('start');
//       // Завантажуємо нову порцію контенту
//       LoadMorePhoto();
//     }
//   },
//   { threshold: 0.5 }
// );

// const infinteScroll = () => {
//   const lastCard = document.querySelector('.card__item:last-child');
//   if (lastCard) {
//     infinteObserver.observe(lastCard);
//   }
// };
