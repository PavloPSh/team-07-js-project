import { renderCard } from './renderCard';
import { renderMovieModal } from './renderPopupCard'
console.log("Hello")

const watchedBtn = document.querySelector('button[data-action="watched"]');
const queueBtn = document.querySelector('button[data-action="queue"]');
const mainSection = document.querySelector('.card__list');
const watched = JSON.parse(localStorage.getItem('Watched:'));
console.log(watched);

try {
    watchedBtn.addEventListener("click", onWatchBtnClick);
} catch (error) {
    // console.log(error)
}

// watchedBtn.addEventListener("click", onWatchBtnClick);

function onWatchBtnClick() {
  const watchedL = watched.map(film => {

    const genres = film.genres.map(genre => genre.name)
    console.log(genres)

    renderCard(film.id,
    film.poster_path,
    film.title,
    film.name,
    genres,
    film.first_air_date,
    film.release_date,
    film.vote_average)
})
}

// const watchtest = watched[0];

// const { id,
//     poster_path,
//     title,
//     name,
//     genre,
//     release_date,
//     first_air_date,
//     vote_average } = watchtest;

// const watchedL = watched.map(film => {

//     const genres = film.genres.map(genre => genre.name)
//     console.log(genres)

//     return renderCard(film.id,
//     film.poster_path,
//     film.title,
//     film.name,
//     genres,
//     film.first_air_date,
//     film.release_date,
//     film.vote_average)
// })

// // const watchedL = watched.map(film => renderCard( { id,
// //     poster_path,
// //     title,
// //     name,
// //     genre,
// //     release_date,
// //     first_air_date,
// //     vote_average } = film ))
    
// console.log(watchedL)