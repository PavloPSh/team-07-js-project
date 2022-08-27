import filmsAPI from './apiServiсe';
import { renderMovieModal } from './renderPopupCard';
const trendingFilms = new filmsAPI();
const filmCard = document.querySelector('.section');
filmCard.addEventListener('click', onFilmCardClick);

const STORAGE_WATCHED = "Watched:";
const STORAGE_QUEUE = "Queque:";

const watchedFilmsArray = JSON.parse(localStorage.getItem(STORAGE_WATCHED)) || [];
const queueFilmsArray = JSON.parse(localStorage.getItem(STORAGE_QUEUE)) || [];


async function fetchFilmData(filmID) {
  const response = await trendingFilms.getFilmID(filmID);
  return response.data;
}

function onFilmCardClick(e) {
  e.preventDefault();
  if (
    e.target.closest('.card__link')?.querySelector('card__poster') === undefined
  ) {
    return;
  }

  fetchFilmData(e.target.closest('.card__link').id).then(film => {
    
    // pop up fetched movie id
    let parentId = (e.target.closest('.card__link').id);
    
    //refs
    let isInWatched = false;
    let isInQueue = false;
    let watchBtnLabel = "";
    let queueBtnLabel = "";
    
    //find if movie is in watched
    const temp = watchedFilmsArray;
    temp.find(value => {
      if (value.id == parentId) {
        isInWatched = true;
      }
    });
    
    //find if movie is in queue
    const temp2 = queueFilmsArray;
    temp2.find(value => {
      if (value.id == parentId) {
        isInQueue = true;
      }
    })
    
    //build add or delete to watch label
    if (isInWatched) {
      watchBtnLabel = "Remove from watched"
    } else {
      watchBtnLabel = "Add to watched"
    }
    
    //build add or delete to queue label
    if (isInQueue) {
      queueBtnLabel = "Remove from queue"
    } else {
    queueBtnLabel = "Add to queue"
    }

    // временный костыль)) 
    document.addEventListener('click', (e) => {

      // logic for button "add to watch"
      if (e.target.classList.contains('watched-button') && e.target.getAttribute('data-id') === parentId) {
        
        if (isInWatched) {
          const indexWatchMovieRemove = watchedFilmsArray.findIndex(movie => {
            return movie.id == parentId;
          });
          watchedFilmsArray.splice(indexWatchMovieRemove, 1);
          localStorage.setItem(STORAGE_WATCHED, JSON.stringify(watchedFilmsArray));
          isInWatched = false;
          e.target.innerText = "Add to watched";
        }
        else {
          watchedFilmsArray.push(film);
          localStorage.setItem(STORAGE_WATCHED, JSON.stringify(watchedFilmsArray));
          console.log("add to watched ");
          isInWatched = true;
          e.target.innerText = "Remove to watched";
          }
      }

      // logic for button "add to queue"
      
      if (e.target.classList.contains('queque-button') && e.target.getAttribute('data-id') === parentId) {
        
        if (isInQueue) {
          const indexQueueMovieRemove = queueFilmsArray.findIndex(movie => {
            return movie.id == parentId;
          });

          console.log(indexQueueMovieRemove);
          console.log(queueFilmsArray);

          queueFilmsArray.splice(indexQueueMovieRemove, 1);
          localStorage.setItem(STORAGE_QUEUE, JSON.stringify(queueFilmsArray));
          isInQueue = false;
          e.target.innerText = "Add to queue";
        }
        else {
          queueFilmsArray.push(film);
          localStorage.setItem(STORAGE_QUEUE, JSON.stringify(queueFilmsArray));
          console.log("add to queue ");
          isInQueue = true;
          e.target.innerText = "Remove from queue";
          }
        }
    });


    const {
      title,
      name,
      poster_path,
      id,
      vote_average,
      vote_count,
      popularity,
      overview,
      genre_ids,
      genre,
    } = film;
    try {
      setTimeout(() => {
        renderMovieModal(
          title,
          name,
          poster_path,
          id,
          vote_average,
          vote_count,
          popularity,
          overview,
          genre_ids,
          genre,
          watchBtnLabel,
          queueBtnLabel
        );
      }, 100);
    } 
    catch (error) {
      console.log('error');
    }
  });
}


const modalRef = document.querySelector('.modal');
modalRef.addEventListener('click', onModalClose);
document.addEventListener('keydown', onModalClose);

function onModalClose(e) {
  if (e.target.classList.contains('popup') || e.keyCode === 27 || e.target.classList.contains('popup-button__close')) {
    modalRef.classList.remove('popup')
    modalRef.innerHTML = ''
  }
}

