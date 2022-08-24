import axios from 'axios';
export default class filmsAPI {
  constructor() {
    this.currentPage = 0;
    this.lang = 'uk';
    this.Genres = [];
  }
  getTrendingFilms() {
    return axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=2bbca05b4a0698db2e0a185255a0cc70&page=${this.currentPage}&language=${this.lang}`
    );
  }
  getFilmID(filmID) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${filmID}?api_key=2bbca05b4a0698db2e0a185255a0cc70&language=${this.lang}`
    );
  }
  getMovieSearch(str) {
    return axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=2bbca05b4a0698db2e0a185255a0cc70&query=${str}&page=${this.currentPage}&include_adult=false&language=${this.lang}`
    );
  }
  getGenres() {
    return axios.get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=daf1fe8995a61d2fecc007eaa464ca98&language=${this.lang}`
    );
  }
}
