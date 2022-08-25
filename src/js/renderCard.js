const mainSection = document.querySelector('.card__list');
export const renderCard = function (
  id,
  poster_path,
  title,
  name,
  genre,
  release_date,
  first_air_date,
  vote_average
) {
  let poster_url;
  if (!poster_path) {
    poster_url = `https://img.freepik.com/free-vector/funny-error-404-background-design_1167-219.jpg`;
  } else {
    poster_url = `https://www.themoviedb.org/t/p/w500${poster_path}`;
  }
  const movieEl = document.createElement('li');
  movieEl.classList.add('card__item');
  


  movieEl.innerHTML = `<a class="card__link" id = "${id}" href="#">
        <img src="${poster_url}" alt ="${title ?? name}" class="card__poster">
            <h2 class="card__title">${title ?? name}</h2>
            <p class="card__genre">${genre} | ${
    release_date ? release_date.slice(0, 4) : first_air_date.slice(0, 4)
  }</p></a>`;
  mainSection.appendChild(movieEl);
};
