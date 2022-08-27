import filmsAPI from './apiServiсe';
const ganreName = new filmsAPI();

ganreName.getGenres().then(res =>
  res.data.genres.forEach(genre => {
    try {
      localStorage.setItem(genre.id, genre.name);
    } catch (error) {
      console.log('error');
    }
  })
);

export const getGenreName = function (ids) {
  let genre = [];
  ids.forEach(id => {
    genre.push(localStorage.getItem(id));
  });
  return genre;
};
