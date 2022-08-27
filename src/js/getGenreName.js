import filmsAPI from './apiServiсe';
const ganreName = new filmsAPI();

async function FetchGenreName() {
  const result = await ganreName.getGenres();
  try {
    result.data.genres.forEach(genre => {
      localStorage.setItem(genre.id, genre.name);
    });
  } catch (error) {
    console.log('error');
  }
}

FetchGenreName();

export const getGenreName = function (ids) {
  let genre = [];
  ids.forEach(id => {
    genre.push(localStorage.getItem(id));
  });
  return genre;
};
